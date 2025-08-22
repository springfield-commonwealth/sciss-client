#!/usr/bin/env node

/**
 * Database Setup Script for Supabase PostgreSQL
 * Run this script to test your database connection
 */

import { config } from "dotenv";
import { Client } from "pg";

// Load environment variables from .env.local
config({ path: ".env.local" });

async function testDatabaseConnection() {
  const client = new Client({
    connectionString: process.env.DATABASE_URI,
    ssl:
      process.env.NODE_ENV === "production"
        ? { rejectUnauthorized: false }
        : false,
  });

  try {
    console.log("🔄 Testing Supabase PostgreSQL connection...");

    await client.connect();
    console.log("✅ Database connection established successfully!");

    // Test a simple query
    const result = await client.query("SELECT NOW()");
    console.log("📊 Database query test successful:", result.rows[0]);

    // Test if we can create a table (this will be handled by PayloadCMS migrations)
    console.log("🔧 Database is ready for PayloadCMS migrations");
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    console.error(
      "💡 Make sure your DATABASE_URI is set correctly in .env.local"
    );
    process.exit(1);
  } finally {
    await client.end();
    console.log("🔌 Database connection closed.");
  }
}

// Check if DATABASE_URI is set
if (!process.env.DATABASE_URI) {
  console.error("❌ DATABASE_URI environment variable is not set");
  console.error("💡 Please set it in your .env.local file");
  process.exit(1);
}

testDatabaseConnection();
