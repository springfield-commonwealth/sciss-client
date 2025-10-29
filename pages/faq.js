import Layout from "@/components/layouts/Layout";
import { FooterCTA, SectionHeader } from "@/components/ui";
import { generateBreadcrumbs } from "@/lib/utils/navigation";
import Link from "next/link";
import { useState } from "react";

const FAQ = ({ breadcrumbs = [] }) => {
    const [openSections, setOpenSections] = useState({});

    const toggleSection = (sectionId) => {
        setOpenSections(prev => ({
            ...prev,
            [sectionId]: !prev[sectionId]
        }));
    };

    const faqSections = [
        {
            id: "basic-info",
            title: "Basic Information",
            icon: "📅",
            content: {
                dates: {
                    title: "Program Dates",
                    items: [
                        "Session 1: June 14 – June 26, 2026 (2 weeks)",
                        "Session 2: June 28 – July 10, 2026 (2 weeks)",
                        "Session 3: July 12 – July 24, 2026 (2 weeks)",
                        "Session 4: July 26 – August 7, 2026 (2 weeks)"
                    ]
                },
                location: {
                    title: "Location",
                    items: [
                        "Springfield Commonwealth Academy",
                        "Address: 1 Ames Hill Dr, Springfield, MA 01105, USA"
                    ]
                }
            }
        },
        {
            id: "eligibility",
            title: "Eligibility & Language",
            icon: "🎓",
            content: {
                grades: {
                    title: "Grade Requirements",
                    items: [
                        "Wall Street Investment Camp: Grades 7–12",
                        "Teen Entrepreneurship Camp: Grades 6–12",
                        "AI & Robotics Camp: Grades 8–12",
                        "Leadership · Art · English · Theatre Camp: Grades 4–12",
                        "Sports Training Camp (Basketball Focus): Grades 4–12"
                    ]
                },
                language: {
                    title: "Language Requirements",
                    items: [
                        "All-English instruction, leveled by proficiency",
                        "Suitable for beginner to advanced learners"
                    ]
                }
            }
        },
        {
            id: "programs",
            title: "Program Highlights",
            icon: "🚀",
            content: {
                investment: {
                    title: "Wall Street Investment Track",
                    items: [
                        "Fundamentals of financial markets and financial statement analysis",
                        "Stock trading simulation and portfolio management",
                        "Macroeconomics and industry research",
                        "$1,000,000 virtual investment competition"
                    ]
                },
                entrepreneurship: {
                    title: "Entrepreneurship Track",
                    items: [
                        "Entrepreneurial mindset and business model design",
                        "Design Thinking (Stanford D-School methodology)",
                        "Market research and industry trend analysis",
                        "AI-powered entrepreneurship tools (e.g., Deepseek, ChatGPT)",
                        "Pitch presentation challenge"
                    ]
                },
                ai: {
                    title: "AI & Robotics Track",
                    items: [
                        "Python programming, machine learning, deep learning",
                        "Transformers and large language models (LLMs)",
                        "Real-world AI applications (autonomous driving, ChatGPT, recommendation systems, etc.)",
                        "Robotics in industry, healthcare, and exploration",
                        "Career paths and future trends",
                        "Team-based AI + Robotics project and final presentation"
                    ]
                },
                leadership: {
                    title: "Leadership · Art · English · Theatre Track",
                    items: [
                        "Public speaking, debate, and English writing",
                        "Leadership training (responsibility, communication, innovation, teamwork)",
                        "Math training / SAT or ACT mock tests / ESL classes",
                        "Art creation (painting, digital art, brand design)",
                        "Music & Theatre Project: vocal training, stage rehearsal, and final performance"
                    ]
                },
                sports: {
                    title: "Sports Training Track (Basketball Focus)",
                    items: [
                        "Basketball skills, tactics, and game play",
                        "Physical fitness and mental strength training",
                        "Professional coaching team (U.S. high school and college athletes)",
                        "Additional sports: soccer, volleyball, golf, dance, and more"
                    ]
                }
            }
        },
        {
            id: "projects",
            title: "Projects & Competitions",
            icon: "🏆",
            content: {
                competitions: {
                    title: "Program Competitions",
                    items: [
                        "AI Camp: AI + Robotics Project Challenge",
                        "Investment Camp: Stock Investment Competition",
                        "Entrepreneurship Camp: Business Pitch Contest",
                        "Leadership Camp: Debate, art exhibition, theatre performance",
                        "Sports Camp: Basketball tournament and skills showcase"
                    ]
                },
                completion: {
                    title: "Completion and Awards",
                    items: [
                        "All students receive an SCISS / YEFA Certificate of Completion",
                        "Additional honors (e.g., Best Investment Team, Best Business Plan, Best Stage Performance)",
                        "Certificates and awards enhance applications to Ivy League universities and Wall Street internships",
                        "Graduates automatically become Summer Camp Alumni, eligible for up to 5 hours of free mentoring for future business competitions, project design, and presentation training"
                    ]
                }
            }
        },
        {
            id: "excursions",
            title: "University Visits",
            icon: "🎓",
            content: {
                visits: {
                    title: "Campus Visits",
                    items: [
                        "Harvard, MIT, Yale, Boston University, Tufts, etc."
                    ]
                },
                cultural: {
                    title: "Cultural Exploration",
                    items: [
                        "Visits to art, history, and military museums",
                        "Immersive U.S. culture experiences"
                    ]
                },
                entertainment: {
                    title: "Entertainment",
                    items: [
                        "Six Flags Amusement Park 🎢"
                    ]
                },
                transportation: {
                    title: "Transportation",
                    items: [
                        "Group airport pickup/drop-off (extra fee)",
                        "Private buses for excursions with teacher supervision"
                    ]
                }
            }
        },
        {
            id: "extracurricular",
            title: "Extracurricular Life",
            icon: "🎉",
            content: {
                screenTime: {
                    title: "🧠 Screen Time Management",
                    items: [
                        "Strict control of electronic device use",
                        "Phones collected on weekday nights to encourage focus and healthy routines",
                        "Returned at lunch for parent contact or emergencies"
                    ]
                },
                sports: {
                    title: "🏀 Sports and Activities",
                    items: [
                        "Basketball (training + matches)",
                        "Soccer, badminton, volleyball, table tennis",
                        "Golf, billiards, frisbee, yoga, etc.",
                        "Dance courses: Zumba for energy and fun"
                    ]
                },
                entertainment: {
                    title: "🎉 Entertainment & Cultural Events",
                    items: [
                        "Bonfire nights, movie nights, culture nights, themed parties",
                        "Laser Tag, Mini Golf",
                        "Six Flags and museum excursions"
                    ]
                },
                talentShow: {
                    title: "🌟 Student Talent Show",
                    items: [
                        "Annual Talent Show organized entirely by students",
                        "Students manage stage planning, hosting, rehearsal, lighting, etc.",
                        "Builds leadership, execution, and teamwork skills"
                    ]
                },
                accommodation: {
                    title: "🏡 Accommodation & Dining",
                    items: [
                        "Student dorms (shared rooms, around 4-5 per room) with 24-hour supervision",
                        "Parent accommodation available upon request (extra cost)",
                        "Mix of Eastern and Western meals",
                        "Balanced daily nutrition to meet diverse cultural needs",
                        "Vegetarian or special diets available upon request"
                    ]
                }
            }
        },
        {
            id: "faculty",
            title: "Faculty & Instruction",
            icon: "👨‍🏫",
            content: {
                instructors: {
                    title: "Expert Faculty",
                    items: [
                        "Investment: Wall Street finance professionals",
                        "Entrepreneurship: Entrepreneurs and startup mentors",
                        "AI/Robotics: University professors and researchers",
                        "Leadership/Arts/Theatre: SCA faculty and art instructors; international festival performances and masterclasses in Week 2",
                        "Sports: U.S. basketball coaches and athletic trainers"
                    ]
                },
                support: {
                    title: "Additional Support",
                    items: [
                        "SAT/ACT/AP Tutoring: Optional professional support available",
                        "College Counseling: University admissions mentors",
                        "Art & Music (Vocal/Stage/Piano/String) Intensives: Optional specialized coaching based on student needs"
                    ]
                }
            }
        },
        {
            id: "admission",
            title: "Admission & Fees",
            icon: "💰",
            content: {
                registration: {
                    title: "Registration",
                    items: [
                        "Official website & WeChat assistant"
                    ]
                },
                tuition: {
                    title: "Tuition",
                    items: [
                        "Includes courses, accommodation, meals, excursions, and activities",
                        "Excludes airfare, visa, and personal expenses, etc."
                    ]
                },
                transfer: {
                    title: "Airport Transfer",
                    items: [
                        "Third-party service, additional fee required"
                    ]
                },
                discounts: {
                    title: "Discounts",
                    items: [
                        "Group registration discounts available",
                        "Scholarships/financial aid for eligible students"
                    ]
                }
            }
        },
        {
            id: "visa",
            title: "Visa & Documents",
            icon: "📋",
            content: {
                requirements: {
                    title: "Visa Requirements",
                    items: [
                        "Students must apply for a B-2 Tourist Visa or F-1 Student Visa",
                        "SCISS provides invitation letters and necessary documentation",
                        "Optional visa interview training available (extra cost)"
                    ]
                }
            }
        },
        {
            id: "safety",
            title: "Safety & Management",
            icon: "🛡️",
            content: {
                security: {
                    title: "24/7 Security & Supervision",
                    items: [
                        "24-hour campus security and dorm supervision",
                        "On-site medical staff; nearby hospitals and urgent care",
                        "Immediate parental contact in case of health issues"
                    ]
                },
                insurance: {
                    title: "Insurance",
                    items: [
                        "Students must have medical and accident insurance",
                        "Onsite insurance provided for international students",
                        "Travel/event insurance included for off-campus excursions"
                    ]
                }
            }
        },
        {
            id: "communication",
            title: "Parent Communication",
            icon: "📱",
            content: {
                updates: {
                    title: "Regular Updates",
                    items: [
                        "Regular updates via WeChat/WhatsApp parent groups",
                        "Photo and activity highlights shared periodically",
                        "Students can video/chat with parents during lunch or weekends"
                    ]
                }
            }
        },
        {
            id: "alumni",
            title: "Alumni Network",
            icon: "🌟",
            content: {
                network: {
                    title: "Alumni Network",
                    items: [
                        "All past participants automatically join the SCISS Alumni Network",
                        "Opportunities to become Counselors or Interns, gaining leadership and management experience"
                    ]
                },
                success: {
                    title: "Success Stories",
                    items: [
                        "Alumni have won top prizes in international investment and business competitions",
                        "Summer program experience + competition success have supported Ivy League admissions and Wall Street internships",
                        "Application by submission and interview"
                    ]
                }
            }
        }
    ];

    const sampleSchedules = [
        {
            title: "Investment Track",
            schedule: [
                "Mon: Opening Ceremony, Money Talk Introduction",
                "Tue: Financial Markets Basics, Stock Trading Simulation",
                "Wed: Macroeconomics & Industry Analysis",
                "Thu: Equity Research Methods",
                "Fri: Financial Statement Analysis, AI in Finance",
                "Sat: Boston Visit (Harvard, MIT)",
                "Sun: Springfield Explore (Basketball Hall of Fame, Museums)"
            ]
        },
        {
            title: "Entrepreneurship Track",
            schedule: [
                "Mon: Entrepreneurial Mindset & Fundraising Logic",
                "Tue: Design Thinking",
                "Wed: Ideation, Customer Discovery & Branding",
                "Thu: Market Research & Trend Analysis",
                "Fri: AI Tools for Business Research",
                "Sat: Boston Visit",
                "Sun: Springfield Explore"
            ]
        },
        {
            title: "Leadership · Art · Theatre Track",
            schedule: [
                "Mon: Keynote Speech, Art Creation",
                "Tue: Leadership (Courage & Responsibility), Writing",
                "Wed: Communication & Innovation, Math/ESL",
                "Thu: Commitment & Responsibility, Theatre Rehearsal",
                "Fri: Team Leadership, Final Rehearsal",
                "Sat: Boston Visit",
                "Sun: Springfield Explore"
            ]
        },
        {
            title: "AI + Robotics Track",
            schedule: [
                "Mon: AI Fundamentals, Python Programming",
                "Tue: Supervised & Unsupervised Learning",
                "Wed: Deep Learning, Transformers",
                "Thu: AI Case Studies + Robotics Coding",
                "Fri: Team Project Showcase",
                "Sat: Boston Visit",
                "Sun: Springfield Explore"
            ]
        },
        {
            title: "Sports Track (Basketball Focus)",
            schedule: [
                "Mon: Fitness Test, Basketball Fundamentals",
                "Tue: Dribbling & Shooting",
                "Wed: Team Tactics & Coordination",
                "Thu: Game Scrimmages",
                "Fri: Conditioning & Skills Showcase",
                "Sat: Visit College Sports Facilities",
                "Sun: Springfield Explore"
            ]
        }
    ];

    return (
        <Layout
            title="FAQ - SCISS Summer School"
            description="Find answers to frequently asked questions about SCISS Summer School programs, dates, eligibility, and more."
            showBreadcrumb={true}
            breadcrumbs={breadcrumbs}
            className="faq-page"
        >
            <div className="padding-top-100"></div>

            {/* Page Header Section */}
            <section className="section page-header-section">
                <div className="container">
                    <div className="page-header-content">
                        <p className="page-subtitle">Everything You Need to Know</p>
                        <h1 className="page-title">Frequently Asked Questions</h1>
                        <p className="page-description">Get comprehensive answers about our 2026 summer programs, from dates and eligibility to activities and accommodations.</p>
                    </div>
                </div>
            </section>

            {/* FAQ Sections */}
            <section className="section faq-sections bg-white topBorder">
                <div className="container">
                    <div className="faq-grid">
                        {faqSections.map((section) => (
                            <div
                                key={section.id}
                                className={`faq-section ${openSections[section.id] ? 'open' : ''}`}
                                onClick={() => toggleSection(section.id)}
                            >
                                <button
                                    className="faq-section-header"
                                    aria-expanded={openSections[section.id]}
                                >
                                    <div className="faq-section-icon">{section.icon}</div>
                                    <h3 className="faq-section-title">{section.title}</h3>
                                    <div className={`faq-chevron ${openSections[section.id] ? 'open' : ''}`}>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                        </svg>
                                    </div>
                                </button>

                                {openSections[section.id] && (
                                    <div className="faq-section-content">
                                        {Object.entries(section.content).map(([key, subsection]) => (
                                            <div key={key} className="faq-subsection">
                                                <h4 className="faq-subsection-title">{subsection.title}</h4>
                                                <ul className="faq-subsection-list">
                                                    {subsection.items.map((item, index) => (
                                                        <li key={index} className="faq-subsection-item">{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sample Weekly Schedules */}
            <section className="section sample-schedules bg-light custom-spacing">
                <div className="container">
                    <SectionHeader
                        title="Sample Weekly Schedule (Week 1)"
                        description="Get a glimpse of what a typical week looks like in each program track"
                        showDivider
                        align="center"
                    />

                    <div className="schedule-showcase">
                        {sampleSchedules.map((schedule, index) => (
                            <div key={index} className="schedule-showcase-card">
                                <div className="schedule-card-header">
                                    <div className="schedule-card-icon">
                                        {index === 0 && "💼"}
                                        {index === 1 && "💡"}
                                        {index === 2 && "🎭"}
                                        {index === 3 && "🤖"}
                                        {index === 4 && "🏀"}
                                    </div>
                                    <h3 className="schedule-card-title">{schedule.title}</h3>
                                </div>

                                <div className="schedule-timeline">
                                    {schedule.schedule.map((day, dayIndex) => {
                                        const dayName = day.split(':')[0];
                                        const dayContent = day.split(':')[1];
                                        return (
                                            <div key={dayIndex} className="schedule-timeline-item">
                                                <div className="timeline-day">
                                                    <span className="day-name">{dayName}</span>
                                                </div>
                                                <div className="timeline-content">
                                                    <span className="day-activities">{dayContent}</span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="schedule-cta">
                        <p className="schedule-cta-text">Want to see the complete detailed sample schedule for the Investment Track?</p>
                        <Link href="/academics#schedule" className="btn btn--primary btn--lg schedule-cta-button">
                            View Full Sample Investment Track Schedule
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="btn-icon">
                                <path d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.44 8.5H2.75a.75.75 0 0 1 0-1.5h8.69L8.22 4.03a.75.75 0 0 1 0-1.06z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Sample Entrepreneurship Accelerator Roadmap */}
            <section className="section roadmap-section bg-white custom-spacing">
                <div className="container">
                    <SectionHeader
                        title="Sample Entrepreneurship Accelerator Roadmap"
                        description="Track your progress through our structured program with a comprehensive timeline of activities, milestones, and achievements"
                        showDivider
                        align="center"
                    />
                    <div className="roadmap-image-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 'var(--space-8) 0' }}>
                        <img
                            src="/images/carousel/roadmap.png"
                            alt="Sample Entrepreneurship Accelerator Roadmap"
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </div>
                </div>
            </section>

            {/* Summary Section */}
            <section className="section faq-summary bg-light custom-spacing">
                <div className="container">
                    <SectionHeader
                        title="Program Summary"
                        description="The SCISS 2026 Summer School is a comprehensive international education program combining academics, arts, sports, cultural exploration, and alumni development."
                        showDivider
                        align="center"
                    />

                    <div className="summary-grid">
                        <div className="summary-card">
                            <div className="summary-icon">🎯</div>
                            <h3>Comprehensive Coverage</h3>
                            <p>AI, Investment, Entrepreneurship, Leadership, Theatre, and Sports</p>
                        </div>
                        <div className="summary-card">
                            <div className="summary-icon">🎓</div>
                            <h3>Student Benefits</h3>
                            <p>Knowledge, certificates, competition awards, leadership growth, and college application enhancement</p>
                        </div>
                        <div className="summary-card">
                            <div className="summary-icon">👨‍👩‍👧‍👦</div>
                            <h3>Parent Confidence</h3>
                            <p>Safe management, diverse activities, nutritious meals, and regular communication</p>
                        </div>
                    </div>
                </div>
            </section>

            <FooterCTA
                link="/courses"
                linkTitle="Programs"
                ctaTitle="Ready to Join SCISS 2026?"
                ctaDescription="Discover our academic programs and find the perfect track for you"
            />
        </Layout>
    );
};

export default FAQ;

export async function getStaticProps() {
    const breadcrumbs = generateBreadcrumbs([
        { label: "Home", href: "/" },
        { label: "FAQ", href: "/faq", active: true },
    ]);

    return {
        props: {
            breadcrumbs,
        },
    };
}
