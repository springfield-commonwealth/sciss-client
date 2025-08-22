const TuitionsSessions = [
  {
    name: "Session 1",
    dates: "June 29 - July 18, 2025",
    duration: "21 Days",
    status: "Open for Registration",
    highlights: [
      "Peak summer weather",
      "Maximum university visits",
      "Full program offerings",
    ],
  },
  {
    name: "Session 2",
    dates: "July 20 - August 8, 2025",
    duration: "21 Days",
    status: "Open for Registration",
    highlights: [
      "Extended summer experience",
      "Advanced project work",
      "Alumni networking events",
    ],
  },
];

const TuitionsIncludedServices = [
  {
    category: "Academic Program",
    items: [
      "3-week intensive academic program in chosen track",
      "Expert instruction from industry professionals",
      "All course materials and textbooks",
      "Laboratory and technology access",
      "Academic certification upon completion",
      "Portfolio development support",
    ],
  },
  {
    category: "Accommodation & Meals",
    items: [
      "Shared dormitory accommodation for 21 days",
      "Three nutritious meals per day",
      "Healthy snacks and beverages",
      "24/7 residential supervision",
      "Laundry services and facilities",
      "WiFi access throughout campus",
    ],
  },
  {
    category: "Activities & Excursions",
    items: [
      "Harvard University campus visit and tour",
      "MIT research facilities tour",
      "Yale University cultural experience",
      "Basketball Hall of Fame visit",
      "Museum visits and cultural excursions",
      "Sports and recreational activities",
    ],
  },
  {
    category: "Support Services",
    items: [
      "24/7 medical care and supervision",
      "Academic counseling and mentoring",
      "Cultural orientation programs",
      "Emergency contact and communication",
      "Student handbook and orientation materials",
    ],
  },
];

const TuitionsAdditionalCosts = [
  {
    item: "International Airfare",
    cost: "Varies by location",
    description:
      "Students arrange their own flights to/from Boston Logan Airport",
    required: true,
  },
  {
    item: "Personal Spending Money",
    cost: "$300 - $500",
    description: "For souvenirs, additional snacks, and personal items",
    required: false,
  },
  {
    item: "Travel Insurance",
    cost: "$50 - $150",
    description: "Highly recommended for international students",
    required: false,
  },
  {
    item: "Visa Processing (if required)",
    cost: "$100 - $200",
    description: "For students requiring tourist/study visa",
    required: false,
  },
];

const TuitionsApplicationProcess = [
  {
    step: 1,
    title: "Complete Online Application",
    description:
      "Fill out our comprehensive application form with personal information, academic background, and program preferences.",
    duration: "30 minutes",
  },
  {
    step: 2,
    title: "Submit Required Documents",
    description:
      "Upload academic transcripts, recommendation letters, passport copy, and essay responses.",
    duration: "1-2 days",
  },
  {
    step: 3,
    title: "Application Review",
    description:
      "Our admissions team reviews your application and may contact you for additional information.",
    duration: "5-7 business days",
  },
  {
    step: 4,
    title: "Admission Decision",
    description:
      "Receive your admission decision via email with next steps and enrollment instructions.",
    duration: "1-2 business days",
  },
  {
    step: 5,
    title: "Secure Your Spot",
    description:
      "Submit enrollment deposit and choose your payment plan to confirm your participation.",
    duration: "Same day",
  },
];

export {
  TuitionsAdditionalCosts,
  TuitionsApplicationProcess,
  TuitionsIncludedServices,
  TuitionsSessions,
};
