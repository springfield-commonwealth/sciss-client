// Simple script to create database tables using drizzle-kit
import { exec } from "child_process";
import dotenv from "dotenv";
import { promisify } from "util";

const execAsync = promisify(exec);

// Load environment variables
dotenv.config({ path: ".env.local" });

async function createTables() {
  try {
    console.log("🔍 Checking environment...");

    if (!process.env.DATABASE_URI) {
      throw new Error("DATABASE_URI is not set in .env.local");
    }

    if (!process.env.PAYLOAD_SECRET) {
      throw new Error("PAYLOAD_SECRET is not set in .env.local");
    }

    console.log("✅ Environment variables loaded");
    console.log("📊 Creating database tables...");

    // Use payload CLI to generate and run migration
    await execAsync("pnpx payload migrate:create init_fresh");
    console.log("✅ Migration created");

    await execAsync("pnpx payload migrate");
    console.log("✅ Migration applied");

    console.log("🎉 Database setup complete!");
  } catch (error) {
    console.error("❌ Error:", error.message);
    if (error.stdout) console.log("stdout:", error.stdout);
    if (error.stderr) console.log("stderr:", error.stderr);
    process.exit(1);
  }
}

createTables();
