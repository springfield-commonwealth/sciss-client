import dotenv from "dotenv";
import { getPayload } from "payload";
import config from "../.backup-2025-08-22T1430/src/payload.config.js";

// Load environment variables
dotenv.config({ path: ".env.local" });

async function createAdminUser() {
  try {
    console.log("🔧 Initializing Payload...");

    const payload = await getPayload({
      config,
      local: true,
    });

    console.log("✅ Payload initialized");

    // Check if any users exist
    const existingUsers = await payload.find({
      collection: "users",
      limit: 1,
    });

    if (existingUsers.totalDocs > 0) {
      console.log("👤 Admin user already exists");
      console.log("Existing users:", existingUsers.totalDocs);
      return;
    }

    // Create admin user
    const adminUser = await payload.create({
      collection: "users",
      data: {
        name: "Admin User",
        email: "admin@sciss.org",
        password: "admin123",
        role: "admin",
      },
    });

    console.log("🎉 Admin user created successfully!");
    console.log("Email: admin@sciss.org");
    console.log("Password: admin123");
    console.log("User ID:", adminUser.id);

    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error.message);
    console.error("Full error:", error);
    process.exit(1);
  }
}

createAdminUser();
