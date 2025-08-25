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

async function migrateContentToPayload() {
  console.log("🚀 Starting content migration to Payload CMS...\n");

  try {
    // Initialize Payload
    const { getPayload } = await import(
      "../.backup-2025-08-22T1430/src/lib/payload/getPayload.js"
    );
    const config = await import(
      "../.backup-2025-08-22T1430/src/payload.config.js"
    );

    const payload = await getPayload({ config: config.default });

    console.log("✅ Payload initialized successfully\n");

    // 1. Migrate Academic Programs
    console.log("📚 Migrating Academic Programs...");
    await migrateAcademicPrograms(payload);

    // 2. Migrate Staff Profiles
    console.log("👥 Migrating Staff Profiles...");
    await migrateStaffProfiles(payload);

    // 3. Migrate Activities
    console.log("🏃 Migrating Activities...");
    await migrateActivities(payload);

    // 4. Migrate Trips
    console.log("✈️ Migrating Trips...");
    await migrateTrips(payload);

    console.log("\n🎉 Content migration completed successfully!");
    console.log("\n📊 Migration Summary:");
    console.log(
      `   • Academic Programs: ${academicProgramsData.courses.length} migrated`
    );
    console.log(`   • Staff Profiles: ${staffData.staff.length} migrated`);
    console.log(
      `   • Activities: ${activitiesData.activities.length} migrated`
    );
    console.log(`   • Trips: ${tripsData.trips.length} migrated`);

    process.exit(0);
  } catch (error) {
    console.error("❌ Migration failed:", error);
    process.exit(1);
  }
}

async function migrateAcademicPrograms(payload) {
  for (const course of academicProgramsData.courses) {
    try {
      const academicProgramData = {
        title: course.title,
        description: course.description,
        category: mapCategory(course.category),
        ageRange: course.ageRange,
        duration: course.duration,
        scheduleTime: course.session,
        scheduleLocation: "TBD", // Add if available in your data
        status: course.published ? "active" : "draft",
        // Add other fields as needed
        prerequisites: course.prerequisites ? [course.prerequisites] : [],
        learningObjectives: course.outcomes || [],
        materials: course.curriculum || [],
        // Note: instructor_id will need to be linked after staff migration
      };

      await payload.create({
        collection: "academic-programs",
        data: academicProgramData,
      });

      console.log(`   ✅ Migrated: ${course.title}`);
    } catch (error) {
      console.log(
        `   ⚠️ Failed to migrate: ${course.title} - ${error.message}`
      );
    }
  }
}

async function migrateStaffProfiles(payload) {
  for (const staffMember of staffData.staff) {
    try {
      const staffData = {
        name: `${staffMember.firstName} ${staffMember.lastName}`,
        position: staffMember.position,
        department: mapDepartment(staffMember.department),
        bio: {
          content: staffMember.bio,
        },
        email: staffMember.email || "",
        phone: staffMember.phone || "",
        status: staffMember.isActive ? "active" : "inactive",
        // Add other fields as needed
        education: staffMember.education || [],
        experience: staffMember.experience || [],
        specializations: staffMember.expertise || [],
        // Note: profile_image_id will need to be linked after media migration
      };

      await payload.create({
        collection: "staff",
        data: staffData,
      });

      console.log(
        `   ✅ Migrated: ${staffMember.firstName} ${staffMember.lastName}`
      );
    } catch (error) {
      console.log(
        `   ⚠️ Failed to migrate: ${staffMember.firstName} ${staffMember.lastName} - ${error.message}`
      );
    }
  }
}

async function migrateActivities(payload) {
  for (const activity of activitiesData.activities) {
    try {
      const activityData = {
        title: activity.title,
        description: activity.description,
        category: mapActivityCategory(activity.category),
        duration: activity.duration,
        scheduleTime: activity.scheduleTime || "",
        scheduleLocation: activity.scheduleLocation || "",
        instructor: activity.instructor || "",
        maxParticipants: activity.maxParticipants || null,
        status: activity.published ? "active" : "draft",
        // Add other fields as needed
        equipment: activity.equipment || [],
        safety: activity.safety || [],
        // Note: featured_image_id will need to be linked after media migration
      };

      await payload.create({
        collection: "activities",
        data: activityData,
      });

      console.log(`   ✅ Migrated: ${activity.title}`);
    } catch (error) {
      console.log(
        `   ⚠️ Failed to migrate: ${activity.title} - ${error.message}`
      );
    }
  }
}

async function migrateTrips(payload) {
  for (const trip of tripsData.trips) {
    try {
      const tripData = {
        title: trip.title,
        description: trip.description,
        category: mapTripCategory(trip.category),
        duration: trip.duration,
        destination: trip.destination,
        transportation: trip.transportation || "",
        cost: trip.cost || null,
        maxParticipants: trip.maxParticipants || null,
        safetyNotes: trip.safetyNotes || "",
        status: trip.published ? "active" : "draft",
        // Add other fields as needed
        itinerary: trip.itinerary || [],
        requirements: trip.requirements || [],
        whatToBring: trip.whatToBring || [],
        // Note: featured_image_id will need to be linked after media migration
      };

      await payload.create({
        collection: "trips",
        data: tripData,
      });

      console.log(`   ✅ Migrated: ${trip.title}`);
    } catch (error) {
      console.log(`   ⚠️ Failed to migrate: ${trip.title} - ${error.message}`);
    }
  }
}

// Helper functions to map categories
function mapCategory(category) {
  const categoryMap = {
    core: "core-academic",
    language: "language",
    arts: "arts-humanities",
    stem: "stem",
    elective: "elective",
    enrichment: "enrichment",
  };
  return categoryMap[category] || "core-academic";
}

function mapDepartment(department) {
  const departmentMap = {
    "Finance & Investment": "academic",
    "AI & Technology": "academic",
    Entrepreneurship: "academic",
    "Academic Leadership": "administration",
    "Guest Speakers": "academic",
    "Camp Leadership": "administration",
  };
  return departmentMap[department] || "academic";
}

function mapActivityCategory(category) {
  const categoryMap = {
    sports: "sports-recreation",
    arts: "arts-crafts",
    music: "music-dance",
    technology: "technology",
    outdoor: "outdoor-adventure",
    social: "social-activities",
  };
  return categoryMap[category] || "sports-recreation";
}

function mapTripCategory(category) {
  const categoryMap = {
    university: "university-visits",
    cultural: "cultural-experiences",
    educational: "educational-tours",
    recreational: "recreational",
    historical: "historical-sites",
  };
  return categoryMap[category] || "educational-tours";
}

// Run the migration
migrateContentToPayload();
