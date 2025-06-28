import Layout from "@/components/layouts/Layout";
import ContentSlider from "@/components/sections/ContentSlider";
import FeatureSection from "@/components/sections/FeatureSection";
import HeroSection from "@/components/sections/HeroSection";
import Highlights from "@/components/sections/Highlights";
import Testimonials from "@/components/sections/Testimonials";
import FeatureVideo from "@/components/ui/FeatureVideo";
import { HomeFeature, HomeHero, HomeSliderImages } from "@/constants/images";
import { WelcomeVideo } from "@/constants/videos";

const HomePage = () => {
  const highlights = [
    {
      title: "University Visits",
      description:
        "Boston trip featuring Harvard and MIT visits, plus Yale University experience.",
      image: "/images/highlights/mit-visit.png",
    },
    {
      title: "Elective Sports",
      description:
        "Rowing, Basketball, Golf, Fencing, Soccer, Fitness Training, and Archery programs.",
      image: "/images/highlights/elective.png",
    },
    {
      title: "Expert Instruction",
      description:
        "Learn from passionate instructors who are experts in their fields with hands-on activities.",
      image: "/images/highlights/expert-instruction.png",
    },
  ];

  const testimonials = [
    {
      name: "Investment Program Alumni",
      program: "Path to Wall Street",
      quote:
        "Many of our Investment Class Alumni received offers from top universities such as Harvard, Stanford, Yale.",
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
        title="Inspire Global Leaders for Tomorrow"
        subtitle="Summer 2025"
        description="An enriching summer experience combining cutting-edge academics, sports, field trips, and inclusive cultural activities."
        backgroundImage={HomeHero}
      />

      {/* Welcome Section */}
      <FeatureSection
        heading="Welcome to SC International Summer School"
        paragraphs={[
          "Located in historic Springfield, Massachusetts - the birthplace of basketball, SCISS has been developing tomorrow's leaders for over 14 years, it is where academic excellence meets unforgettable experiences.",
          "At SCISS, we provide a unique blend of cutting-edge academic curriculum, various sports, inspiring seminars and exciting activities.",
          "Our goal is to create an enriching and memorable summer experience for students from around the world.",
          "Our mission is to foster a dynamic learning environment where curiosity thrives, friendships flourish, and personal growth is nurtured.",
          "Whether you're joining us to explore new subjects, enhance your skills, or simply make the most of your summer break, we have crafted a program that we believe will exceed your expectations.",
        ]}
      />

      <FeatureVideo
        VideoObject={WelcomeVideo}
        autoPlay={true}
        muted={true}
        loop={true}
        playsInline={true}
        playBackSpeed={0.7}
      />

      <Highlights highlights={highlights} />

      <ContentSlider
        heading="Unique Summer Experience with unforgettable memories"
        text="Our program combines daily academic coursework with organized, supervised activities to create a comprehensive experience. Each student who joins our community develops essential life skills, builds enduring friendships, and becomes a valued member of our international community"
        images={HomeSliderImages}
      />

      <FeatureSection
        heading="Letter From the President"
        image={HomeFeature}
        paragraphs={[
          "We are delighted to extend our warmest greetings to you as you embark on this exciting journey with us. As you prepare to join us for an amazing three weeks, we want to assure you that you are about to embark on an enriching and memorable experience.",
          "At Springfield Commonwealth International Summer School, our mission is to foster a dynamic learning environment where curiosity thrives, friendships flourish, and personal growth is nurtured. Whether you're joining us to explore new subjects, enhance your skills, or simply make the most of your summer break, we have crafted a program that we believe will exceed your expectations.",
          "Throughout your time with us, you will have the opportunity to engage with passionate instructors who are experts in their fields, participate in hands-on activities that bring learning to life, and connect with peers from diverse backgrounds who share your enthusiasm for knowledge and discovery.",
          "In addition to our academic curriculum, we have curated a range of extracurricular activities designed to complement your learning experience and ensure that your time with us is both fulfilling and enjoyable. From outdoor adventures to creative workshops, there will be something for everyone to enjoy.",
          "As you prepare for your arrival, please take some time to review the enclosed materials, including your schedule, packing list, and any additional information you may need to make the most of your time with us. Should you have any questions or require further assistance, please do not hesitate to reach out to our team. We are here to support you every step of the way.",
          "Once again, welcome to Springfield Commonwealth International Summer School. We are thrilled to have you join us, and we look forward to helping you make the most of your summer!",
        ]}
      />

      {/* Testimonials Section */}
      <Testimonials
        title="Student voices"
        desc="Don't just head from us. Hear from our amazing SCISS alumni"
        testimonials={testimonials}
      />
    </Layout>
  );
};

export default HomePage;
