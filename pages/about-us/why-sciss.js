import Layout from "@/components/layouts/Layout";
import { SectionHeader } from "@/components/ui";
import FooterCTA from "@/components/ui/FooterCTA";
import { generateBreadcrumbs } from "@/lib/utils/navigation";
import Link from "next/link";

const WhyScissPage = ({ breadcrumbs = [] }) => {
    return (
        <Layout
            title="Why SCISS - SCISS"
            description="Discover what makes SCISS different - from our residential community and balanced approach to real-world mentors and comprehensive programs."
            showBreadcrumb={true}
            breadcrumbs={breadcrumbs}
        >
            <div className="padding-top-100"></div>
            {/* Page Header Section */}
            <section className="section page-header-section">
                <div className="container">
                    <div className="page-header-content">
                        <h1 className="page-title">Why SCISS</h1>
                        <p className="page-subtitle">Give your child a global summer that counts</p>
                        <p className="page-description">SCISS (Springfield Commonwealth International Summer School) is a residential program for Grades 4–12 that blends big ideas with practical doing. Across June–August 2026, students live and learn on campus with caring 24/7 supervision, structured days, and memorable weekend excursions. They'll build real projects, grow confidence, and make friends from around the world—then come home proud, skilled, and excited for what's next.</p>
                        <div className="page-header-cta">
                            <Link href="/apply" className="btn btn--primary">Apply Now</Link>
                            <Link href="/about-us/why-sciss/" className="btn btn--secondary">Download 2026 Brochure</Link>
                            <Link href="/about-us/why-sciss/" className="btn btn--tertiary">Join a Parent Info Session</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Makes SCISS Different */}
            <section className="section bg-light" id="what-makes-different">
                <div className="container">
                    <SectionHeader
                        title="What Makes SCISS Different"
                        showDivider
                    />
                    <div className="grid grid--3">
                        <div className="differentiator-card">
                            <div className="differentiator-icon">🏠</div>
                            <h3>Residential Community</h3>
                            <p>Age-appropriate cohorts (Junior G4–G7 and Senior G8–G12) with a friendly, safe campus atmosphere</p>
                        </div>
                        <div className="differentiator-card">
                            <div className="differentiator-icon">⚖️</div>
                            <h3>Balanced Days</h3>
                            <p>Morning learning, afternoon project studio/electives, evening community events, and weekend excursions</p>
                        </div>
                        <div className="differentiator-card">
                            <div className="differentiator-icon">📋</div>
                            <h3>Portfolio-Ready Outcomes</h3>
                            <p>Capstone presentation or performance, plus a course-completion certificate</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Value */}
            <section className="section" id="our-value">
                <div className="container">
                    <SectionHeader
                        title="Our Value"
                        showDivider
                    />
                    <div className="value-props-layout">
                        <div className="value-item value-item--left">
                            <div className="value-item-content">
                                <div className="value-icon-wrapper">
                                    <div className="value-icon">🎯</div>
                                </div>
                                <div className="value-text">
                                    <h3>Learning That Sticks</h3>
                                    <p>Morning learning + afternoon project studio + evening events = skills, portfolios, and a capstone showcase with a certificate</p>
                                </div>
                            </div>
                        </div>
                        <div className="value-item value-item--right">
                            <div className="value-item-content">
                                <div className="value-icon-wrapper">
                                    <div className="value-icon">💼</div>
                                </div>
                                <div className="value-text">
                                    <h3>Hands-on & Applied</h3>
                                    <p>Finance students run a $1M virtual trading challenge and deliver a stock pitch; founders-in-training build MVPs and pitch to mentors; AI students code and test; performers rehearse and showcase; leaders speak daily</p>
                                </div>
                            </div>
                        </div>
                        <div className="value-item value-item--left">
                            <div className="value-item-content">
                                <div className="value-icon-wrapper">
                                    <div className="value-icon">👨‍🏫</div>
                                </div>
                                <div className="value-text">
                                    <h3>Real-world Mentors</h3>
                                    <p>Instructors include Wall Street professionals, entrepreneurs/VC mentors, CEOs/GMs, technologists, and specialist coaches who teach by doing</p>
                                </div>
                            </div>
                        </div>
                        <div className="value-item value-item--right">
                            <div className="value-item-content">
                                <div className="value-icon-wrapper">
                                    <div className="value-icon">👥</div>
                                </div>
                                <div className="value-text">
                                    <h3>Age-appropriate Cohorts</h3>
                                    <p>Junior (G4–G7) and Senior (G8–G12) groups ensure the right pace, tools, and challenge</p>
                                </div>
                            </div>
                        </div>
                        <div className="value-item value-item--left">
                            <div className="value-item-content">
                                <div className="value-icon-wrapper">
                                    <div className="value-icon">🛡️</div>
                                </div>
                                <div className="value-text">
                                    <h3>Safe & Supported</h3>
                                    <p>Residential staff, clear conduct policies, and open parent communication; dorm living (typically 2–4 per room), meals, and full-time supervision included</p>
                                </div>
                            </div>
                        </div>
                        <div className="value-item value-item--right">
                            <div className="value-item-content">
                                <div className="value-icon-wrapper">
                                    <div className="value-icon">🌍</div>
                                </div>
                                <div className="value-text">
                                    <h3>Beyond the Classroom</h3>
                                    <p>Signature trips (Harvard & MIT & Brown full day; Yale half day), museums and regional landmarks (Basketball Hall of Fame), themed socials, and cultural nights broaden horizons</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Team */}
            <section className="section bg-light" id="our-team">
                <div className="container">
                    <SectionHeader
                        title="What Our Team Specializes In"
                        description="Your child learns from people who do the work every day"
                        showDivider
                    />
                    <div className="team-layout">
                        <div className="team-item">
                            <div className="team-item-content">
                                <div className="team-icon-section">
                                    <div className="team-icon">💰</div>
                                    <div className="team-icon-bg"></div>
                                </div>
                                <div className="team-text-section">
                                    <h3>Finance & Entrepreneurship</h3>
                                    <p>Wall Street professionals (10+ yrs exp.), founders, and venture mentors guide research, strategy, and pitching</p>
                                </div>
                            </div>
                        </div>
                        <div className="team-item">
                            <div className="team-item-content">
                                <div className="team-icon-section">
                                    <div className="team-icon">🤖</div>
                                    <div className="team-icon-bg"></div>
                                </div>
                                <div className="team-text-section">
                                    <h3>AI/Robotics</h3>
                                    <p>Technologists and university-affiliated educators lead labs that connect code and sensors to real-world impact</p>
                                </div>
                            </div>
                        </div>
                        <div className="team-item">
                            <div className="team-item-content">
                                <div className="team-icon-section">
                                    <div className="team-icon">🎤</div>
                                    <div className="team-icon-bg"></div>
                                </div>
                                <div className="team-text-section">
                                    <h3>Leadership/Public Speaking</h3>
                                    <p>Specialist communication coaches build presence, debate, and persuasive speaking with daily practice</p>
                                </div>
                            </div>
                        </div>
                        <div className="team-item">
                            <div className="team-item-content">
                                <div className="team-icon-section">
                                    <div className="team-icon">🎭</div>
                                    <div className="team-icon-bg"></div>
                                </div>
                                <div className="team-text-section">
                                    <h3>Music/Stage & Sports</h3>
                                    <p>Practitioners and certified coaches develop craft, teamwork, and performance confidence</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="team-note">
                        <p>We also host guest speakers and alumni panels to inspire pathways into college and careers</p>
                    </div>
                </div>
            </section>

            

            {/* Also Included */}
            <section className="section bg-light" id="also-included">
                <div className="container">
                    <SectionHeader title="Also included" showDivider />
                    <div className="also-included-content">
                        <div className="included-items">
                            <div className="included-item">
                                <div className="included-icon">🏠</div>
                                <div className="included-text">
                                    <h4>Dorm housing</h4>
                                    <p>Typically 4-5 per room</p>
                                </div>
                            </div>
                            <div className="included-item">
                                <div className="included-icon">🛡️</div>
                                <div className="included-text">
                                    <h4>24-hour supervision</h4>
                                    <p>Round-the-clock care and support</p>
                                </div>
                            </div>
                            <div className="included-item">
                                <div className="included-icon">🍽️</div>
                                <div className="included-text">
                                    <h4>Meals</h4>
                                    <p>Nutritious breakfast, lunch, and dinner</p>
                                </div>
                            </div>
                            <div className="included-item">
                                <div className="included-icon">🎉</div>
                                <div className="included-text">
                                    <h4>Evening/weekend activities</h4>
                                    <p>Engaging social and recreational programs</p>
                                </div>
                            </div>
                            <div className="included-item">
                                <div className="included-icon">🗺️</div>
                                <div className="included-text">
                                    <h4>Excursions</h4>
                                    <p>Educational trips and cultural experiences</p>
                                </div>
                            </div>
                            <div className="included-item">
                                <div className="included-icon">📜</div>
                                <div className="included-text">
                                    <h4>Course-completion certificate</h4>
                                    <p>Official recognition of achievement</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            

            <FooterCTA linkTitle="Academic Programs" link="/program-overview" />
        </Layout>
    );
};

export default WhyScissPage;

export async function getStaticProps() {
    const breadcrumbs = generateBreadcrumbs([
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about-us" },
        { label: "Why SCISS", href: "/about-us/why-sciss", active: true },
    ]);

    return {
        props: {
            breadcrumbs,
        },
    };
}
