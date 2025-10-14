import Layout from "@/components/layouts/Layout";
import FooterCTA from "@/components/ui/FooterCTA";
import { generateBreadcrumbs } from "@/lib/utils/navigation";
import Head from "next/head";

const TypicalWeek = ({ breadcrumbs = [] }) => {
    return (
        <Layout
            title="A Typical Week at SCISS - Program Schedule"
            description="Explore a typical week at SCISS with structured academics, hands-on projects, cultural trips, and community activities designed for student success."
            showBreadcrumb={true}
            breadcrumbs={breadcrumbs}
        >
            <Head>
                <meta property="og:title" content="A Typical Week at SCISS - Program Schedule" />
                <meta property="og:description" content="Explore a typical week at SCISS with structured academics, hands-on projects, cultural trips, and community activities designed for student success." />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="A Typical Week at SCISS - Program Schedule" />
                <meta name="twitter:description" content="Explore a typical week at SCISS with structured academics, hands-on projects, cultural trips, and community activities designed for student success." />
            </Head>

            <div className="padding-top-100"></div>

            {/* Page Header Section */}
            <section className="section page-header-section">
                <div className="container">
                    <div className="page-header-content">
                        <p className="page-subtitle">Program Schedule</p>
                        <h1 className="page-title">A Typical Week at SCISS</h1>
                        <p className="page-description">
                            Residential • Grades 4–12 • Junior (G4–G7) & Senior (G8–G12) cohorts
                        </p>
                    </div>
                </div>
            </section>

            {/* Weekly Schedule Section */}
            <section className="section">
                <div className="container">
                    <div className="text--center mb--lg">
                        <h2>Your Week at a Glance</h2>
                        <p>Structured learning, hands-on projects, and memorable experiences</p>
                    </div>

                    <div className="grid grid--2">
                        <div className="cultural-trip-card-simple">
                            <div className="trip-icon-large">📅</div>
                            <h3>Sunday — Arrivals & Welcome</h3>
                            <p className="trip-description-simple">Check in, meet roommates, campus tour, safety briefing. Icebreakers and welcome night to start strong.</p>
                        </div>

                        <div className="cultural-trip-card-simple">
                            <div className="trip-icon-large">📚</div>
                            <h3>Monday & Tuesday — Settle In, Start Strong</h3>
                            <p className="trip-description-simple">Core academics in the morning. Project studios and electives in the afternoon. Community events and dorm meetings in the evening.</p>
                        </div>

                        <div className="cultural-trip-card-simple">
                            <div className="trip-icon-large">🌍</div>
                            <h3>Wednesday — Learning Beyond Campus</h3>
                            <p className="trip-description-simple">Curated trips to Harvard & MIT, Yale & Brown, or the Basketball Hall of Fame. Movie night when we return.</p>
                        </div>

                        <div className="cultural-trip-card-simple">
                            <div className="trip-icon-large">🔨</div>
                            <h3>Thursday — Build, Refine, Rehearse</h3>
                            <p className="trip-description-simple">Capstone work: investment theses, MVP demos, robotics challenges, debate speeches, or sports scrimmages.</p>
                        </div>

                        <div className="cultural-trip-card-simple">
                            <div className="trip-icon-large">🎉</div>
                            <h3>Friday — Showcase & Celebrate</h3>
                            <p className="trip-description-simple">Mini-showcase: stock pitch, venture demo, robotics trial, debate round, or tournament. Celebration night!</p>
                        </div>

                        <div className="cultural-trip-card-simple">
                            <div className="trip-icon-large">🚌</div>
                            <h3>Saturday — Big Excursion & Community Day</h3>
                            <p className="trip-description-simple">Full-day trip to broaden horizons. Evening social and prep for the next academic block.</p>
                        </div>
                    </div>

                    <div className="info-note-box">
                        <strong>Note:</strong> Each student enjoys an individually tailored experience. Daily times may vary by session. All activities are fully supervised with a safety-first approach.
                    </div>
                </div>
            </section>

            {/* Daily Schedule Section */}
            <section className="section bg-light">
                <div className="container">
                    <div className="text--center mb--lg">
                        <h2>⏰ Daily Rhythm (Mon–Fri)</h2>
                        <p>Structured learning with flexibility for individual growth</p>
                    </div>

                    <div className="grid grid--3">
                        <div className="cultural-trip-card-simple">
                            <div className="trip-icon-large">🌅</div>
                            <h3>8:00–8:55</h3>
                            <p className="trip-description-simple">Breakfast & morning meetup</p>
                        </div>

                        <div className="cultural-trip-card-simple">
                            <div className="trip-icon-large">📖</div>
                            <h3>9:00–12:00</h3>
                            <p className="trip-description-simple">Learning block: core classes + hands-on workshop</p>
                        </div>

                        <div className="cultural-trip-card-simple">
                            <div className="trip-icon-large">🍽️</div>
                            <h3>12:00–1:00</h3>
                            <p className="trip-description-simple">Lunch & community time</p>
                        </div>

                        <div className="cultural-trip-card-simple">
                            <div className="trip-icon-large">🎯</div>
                            <h3>1:15–3:00</h3>
                            <p className="trip-description-simple">Project studio (capstone work with coaching)</p>
                        </div>

                        <div className="cultural-trip-card-simple">
                            <div className="trip-icon-large">⚡</div>
                            <h3>3:15–5:30</h3>
                            <p className="trip-description-simple">Choice time: skills lab, electives & fitness, mentor office hours</p>
                        </div>

                        <div className="cultural-trip-card-simple">
                            <div className="trip-icon-large">🌃</div>
                            <h3>6:00–7:00</h3>
                            <p className="trip-description-simple">Dinner</p>
                        </div>

                        <div className="cultural-trip-card-simple">
                            <div className="trip-icon-large">🎬</div>
                            <h3>7:15–9:30</h3>
                            <p className="trip-description-simple">Evening program (speaker, games/movies, showcase prep)</p>
                        </div>

                        <div className="cultural-trip-card-simple">
                            <div className="trip-icon-large">🌙</div>
                            <h3>10:00</h3>
                            <p className="trip-description-simple">Collect phones & Lights out (Junior / Senior)</p>
                        </div>
                    </div>
                </div>
            </section>

            <FooterCTA linkTitle="View Program Overview" link="/program-overview" />
        </Layout>
    );
};

export default TypicalWeek;

export async function getStaticProps() {
    const breadcrumbs = generateBreadcrumbs([
        { label: "Home", href: "/" },
        { label: "Program", href: "/program-overview" },
        { label: "Typical Week", href: "/typical-week", active: true },
    ]);

    return {
        props: {
            breadcrumbs,
        },
    };
}

