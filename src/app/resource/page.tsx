"use client";

import Image from 'next/image';
import { FaFilter, FaChevronDown, FaChevronRight, FaClock, FaDollarSign } from 'react-icons/fa';

const subjects = [
    'Cybersecurity',
    'Networking',
    'AI & Data Science',
    'Programming',
    'Information Technology',
];

const categories = [
    'Courses',
    'Career Paths',
    'Modules',
    'Resources',
    'Articles',
    'Learning Collections',
];

const cyberCourses = [
    {
        level: 'BEGINNER',
        title: 'Introduction to Cybersecurity',
        description: 'Explore the exciting field of cybersecurity and why cybersecurity is a future-proof career.',
        hours: '6 Hours',
        price: 'Free',
        image: '/assets/home-background.png',
        type: 'Course',
    },
    {
        level: 'BEGINNER',
        title: 'Junior Cybersecurity Analyst',
        description: 'Learn how to protect and defend an organization and gain hands-on experience.',
        hours: '120 Hours',
        price: '',
        image: '/assets/a1sberg.png',
        type: 'Career Path',
    },
    {
        level: 'INTERMEDIATE',
        title: 'Ethical Hacker',
        description: 'Learn the art of offensive security to uncover cyber threats and vulnerabilities.',
        hours: '70 Hours',
        price: 'Free',
        image: '/assets/Title.png',
        type: 'Course',
    },
];

export default function ResourcePage() {
    return (
        <div style={{
            display: 'flex',
            minHeight: '100vh',
            background: '#f5f7fa',
            fontFamily: 'Segoe UI, Arial, sans-serif'
        }}>
            {/* Sidebar */}
            <aside style={{
                width: 300,
                background: '#fff',
                borderRight: '1px solid #e5e7eb',
                padding: '2.5rem 2rem',
                boxShadow: '0 0 16px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column',
                gap: 32
            }}>
                <div>
                    <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 18 }}>Subjects</h2>
                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: 18 }}>
                        {subjects.map(s => (
                            <li key={s} style={{
                                marginBottom: 14,
                                fontSize: 16,
                                color: '#222',
                                cursor: 'pointer',
                                transition: 'color 0.2s'
                            }}
                                onMouseOver={e => (e.currentTarget.style.color = '#1976d2')}
                                onMouseOut={e => (e.currentTarget.style.color = '#222')}
                            >{s}</li>
                        ))}
                        <li style={{
                            color: '#2e7d32',
                            cursor: 'pointer',
                            fontSize: 15,
                            fontWeight: 500,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 4
                        }}>
                            Show More <FaChevronDown size={12} />
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 style={{ fontSize: 19, fontWeight: 600, marginBottom: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
                        <FaFilter /> Filters
                    </h3>
                    <span style={{ fontWeight: 500, fontSize: 15, marginBottom: 8, display: 'block', color: '#555' }}>Category</span>
                    {categories.map(c => (
                        <label key={c} style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: 10,
                            fontSize: 15,
                            cursor: 'pointer',
                            gap: 8
                        }}>
                            <input type="checkbox" style={{
                                accentColor: '#1976d2',
                                width: 16,
                                height: 16
                            }} /> {c}
                        </label>
                    ))}
                </div>
            </aside>

            {/* Main Content */}
            <main style={{
                flex: 1,
                padding: '2.5rem 3rem',
                maxWidth: 1400,
                margin: '0 auto'
            }}>
                <nav style={{
                    fontSize: 14,
                    color: '#888',
                    marginBottom: 18,
                    display: 'flex',
                    gap: 8
                }}>
                    <span style={{ cursor: 'pointer', color: '#1976d2' }}>Home</span>
                    <FaChevronRight size={10} />
                    <span>Learning Catalog</span>
                </nav>
                <h1 style={{ fontSize: 30, fontWeight: 700, marginBottom: 10 }}>Learning Catalog</h1>
                <section style={{ marginBottom: 32 }}>
                    <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 18 }}>Explore the catalog</h2>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: 10
                    }}>
                        <h3 style={{ fontSize: 20, fontWeight: 600 }}>Cybersecurity</h3>
                        <span style={{
                            color: '#2e7d32',
                            fontSize: 15,
                            cursor: 'pointer',
                            fontWeight: 500
                        }}>View all</span>
                    </div>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                        gap: '2rem'
                    }}>
                        {cyberCourses.map(course => (
                            <div key={course.title} style={{
                                background: '#fff',
                                borderRadius: 14,
                                boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                border: '1px solid #e5e7eb',
                                transition: 'box-shadow 0.2s, transform 0.2s',
                                cursor: 'pointer'
                            }}
                                 onMouseOver={e => {
                                     e.currentTarget.style.boxShadow = '0 4px 24px rgba(25, 118, 210, 0.12)';
                                     e.currentTarget.style.transform = 'translateY(-2px)';
                                 }}
                                 onMouseOut={e => {
                                     e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.07)';
                                     e.currentTarget.style.transform = 'none';
                                 }}
                            >
                                <div style={{ position: 'relative', height: 160 }}>
                                    <Image src={course.image} alt={course.title} fill style={{ objectFit: 'cover' }} />
                                    <span style={{
                                        position: 'absolute',
                                        top: 12,
                                        left: 12,
                                        background: course.level === 'BEGINNER' ? '#8bc34a' : '#1976d2',
                                        color: '#fff',
                                        fontWeight: 700,
                                        fontSize: 13,
                                        padding: '4px 14px',
                                        borderRadius: 6,
                                        letterSpacing: 1
                                    }}>{course.level}</span>
                                    <button style={{
                                        position: 'absolute',
                                        top: 12,
                                        right: 12,
                                        background: '#fff',
                                        border: 'none',
                                        borderRadius: '50%',
                                        width: 32,
                                        height: 32,
                                        boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer'
                                    }}>
                                        <FaChevronRight size={16} color="#1976d2" />
                                    </button>
                                </div>
                                <div style={{ padding: '1.2rem 1rem', flex: 1 }}>
                                    <div style={{ fontSize: 13, color: '#888', marginBottom: 6, display: 'flex', gap: 8 }}>
                                        <span>{course.type}</span>
                                        <span style={{ color: '#bbb' }}>•</span>
                                        <span>Self-paced, Instructor-led</span>
                                    </div>
                                    <h3 style={{
                                        fontSize: 18,
                                        fontWeight: 700,
                                        marginBottom: 8,
                                        color: '#222'
                                    }}>{course.title}</h3>
                                    <p style={{
                                        fontSize: 15,
                                        color: '#444',
                                        marginBottom: 16,
                                        minHeight: 44
                                    }}>{course.description}</p>
                                    <div style={{
                                        display: 'flex',
                                        gap: 18,
                                        fontSize: 14,
                                        color: '#666',
                                        alignItems: 'center'
                                    }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <FaClock /> {course.hours}
                    </span>
                                        {course.price && (
                                            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <FaDollarSign /> {course.price}
                      </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
