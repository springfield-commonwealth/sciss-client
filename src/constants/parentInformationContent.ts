const ParentInfoSafetyMeasures = [
  {
    category: "24/7 Supervision",
    measures: [
      "Certified residential advisors on every floor",
      "Professional security staff on campus",
      "Check-in/check-out procedures for all activities",
      "Emergency response protocols in place",
      "Night supervision and room checks",
    ],
  },
  {
    category: "Medical Care",
    measures: [
      "Licensed medical staff on campus 24/7",
      "Fully equipped medical facility",
      "Direct partnership with local hospital",
      "Prescription medication management",
      "Emergency medical response team",
    ],
  },
  {
    category: "Campus Security",
    measures: [
      "Secure campus with controlled access",
      "ID card access system for all buildings",
      "CCTV monitoring in common areas",
      "Emergency alert system",
      "Regular safety drills and training",
    ],
  },
  {
    category: "Activity Safety",
    measures: [
      "Certified instructors for all sports activities",
      "Safety equipment provided for all activities",
      "Pre-activity safety briefings",
      "Risk assessment for all field trips",
      "Emergency action plans for all excursions",
    ],
  },
];

const ParentInfoCommunicationSchedule = [
  {
    type: "Welcome Call",
    timing: "First day of program",
    description:
      "Personal call to confirm safe arrival and initial impressions",
  },
  {
    type: "Weekly Updates",
    timing: "Every Sunday",
    description:
      "Comprehensive update on academic progress and social activities",
  },
  {
    type: "Mid-Program Report",
    timing: "Day 10-12",
    description: "Detailed academic assessment and behavioral observations",
  },
  {
    type: "Photo Gallery",
    timing: "Daily uploads",
    description: "Secure online gallery with photos from daily activities",
  },
  {
    type: "Final Report",
    timing: "Last day of program",
    description:
      "Complete evaluation with recommendations for future development",
  },
  {
    type: "Emergency Contact",
    timing: "24/7 availability",
    description: "Immediate contact for any urgent matters or concerns",
  },
];

const ParentInfoPackingList = {
  clothing: [
    "Casual clothes for 3 weeks (consider laundry schedule)",
    "Formal attire for special events and university visits",
    "Comfortable walking shoes and sneakers",
    "Swimwear and beach/pool accessories",
    "Light jacket or sweater for air conditioning",
    "Rain jacket or umbrella",
    "Sleepwear and undergarments",
  ],
  academic: [
    "Laptop or tablet with charger",
    "Notebooks and writing materials",
    "Calculator (if needed for program)",
    "Any specialized materials for chosen program",
    "Backup storage device (USB drive)",
    "Portable phone charger",
  ],
  personal: [
    "Personal medications with prescription labels",
    "Toiletries and personal hygiene items",
    "Towels and bedding (or arrange rental)",
    "Laundry supplies or plan for laundry service",
    "Personal entertainment (books, games)",
    "Camera for personal photos",
  ],
  documents: [
    "Passport (valid for at least 6 months)",
    "Visa documentation (if required)",
    "Medical insurance cards and documentation",
    "Emergency contact information",
    "Copy of birth certificate",
    "Program acceptance letter and materials",
  ],
};

const ParentInfoHealthRequirements = [
  {
    requirement: "Medical Forms",
    description: "Complete medical history and physical examination form",
    deadline: "30 days before program start",
  },
  {
    requirement: "Immunizations",
    description: "Up-to-date vaccinations including COVID-19 if required",
    deadline: "14 days before program start",
  },
  {
    requirement: "Insurance Coverage",
    description: "Valid medical insurance covering international treatment",
    deadline: "Registration confirmation",
  },
  {
    requirement: "Prescription Medications",
    description: "All medications in original containers with English labels",
    deadline: "Arrival day",
  },
  {
    requirement: "Dietary Restrictions",
    description: "Detailed information about food allergies and preferences",
    deadline: "14 days before program start",
  },
  {
    requirement: "Emergency Contacts",
    description: "Multiple emergency contacts with international phone numbers",
    deadline: "Registration confirmation",
  },
];

const ParentInfoCampusServices = [
  {
    service: "Laundry Services",
    description:
      "On-campus laundry facilities available daily. Students can do their own laundry or arrange for laundry service.",
    cost: "Included (self-service) / $15/week (full service)",
  },
  {
    service: "Mail & Package Delivery",
    description:
      "Students can receive mail and packages during their stay. All items are screened for security.",
    cost: "Included",
  },
  {
    service: "Banking Services",
    description:
      "Assistance with local banking, currency exchange, and managing spending money.",
    cost: "Guidance included / Transaction fees may apply",
  },
  {
    service: "Technology Support",
    description:
      "IT help desk for device setup, WiFi connection, and technical troubleshooting.",
    cost: "Included",
  },
  {
    service: "Transportation",
    description:
      "Airport pickup/drop-off and transportation for all scheduled activities and field trips.",
    cost: "Included",
  },
  {
    service: "Storage Services",
    description:
      "Secure storage for valuable items and documents during the program.",
    cost: "Included",
  },
];

const ParentInfoEmergencyProtocols = [
  {
    scenario: "Medical Emergency",
    response: [
      "Immediate medical assessment by on-site staff",
      "Transport to partner hospital if needed",
      "Parent notification within 1 hour",
      "Continuous updates until resolution",
      "Insurance coordination and documentation",
    ],
  },
  {
    scenario: "Natural Disaster/Weather",
    response: [
      "Activation of emergency alert system",
      "Implementation of shelter-in-place protocols",
      "Regular parent updates via emergency hotline",
      "Coordination with local emergency services",
      "Alternative accommodation if necessary",
    ],
  },
  {
    scenario: "Behavioral Issues",
    response: [
      "Immediate intervention by residential staff",
      "Parent contact within 24 hours",
      "Counseling and support services",
      "Development of behavior modification plan",
      "Regular progress monitoring",
    ],
  },
];

const ParentInfoParentTestimonials = [
  {
    parent: "Maria Rodriguez",
    student: "Carlos, Age 16",
    year: "2024",
    quote:
      "The communication from SCISS was exceptional. I felt connected to Carlos's experience every day through photos and weekly calls. The safety measures gave me complete peace of mind.",
  },
  {
    parent: "James Chen",
    student: "Lily, Age 15",
    year: "2024",
    quote:
      "Lily came home more confident and focused than ever. The academic program challenged her, and the international friendships she made are still strong today.",
  },
  {
    parent: "Sophie Williams",
    student: "Alex, Age 17",
    year: "2023",
    quote:
      "SCISS exceeded our expectations. The program was well-organized, safe, and truly transformative for Alex. We're already planning for him to return as a counselor!",
  },
];

const ParentInfoTravelTips = [
  {
    tip: "Arrival Planning",
    details: [
      "Book flights to arrive on designated arrival day",
      "Use Boston Logan Airport (BOS) for easiest transportation",
      "Allow extra time for customs and immigration",
      "Have all documents easily accessible",
      "Pack essentials in carry-on luggage",
    ],
  },
  {
    tip: "Money Management",
    details: [
      "Notify banks of international travel dates",
      "Bring mix of cash and cards",
      "Consider travel money cards for better exchange rates",
      "Set daily spending limits with your teen",
      "Keep copies of all financial documents",
    ],
  },
  {
    tip: "Communication Setup",
    details: [
      "Check international roaming charges",
      "Consider local SIM card or international plan",
      "Download messaging apps like WhatsApp",
      "Establish regular check-in times",
      "Share emergency contact information",
    ],
  },
];

export {
  ParentInfoCampusServices,
  ParentInfoCommunicationSchedule,
  ParentInfoEmergencyProtocols,
  ParentInfoHealthRequirements,
  ParentInfoPackingList,
  ParentInfoParentTestimonials,
  ParentInfoSafetyMeasures,
  ParentInfoTravelTips,
};
