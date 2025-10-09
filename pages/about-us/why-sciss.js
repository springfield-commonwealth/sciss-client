import Layout from "@/components/layouts/Layout";
import HeroSection from "@/components/sections/HeroSection";
import { SectionHeader } from "@/components/ui";
import FooterCTA from "@/components/ui/FooterCTA";
import { AboutUsHero } from "@/constants/images";
import { generateBreadcrumbs } from "@/lib/utils/navigation";

const WhyScissPage = ({ breadcrumbs = [] }) => {
    return (
        <Layout
            title="Why SCISS - SCISS"
            description="Discover what makes SCISS different - from our residential community and balanced approach to real-world mentors and comprehensive programs."
            showBreadcrumb={true}
            breadcrumbs={breadcrumbs}
        >
            {/* Hero Section */}
            <HeroSection
                title="Why SCISS"
                subtitle="Give your child a global summer that counts"
                description="SCISS (Springfield Commonwealth International Summer School) is a residential program for Grades 4–12 that blends big ideas with practical doing. Across June–August 2026, students live and learn on campus with caring 24/7 supervision, structured days, and memorable weekend excursions. They'll build real projects, grow confidence, and make friends from around the world—then come home proud, skilled, and excited for what's next."
                backgroundImage={AboutUsHero}
                ctaText="Apply Now"
                ctaLink="/apply"
                secondaryCtaText="Download 2026 Brochure"
                secondaryCtaLink="/about-us/why-sciss/"
                tertiaryCtaText="Join a Parent Info Session"
                tertiaryCtaLink="/about-us/why-sciss/"
            />

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
                        title="Team"
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

            {/* Programs */}
            <section className="section" id="programs">
                <div className="container">
                    <SectionHeader
                        title="Learn More About Programs (G4–G12 • Residential)"
                        description="Choose one track per session (students may stack across sessions)"
                        showDivider
                    />
                    <div className="programs-grid">
                        <div className="program-card">
                            <div className="program-icon">📈</div>
                            <h3>Path to Wall Street (Investment)</h3>
                            <p>Build financial fluency from market basics to fundamental analysis, portfolio/risk management, and financial modeling & valuation. Practice with a trading simulator and finish with a stock-pitch capstone.</p>
                        </div>
                        <div className="program-card">
                            <div className="program-icon">🚀</div>
                            <h3>Youth Innovation & Entrepreneurship (Teen Start-ups)</h3>
                            <p>Go idea → prototype → pitch using design thinking, market research, and AI tools. Teams build an MVP and pitch to mentors in a friendly challenge aligned with global competitions.</p>
                        </div>
                        <div className="program-card">
                            <div className="program-icon">🤖</div>
                            <h3>AI & Robotics</h3>
                            <p>For Juniors: visual coding and hardware kits to wire sensors and automate tasks. For Seniors: Python-based projects, intro ML concepts, and an end-of-session robotics/automation challenge.</p>
                        </div>
                        <div className="program-card">
                            <div className="program-icon">🎤</div>
                            <h3>Leadership & Public Speaking/Debate</h3>
                            <p>Communication drills, debate, and stage presence; conflict resolution and teamwork; a polished final talk.</p>
                        </div>
                        <div className="program-card">
                            <div className="program-icon">🎭</div>
                            <h3>Music & Stage Performing Arts</h3>
                            <p>Vocal/instrumental ensembles, movement & stagecraft, lighting/sound basics, and a live showcase.</p>
                        </div>
                        <div className="program-card">
                            <div className="program-icon">⚽</div>
                            <h3>Sports (e.g., Basketball, Soccer)</h3>
                            <p>Skill development, conditioning, and game IQ wrapped in teamwork and sportsmanship; daily drills, scrimmages, and a fun tournament.</p>
                        </div>
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

            {/* Activities & Trips */}
            <section className="section" id="activities-trips">
                <div className="container">
                    <SectionHeader
                        title="Activities & Trips"
                        description="Community every night, horizons every week."
                        showDivider
                    />

                    <div className="activities-content">
                        <p className="activities-intro mb-6">
                            Evenings feature relaxed campus events—movie nights, competitive game nights, themed parties, cultural nights, campfires under the stars, and our always-popular student-run talent show—plus team-building challenges like scavenger hunts, trivia, and friendly tournaments.
                        </p>

                        <div className="trips-grid">
                            <div className="trip-section">
                                <h3>🎓 Signature Trips</h3>
                                <div className="trip-items">
                                    <div className="trip-item">
                                        <h4>Boston (Full Day)</h4>
                                        <p>Harvard & MIT campus tours plus city exploration.</p>
                                    </div>
                                    <div className="trip-item">
                                        <h4>Yale & Brown University</h4>
                                        <p>Official tour-guide campus visits with admissions info sessions.</p>
                                    </div>
                                    <div className="trip-item">
                                        <h4>Springfield Highlights</h4>
                                        <p>The Naismith Basketball Hall of Fame and regional museums/historic sites.</p>
                                    </div>
                                    <div className="trip-item">
                                        <h4>Other destinations by session</h4>
                                        <p>Local attractions (e.g., museums, theme parks) subject to schedule.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="logistics-section">
                                <h3>🛡️ Logistics & Safety</h3>
                                <p>All trips and on-campus activities are fully supervised by SCISS staff. Transportation, tickets, and meals on official excursions are organized by the program so students can focus on learning and fun. The exact itinerary varies by session and weather; families receive the final schedule before arrival.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2026 Sessions */}
            <section className="section bg-light" id="2026-sessions">
                <div className="container">
                    <SectionHeader
                        title="2026 Sessions"
                        description="Location: 1 Ames Hill Dr, Springfield, MA 01105, USA (residential campus)"
                        showDivider
                    />

                    <div className="sessions-content">
                        <div className="sessions-grid">
                            <div className="session-info">
                                <h3>Four Sessions:</h3>
                                <div className="session-list">
                                    <div className="session-item">
                                        <strong>Session 1:</strong> June 14 – June 26 (2 weeks)
                                    </div>
                                    <div className="session-item">
                                        <strong>Session 2:</strong> June 28 – July 10 (2 weeks)
                                    </div>
                                    <div className="session-item">
                                        <strong>Session 3:</strong> July 12 – July 24 (2 weeks)
                                    </div>
                                    <div className="session-item">
                                        <strong>Session 4:</strong> July 26 – August 7 (2 weeks)
                                    </div>
                                </div>
                            </div>

                            <div className="program-rhythm">
                                <h3>Program rhythm:</h3>
                                <ul>
                                    <li><strong>Weekdays:</strong> academic classes in the morning; project studio/electives in the afternoon; community events in the evening</li>
                                    <li><strong>Midweek/weekend:</strong> field trips and special events</li>
                                </ul>
                            </div>
                        </div>

                        <div className="signature-excursions">
                            <h3>Signature excursions:</h3>
                            <div className="excursion-list">
                                <div className="excursion-item">
                                    <strong>Boston (Harvard & MIT)</strong> — full-day university immersion and city exploration
                                </div>
                                <div className="excursion-item">
                                    <strong>Yale & Brown University</strong> — official tour guide visit with admission info session
                                </div>
                                <div className="excursion-item">
                                    <strong>Basketball Hall of Fame</strong>, plus museums, historical sites, and regional attractions
                                </div>
                            </div>
                        </div>

                        <div className="activities-sports">
                            <h3>Activities & sports (examples):</h3>
                            <p>Basketball • Soccer • Golf • Zumba • Yoga • Rock climbing • Archery • Swimming • Ultimate Frisbee • Rowing • Badminton • Table Tennis • Volleyball • Hiking • Fitness & Dance • Arts & Crafts — and more.</p>
                        </div>

                        <div className="investment-highlights">
                            <h3>Investment track highlights:</h3>
                            <p>Multi-level curriculum (Intro → Valuation), trading simulator with a virtual investment challenge, and guest speakers from top firms.</p>
                        </div>

                        <div className="program-note">
                            <p><em>Note: Program details evolve each year; 2026 will follow the same high-care, high-impact model with updated speakers, trips, and schedules.</em></p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Calls to Action */}
            <section className="section" id="calls-to-action">
                <div className="container">
                    <SectionHeader
                        title="Calls to Action"
                        showDivider
                    />
                    <div className="cta-buttons">
                        <a href="/apply" className="btn btn--primary btn--lg">
                            Apply Now
                        </a>
                        <a href="/program-overview" className="btn btn--outline btn--lg">
                            Explore Academic Programs
                        </a>
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
