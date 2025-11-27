"use client";
import {
  Shield,
  Lock,
  ChevronRight,
  CheckCircle,
  Terminal,
  XCircle,
  Unlock,
} from "lucide-react";
import { useState, useEffect } from "react";
import { lessons } from "./contents/lessons";
import { quizQuestions } from "./contents/questions";
import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";

const PROGRESS_COOKIE_KEY = "cyber_progress";

export default function CyberDashboard() {
  const [activeTab, setActiveTab] = useState("fundamentals");

  const [unlockedIndex, setUnlockedIndex] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState(
    Array(quizQuestions.length).fill(null)
  );
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const [checkpointSelected, setCheckpointSelected] = useState<number | null>(
    null
  );
  const [checkpointError, setCheckpointError] = useState(false);

  const activeContent = lessons.find((m) => m.id === activeTab);
  const activeIndex = lessons.findIndex((m) => m.id === activeTab);

  // For now we're just saving the progress in cookies.
  useEffect(() => {
    const savedProgress = Cookies.get(PROGRESS_COOKIE_KEY);
    if (savedProgress) {
      const index = parseInt(savedProgress, 10);

      if (!isNaN(index) && index >= 0) {
        setUnlockedIndex(index);
        if (index < lessons.length) {
          setActiveTab(lessons[index].id);
        } else {
          setActiveTab(lessons[lessons.length - 1].id);
        }
      }
    }
  }, []);

  useEffect(() => {
    Cookies.set(PROGRESS_COOKIE_KEY, String(unlockedIndex), { expires: 365 });
  }, [unlockedIndex]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  useEffect(() => {
    setCheckpointSelected(null);
    setCheckpointError(false);
  }, [activeTab]);

  const handleQuizAnswer = (qIdx: number, choiceIdx: number) => {
    const newAnswers = [...quizAnswers];
    newAnswers[qIdx] = choiceIdx;
    setQuizAnswers(newAnswers);
  };
  const calculateScore = () => {
    return quizAnswers.filter((a, i) => a === quizQuestions[i].answer).length;
  };
  const handleCheckpointSubmit = () => {
    if (
      activeContent &&
      checkpointSelected === activeContent.checkQuestion.correct
    ) {
      if (unlockedIndex === activeIndex) {
        setUnlockedIndex((prev) => prev + 1);
      }
      setCheckpointError(false);
    } else {
      setCheckpointError(true);
    }
  };
  const isCurrentModuleCompleted = unlockedIndex > activeIndex;

  return (
    <div className="pt-20 min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30">
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-xs font-mono text-slate-500">
              <span>PROGRESS:</span>
              <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-cyan-500 transition-all duration-500"
                  style={{
                    width: `${(unlockedIndex / lessons.length) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            <button
              onClick={() => {
                setShowQuiz(!showQuiz);
                setQuizSubmitted(false);
                setQuizAnswers(Array(quizQuestions.length).fill(null));
              }}
              disabled={unlockedIndex < lessons.length}
              className={`px-4 py-2 rounded font-bold text-sm transition-all cursor-pointer flex items-center gap-2
                ${
                  showQuiz
                    ? "bg-slate-800 text-white"
                    : unlockedIndex < lessons.length
                    ? "bg-slate-800 text-slate-500 cursor-not-allowed opacity-50"
                    : "bg-cyan-600 hover:bg-cyan-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                }`}
            >
              {unlockedIndex < lessons.length && !showQuiz && (
                <Lock className="w-3 h-3" />
              )}
              {showQuiz ? "Return to Lessons" : "Take Final Exam"}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row mt-8 gap-8 px-4">
      
        {!showQuiz && (
          <nav className="md:w-64 shrink-0 space-y-2 mb-4 md:mb-0 w-full order-1 md:order-0 p-4 rounded-xl bg-slate-900 md:bg-transparent md:p-0">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 px-2">
              Modules
            </div>
            {lessons.map((module, idx) => {
              const isLocked = idx > unlockedIndex;
              return (
                <button
                  key={module.id}
                  onClick={() => !isLocked && setActiveTab(module.id)}
                  disabled={isLocked}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 
                    ${
                      activeTab === module.id
                        ? "bg-slate-800 text-cyan-400 border-r-2 border-cyan-500 "
                        : isLocked
                        ? "text-slate-600 cursor-not-allowed opacity-60"
                        : "text-slate-400 cursor-pointer hover:bg-slate-900 hover:text-white"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    {module.icon}
                    {module.title}
                  </div>
                  {isLocked ? (
                    <Lock className="w-3 h-3" />
                  ) : idx < unlockedIndex ? (
                    <CheckCircle className="w-3 h-3 text-emerald-500" />
                  ) : null}
                </button>
              );
            })}
          </nav>
        )}

        <main className="flex-1 min-h-[600px] pb-12 w-full order-2 md:order-0 mt-4 md:mt-0">
          {showQuiz ? (
            <div className="max-w-3xl mx-auto bg-slate-900 rounded-2xl border border-slate-800 p-8 shadow-2xl animate-in zoom-in-95 duration-300">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 border-b border-slate-700 pb-4">
                <Lock className="w-6 h-6 text-cyan-500" /> Knowledge Check
              </h2>

              {!quizSubmitted ? (
                <div className="space-y-8">
                  {quizQuestions.map((q, qIdx) => (
                    <div key={qIdx} className="space-y-3">
                      <h3 className="text-lg font-medium text-slate-200">
                        <span className="text-cyan-500 font-bold mr-2">
                          {qIdx + 1}.
                        </span>
                        {q.q}
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {q.choices.map((choice, cIdx) => (
                          <button
                            key={cIdx}
                            onClick={() => handleQuizAnswer(qIdx, cIdx)}
                            className={`p-3 cursor-pointer rounded-lg text-left text-sm border transition-all
                            ${
                              quizAnswers[qIdx] === cIdx
                                ? "bg-cyan-900/30 border-cyan-500 text-cyan-200"
                                : "bg-slate-800 border-transparent hover:bg-slate-750 text-slate-400"
                            }`}
                          >
                            {choice}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={() => setQuizSubmitted(true)}
                    disabled={quizAnswers.includes(null)}
                    className="w-full cursor-pointer py-4 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-lg mt-8 shadow-lg shadow-cyan-900/50 transition-all"
                  >
                    Submit Answers
                  </button>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl font-bold text-white mb-4 animate-bounce">
                    {calculateScore()}{" "}
                    <span className="text-2xl text-slate-500">
                      / {quizQuestions.length}
                    </span>
                  </div>
                  <div className="w-full bg-slate-800 h-4 rounded-full overflow-hidden mb-8 max-w-sm mx-auto">
                    <div
                      className={`h-full transition-all duration-1000 ${
                        calculateScore() > 7
                          ? "bg-cyan-500"
                          : calculateScore() > 4
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                      style={{
                        width: `${
                          (calculateScore() / quizQuestions.length) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                  <p className="text-slate-300 mb-8 text-lg">
                    {calculateScore() === quizQuestions.length
                      ? "Outstanding! You are a Cyber Guardian."
                      : calculateScore() > 7
                      ? "Great job! You are cyber-aware."
                      : "Review the modules to improve your score."}
                  </p>
                  <button
                    onClick={() => {
                      setShowQuiz(false);
                    }}
                    className="px-8 py-3 cursor-pointer bg-slate-700 hover:bg-slate-600 text-white rounded font-bold transition"
                  >
                    Back to Review
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div>
              <div className="mb-8 border-b border-slate-800 pb-4 flex items-center justify-between">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                    {activeContent?.title}
                  </h1>
                  <div className="flex items-center gap-2 text-sm text-slate-500 font-mono">
                    <span>SECURE_CONNECTION</span>
                    <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
                  </div>
                </div>
                <div className="hidden sm:block opacity-20">
                  <Shield className="w-16 h-16" />
                </div>
              </div>

              {activeContent?.content}

              <div className="mt-16 pt-8 border-t border-slate-800">
                <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Lock
                      className={`w-5 h-5 ${
                        isCurrentModuleCompleted
                          ? "text-emerald-500"
                          : "text-cyan-500"
                      }`}
                    />
                    {isCurrentModuleCompleted
                      ? "Module Complete"
                      : "Checkpoint: Unlock Next Module"}
                  </h3>

                  {!isCurrentModuleCompleted ? (
                    <div className="space-y-4">
                      <p className="text-slate-300 font-medium">
                        {activeContent?.checkQuestion.question}
                      </p>
                      <div className="grid gap-2">
                        {activeContent?.checkQuestion.options.map(
                          (opt, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCheckpointSelected(idx)}
                              className={`p-3 rounded text-left text-sm border transition-all cursor-pointer
                              ${
                                checkpointSelected === idx
                                  ? "bg-cyan-950 border-cyan-500 text-cyan-200"
                                  : "bg-slate-900 border-slate-700 hover:border-slate-500 text-slate-400"
                              }`}
                            >
                              {opt}
                            </button>
                          )
                        )}
                      </div>
                      {checkpointError && (
                        <div className="text-red-400 text-sm flex items-center gap-2 animate-pulse">
                          <XCircle className="w-4 h-4" /> Incorrect. Try again.
                        </div>
                      )}
                      <Button
                        onClick={handleCheckpointSubmit}
                        disabled={checkpointSelected === null}
                        className="mt-4 px-6 py-2 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer text-white font-bold rounded transition-all"
                      >
                        Verify & Unlock
                      </Button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between animate-in fade-in slide-in-from-bottom-2">
                      <div className="text-emerald-400 flex items-center gap-2 font-bold">
                        <CheckCircle className="w-5 h-5" /> Authorization
                        Granted.
                      </div>

                      {lessons.indexOf(activeContent!) < lessons.length - 1 ? (
                        <Button
                          onClick={() =>
                            setActiveTab(
                              lessons[lessons.indexOf(activeContent!) + 1].id
                            )
                          }
                          className="cursor-pointer flex items-center gap-2 text-white bg-emerald-600 hover:bg-emerald-500 px-6 py-2 rounded-lg font-bold transition-all shadow-lg shadow-emerald-900/20"
                        >
                          Next Module <ChevronRight className="w-4 h-4" />
                        </Button>
                      ) : (
                        <Button
                          onClick={() => setShowQuiz(true)}
                          className="flex items-center gap-2 text-white cursor-pointer bg-cyan-600 hover:bg-cyan-500 px-6 py-2 rounded-lg font-bold transition-all shadow-lg shadow-cyan-900/20"
                        >
                          Take Final Exam <Unlock className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}