import Layout from "@/components/layouts/Layout";
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
                        <p className="page-subtitle">Discover the Difference</p>
                        <h1 className="page-title">Why SCISS</h1>
                        <p className="page-description">A residential program for Grades 4–12 that blends big ideas with practical doing. Students live and learn on campus with 24/7 supervision, structured days, and memorable weekend excursions.</p>
                    </div>
                </div>
            </section>

            {/* What Makes SCISS Different */}
            <section className="section topBorder">
                <div className="container">
                    <div className="text--center mb--lg">
                        <h2>What Makes SCISS Different</h2>
                        <p>Three core pillars that set us apart</p>
                    </div>

                    <div className="grid grid--3">
                        <div className="cultural-trip-card-simple">
                            <div className="trip-icon-large">🏠</div>
                            <h3>Residential Community</h3>
                            <p className="trip-description-simple">Age-appropriate cohorts (Junior G4–G7 and Senior G8–G12) with a friendly, safe campus atmosphere</p>
                        </div>

                        <div className="cultural-trip-card-simple">
                            <div className="trip-icon-large">⚖️</div>
                            <h3>Balanced Days</h3>
                            <p className="trip-description-simple">Morning learning, afternoon project studio/electives, evening community events, and weekend excursions</p>
                        </div>

                        <div className="cultural-trip-card-simple">
                            <div className="trip-icon-large">📋</div>
                            <h3>Portfolio-Ready Outcomes</h3>
                            <p className="trip-description-simple">Capstone presentation or performance, plus a course-completion certificate</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Value */}
            <section className="section bg-light custom-spacing our-core-values">
                <div className="container">
                    <div className="text--center mb--lg">
                        <h2>Our Core Values</h2>
                        <p>What your child gains from the SCISS experience</p>
                    </div>

                    <div className="grid grid--2">
                        <div className="cultural-trip-card-simple">
                            <div className="trip-icon-large">🎯</div>
                            <h3>Learning That Sticks</h3>
                            <p className="trip-description-simple">Morning learning + afternoon project studio + evening events = skills, portfolios, and a capstone showcase with a certificate</p>
                        </div>

                        <div className="cultural-trip-card-simple">
                            <div className="trip-icon-large">💼</div>
                            <h3>Hands-on & Applied</h3>
                            <p className="trip-description-simple">Finance students run a $1M virtual trading challenge; founders build MVPs; AI students code and test; performers rehearse and showcase</p>
                        </div>

                        <div className="cultural-trip-card-simple">
                            <div className="trip-icon-large">👨‍🏫</div>
                            <h3>Real-world Mentors</h3>
                            <p className="trip-description-simple">Wall Street professionals, entrepreneurs/VC mentors, CEOs/GMs, technologists, and specialist coaches who teach by doing</p>
                        </div>

                        <div className="cultural-trip-card-simple">
                            <div className="trip-icon-large">🛡️</div>
                            <h3>Safe & Supported</h3>
                            <p className="trip-description-simple">Residential staff, clear conduct policies, and open parent communication with full-time supervision included</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Our Team Specializes In */}
            <section className="section custom-spacing what-child-gains">
                <div className="container">
                    <div className="text--center mb--lg">
                        <h2>What Our Team Specializes In</h2>
                        <p>Your child learns from people who do the work every day</p>
                    </div>

                    <div className="grid grid--2">
                        <div className="cultural-trip-card-simple">
                            <div className="trip-icon-large">💰</div>
                            <h3>Finance & Entrepreneurship</h3>
                            <p className="trip-description-simple">Wall Street professionals (10+ yrs exp.), founders, and venture mentors guide research, strategy, and pitching</p>
                        </div>

                        <div className="cultural-trip-card-simple">
                            <div className="trip-icon-large">🤖</div>
                            <h3>AI/Robotics</h3>
                            <p className="trip-description-simple">Technologists and university-affiliated educators lead labs that connect code and sensors to real-world impact</p>
                        </div>

                        <div className="cultural-trip-card-simple">
                            <div className="trip-icon-large">🎤</div>
                            <h3>Leadership/Public Speaking</h3>
                            <p className="trip-description-simple">Specialist communication coaches build presence, debate, and persuasive speaking with daily practice</p>
                        </div>

                        <div className="cultural-trip-card-simple">
                            <div className="trip-icon-large">🎭</div>
                            <h3>Music/Stage & Sports</h3>
                            <p className="trip-description-simple">Practitioners and certified coaches develop craft, teamwork, and performance confidence</p>
                        </div>
                    </div>

                    <div className="info-note-box">
                        <strong>Note:</strong> We also host guest speakers and alumni panels to inspire pathways into college and careers.
                    </div>
                </div>
            </section>

            {/* Why SCISS - Visual Grid Layout */}
            <section className="section custom-spacing why-sciss-header">
                <div className="container">
                    <div className="text--center mb--lg">
                        <h2>Why SCISS?</h2>
                        <p>Outstanding programs and proven results in summer education</p>
                    </div>

                    <div className="why-sciss-grid">
                        <div className="why-sciss-item why-sciss-image">
                            <img
                                src="/images/carousel/whysciss1.png"
                                alt="SCISS Dormitory Experience"
                                className="why-sciss-img"
                            />
                        </div>

                        <div className="why-sciss-item why-sciss-text">
                            <p>Outstanding and experienced instructors with successful Wall Street careers.</p>
                        </div>

                        <div className="why-sciss-item why-sciss-image">
                            <img
                                src="/images/carousel/whysciss2.png"
                                alt="SCISS Students at Waterfront"
                                className="why-sciss-img"
                            />
                        </div>

                        <div className="why-sciss-item why-sciss-text">
                            <p>Our student teams achieved top rankings in global high school investment and business competitions.</p>
                        </div>

                        <div className="why-sciss-item why-sciss-image">
                            <img
                                src="/images/carousel/whysciss3.png"
                                alt="SCISS Times Square Experience"
                                className="why-sciss-img"
                            />
                        </div>

                        <div className="why-sciss-item why-sciss-text">
                            <p>Innovative curriculum with project-based learning to help students discover their interests and passions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Exposure Gained and Skills Learned */}
            <section className="section bg-light custom-spacing after-why-sciss what-students-gain">
                <div className="container">
                    <div className="text--center mb--lg">
                        <h2>What Students Gain from SCISS</h2>
                        <p>Comprehensive exposure and skills development for future success</p>
                    </div>

                    <div className="grid grid--2">
                        <div className="cultural-trip-card-simple">
                            <div className="trip-icon-large">🌟</div>
                            <h3>EXPOSURE GAINED</h3>
                            <ul className="trip-description-simple" style={{ textAlign: 'left', paddingLeft: '1rem' }}>
                                <li>Awareness of new industries and innovative ideas</li>
                                <li>Personal values and ambitions</li>
                                <li>Exposure of occupation and salary</li>
                                <li>Grace under pressure -- Goal-setting</li>
                                <li>The art of improvisation</li>
                                <li>Understand opportunity Costs</li>
                                <li>New network of friends, mentors and future business partners</li>
                            </ul>
                        </div>

                        <div className="cultural-trip-card-simple">
                            <div className="trip-icon-large">🎓</div>
                            <h3>SKILLS LEARNED</h3>
                            <ul className="trip-description-simple" style={{ textAlign: 'left', paddingLeft: '1rem' }}>
                                <li>Effective Networking</li>
                                <li>Negotiation</li>
                                <li>Leadership Strategies</li>
                                <li>How to Make Credit Work for You</li>
                                <li>Personal Budgeting and Cash Flow</li>
                                <li>Design Thinking</li>
                                <li>Pitching and Public Speaking</li>
                                <li>Creating Financial Statements</li>
                                <li>Business Funding Options</li>
                                <li>Business Plan Generation</li>
                                <li>Branding, Marketing, Advertising</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="cta-section">
                <div className="container text--center">
                    <h2>Ready to Give Your Child a Global Summer?</h2>
                    <p>
                        Join SCISS and watch your child learn big, build real, and shine bright.
                    </p>
                    <div className="cta-actions">
                        <Link href="/apply" className="btn btn--primary">
                            Apply Now
                        </Link>
                        <a href="/brochure-2026.pdf" className="btn btn--secondary" download>
                            Download 2026 Brochure
                        </a>
                        <Link href="/parent-information" className="btn btn--secondary">
                            Join a Parent Info Session
                        </Link>
                    </div>
                </div>
            </section>
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
