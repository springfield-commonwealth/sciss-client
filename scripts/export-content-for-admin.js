import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import your existing content
const academicProgramsData = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "../src/data/content/academic-programs.json"),
    "utf8"
  )
);
const activitiesData = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "../src/data/content/activities.json"),
    "utf8"
  )
);
const staffData = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "../src/data/content/staff-profiles.json"),
    "utf8"
  )
);
const tripsData = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "../src/data/content/trips.json"),
    "utf8"
  )
);

console.log("📋 Content Export for Payload CMS Admin Interface\n");

// Export Academic Programs
console.log("📚 ACADEMIC PROGRAMS:");
console.log("=".repeat(50));
academicProgramsData.courses.forEach((course, index) => {
  console.log(`\n${index + 1}. ${course.title}`);
  console.log(`   Description: ${course.description}`);
  console.log(`   Category: ${course.category}`);
  console.log(`   Duration: ${course.duration}`);
  console.log(`   Age Range: ${course.ageRange}`);
  console.log(`   Session: ${course.session}`);
  console.log(`   Prerequisites: ${course.prerequisites || "None"}`);
  console.log(`   Status: ${course.published ? "Active" : "Draft"}`);
});

// Export Staff Profiles
console.log("\n\n👥 STAFF PROFILES:");
console.log("=".repeat(50));
staffData.staff.forEach((staff, index) => {
  console.log(`\n${index + 1}. ${staff.firstName} ${staff.lastName}`);
  console.log(`   Position: ${staff.position}`);
  console.log(`   Department: ${staff.department}`);
  console.log(`   Bio: ${staff.bio.substring(0, 100)}...`);
  console.log(`   Email: ${staff.email || "Not provided"}`);
  console.log(`   Status: ${staff.isActive ? "Active" : "Inactive"}`);
});

// Export Activities
console.log("\n\n🏃 ACTIVITIES:");
console.log("=".repeat(50));
activitiesData.activities.forEach((activity, index) => {
  console.log(`\n${index + 1}. ${activity.title}`);
  console.log(`   Description: ${activity.description}`);
  console.log(`   Category: ${activity.category}`);
  console.log(`   Duration: ${activity.duration}`);
  console.log(`   Instructor: ${activity.instructor || "Not specified"}`);
  console.log(
    `   Max Participants: ${activity.maxParticipants || "Unlimited"}`
  );
  console.log(`   Status: ${activity.published ? "Active" : "Draft"}`);
});

// Export Trips
console.log("\n\n✈️ TRIPS:");
console.log("=".repeat(50));
tripsData.trips.forEach((trip, index) => {
  console.log(`\n${index + 1}. ${trip.title}`);
  console.log(`   Description: ${trip.description}`);
  console.log(`   Category: ${trip.category}`);
  console.log(`   Duration: ${trip.duration}`);
  console.log(`   Destination: ${trip.destination}`);
  console.log(`   Transportation: ${trip.transportation || "Not specified"}`);
  console.log(`   Cost: ${trip.cost || "Not specified"}`);
  console.log(`   Status: ${trip.published ? "Active" : "Draft"}`);
});

console.log("\n\n📊 SUMMARY:");
console.log("=".repeat(50));
console.log(`Total Academic Programs: ${academicProgramsData.courses.length}`);
console.log(`Total Staff Profiles: ${staffData.staff.length}`);
console.log(`Total Activities: ${activitiesData.activities.length}`);
console.log(`Total Trips: ${tripsData.trips.length}`);

console.log("\n\n🎯 NEXT STEPS:");
console.log("=".repeat(50));
console.log("1. Go to http://localhost:3001/admin/");
console.log(
  "2. Click on each collection (Academic Programs, Staff, Activities, Trips)"
);
console.log('3. Click "Create New" to add each item manually');
console.log("4. Use the information above to fill in the forms");
console.log("5. Save each item");

// Also create JSON files for easier import
const exportDir = path.join(__dirname, "../exports");
if (!fs.existsSync(exportDir)) {
  fs.mkdirSync(exportDir, { recursive: true });
}

// Export formatted data for easy copy-paste
const exportData = {
  academicPrograms: academicProgramsData.courses.map((course) => ({
    title: course.title,
    description: course.description,
    category: course.category,
    ageRange: course.ageRange,
    duration: course.duration,
    session: course.session,
    prerequisites: course.prerequisites,
    status: course.published ? "active" : "draft",
  })),
  staff: staffData.staff.map((staff) => ({
    name: `${staff.firstName} ${staff.lastName}`,
    position: staff.position,
    department: staff.department,
    bio: staff.bio,
    email: staff.email,
    status: staff.isActive ? "active" : "inactive",
  })),
  activities: activitiesData.activities.map((activity) => ({
    title: activity.title,
    description: activity.description,
    category: activity.category,
    duration: activity.duration,
    instructor: activity.instructor,
    maxParticipants: activity.maxParticipants,
    status: activity.published ? "active" : "draft",
  })),
  trips: tripsData.trips.map((trip) => ({
    title: trip.title,
    description: trip.description,
    category: trip.category,
    duration: trip.duration,
    destination: trip.destination,
    transportation: trip.transportation,
    cost: trip.cost,
    status: trip.published ? "active" : "draft",
  })),
};

fs.writeFileSync(
  path.join(exportDir, "payload-import-data.json"),
  JSON.stringify(exportData, null, 2)
);
console.log(
  `\n📁 Export data saved to: ${path.join(
    exportDir,
    "payload-import-data.json"
  )}`
);
console.log(
  "You can use this file as a reference when adding content through the admin interface."
);
