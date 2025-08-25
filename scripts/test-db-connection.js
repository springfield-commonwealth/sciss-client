import dotenv from "dotenv";
import path from "path";
import payload from "payload";
import { fileURLToPath } from "url";

// Load environment variables
dotenv.config({ path: ".env.local" });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function testConnection() {
  try {
    console.log("Testing database connection...");

    // Import the config
    const config = await import(
      "../.backup-2025-08-22T1430/src/payload.config.js"
    );

    // Initialize Payload
    await payload.init({
      config: config.default,
      local: true,
      loggerOptions: {
        level: "info",
      },
    });

    console.log("✅ Payload initialized successfully");
    console.log("Database connected:", payload.db.name);

    // Try to query users (this should create tables if they don't exist)
    const users = await payload.find({
      collection: "users",
      limit: 1,
    });

    console.log("✅ Users collection accessible");
    console.log("Existing users:", users.totalDocs);

    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error.message);
    console.error("Full error:", error);
    process.exit(1);
  }
}

testConnection();
