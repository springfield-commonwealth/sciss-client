import Layout from "@/components/layouts/Layout";
import HeroSection from "@/components/sections/HeroSection";

const HomePage = () => {
  const programs = [
    {
      title: "Path to Wall Street",
      description:
        "Intensive program covering investment strategies, stock markets, finance, economics, and sustainable investment.",
      iconClass: "icon-business",
      link: "/academics",
    },
    {
      title: "Youth Innovation & Entrepreneurship",
      description:
        "CEO-led program fostering innovation, design thinking, teamwork, and startup business plan development.",
      iconClass: "icon-innovation",
      link: "/academics",
    },
    {
      title: "Artificial Intelligence",
      description:
        "Comprehensive AI program covering machine learning, programming fundamentals, and technology applications.",
      iconClass: "icon-tech",
      link: "/academics",
    },
    {
      title: "Public Speaking & Debate",
      description:
        "Develop communication skills, confidence, and presentation abilities through structured debate training.",
      iconClass: "icon-language",
      link: "/academics",
    },
    {
      title: "Language Programs",
      description:
        "English and Creative Writing programs from beginner to intensive levels for all grade levels.",
      iconClass: "icon-language",
      link: "/academics",
    },
    {
      title: "Visual Arts",
      description:
        "Creative arts program designed for students of all ages to explore visual and creative expression.",
      iconClass: "icon-arts",
      link: "/academics",
    },
  ];

  const highlights = [
    {
      title: "University Visits",
      description:
        "Boston trip featuring Harvard and MIT visits, plus Yale University experience.",
      image: "/images/harvard-mit-trip.jpg",
    },
    {
      title: "Elective Sports",
      description:
        "Rowing, Basketball, Golf, Fencing, Soccer, Fitness Training, and Archery programs.",
      image: "/images/sports-basketball.png",
    },
    {
      title: "Expert Instruction",
      description:
        "Learn from passionate instructors who are experts in their fields with hands-on activities.",
      image: "/images/academics-hero.jpg",
    },
  ];

  const testimonials = [
    {
      name: "Investment Program Alumni",
      program: "Path to Wall Street",
      quote:
        "Many of our Investment Class Alumni received offers from Ivy League schools such as Stanford, Yale, Wharton, Columbia, NYU.",
    },
    {
      name: "Program Graduate",
      program: "SCISS Experience",
      quote:
        "Students have opportunities to win various prizes based on their performance in our competition resources and academic achievements.",
    },
    {
      name: "Summer Program Participant",
      program: "Academic Programs",
      quote:
        "An enriching and memorable experience with passionate instructors and peers from diverse backgrounds sharing enthusiasm for knowledge.",
    },
  ];

  return (
    <Layout
      title="SCISS - Springfield Commonwealth International Summer School"
      description="Join SCISS for an unforgettable summer experience with cutting-edge academics, exciting activities, and trips to Harvard, MIT, and Yale."
    >
      {/* Hero Section */}
      <HeroSection
        title="Discover Your Future at SCISS"
        subtitle="Summer 2025"
        description="An enriching summer experience combining cutting-edge academics, sports, and exciting field trips to Harvard, MIT, and Yale."
        backgroundImage="/images/academics-hero.jpg"
        ctaText="Explore Programs"
        ctaLink="/program-overview"
        secondaryCtaText="Apply Now"
        secondaryCtaLink="/tuitions-and-fees"
      />

      {/* Welcome Section */}
      <section className="section bg-light">
        <div className="container grid grid-2">
          <div className="text-left mb-5">
            <h2>Welcome to SCISS</h2>
            <p className="lead">
              Located in historic Springfield, Massachusetts - the birthplace of
              basketball, SCISS has been developing tomorrow's leaders for over
              14 years, it is where academic excellence meets unforgettable
              experiences.
            </p>
            <p className="lead">
              At SCISS, we provide a unique blend of cutting-edge academic
              curriculum, various sports, inspiring seminars and exciting
              activities.
            </p>
            <p className="lead">
              Our goal is to create an enriching and memorable summer experience
              for students from around the world.
            </p>
            <p className="lead">
              Our mission is to foster a dynamic learning environment where
              curiosity thrives, friendships flourish, and personal growth is
              nurtured.
            </p>
            <p className="lead">
              Whether you're joining us to explore new subjects, enhance your
              skills, or simply make the most of your summer break, we have
              crafted a program that we believe will exceed your expectations
            </p>
          </div>

          <img
            src="https://placehold.co/600x800"
            alt="Welcome to SCISS"
            className="welcome-image mb-5"
          />
        </div>
      </section>

      {/* Programs Section */}
      {/* <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Our Academic Programs</h2>
            <p>Choose from six exciting programs designed to inspire and challenge</p>
          </div>

          <div className="grid grid-3">
            {programs.map((program, index) => (
              <div key={index} className="card program-card">
                <div className={`program-icon ${program.iconClass}`}></div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <Link href={program.link} className="btn btn-secondary">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Highlights Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Experience Highlights</h2>
            <p>Unforgettable moments that will shape your future</p>
          </div>

          <div className="grid grid-3">
            {highlights.map((highlight, index) => (
              <div key={index} className="card highlight-card">
                <div className="card-image">
                  <img src={highlight.image} alt={highlight.title} />
                </div>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Student Voices</h2>
            <p>Hear from our amazing SCISS alumni</p>
          </div>

          <div className="grid grid-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card testimonial-card">
                <div className="quote-icon">"</div>
                <blockquote>"{testimonial.quote}"</blockquote>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.program}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
