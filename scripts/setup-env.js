#!/usr/bin/env node

/**
 * Environment Setup Script for SCISS
 * Helps configure environment variables with proper database password handling
 */

import fs from "fs";
import path from "path";
import readline from "readline";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (query) =>
  new Promise((resolve) => rl.question(query, resolve));

async function setupEnvironment() {
  console.log("🔧 SCISS Environment Setup\n");

  const envPath = path.join(__dirname, "..", ".env.local");
  const templatePath = path.join(__dirname, "..", "env.template");

  // Check if .env.local already exists
  if (fs.existsSync(envPath)) {
    const overwrite = await question(
      "⚠️  .env.local already exists. Overwrite? (y/N): "
    );
    if (overwrite.toLowerCase() !== "y") {
      console.log("Setup cancelled.");
      rl.close();
      return;
    }
  }

  console.log("📝 Setting up environment variables...\n");

  // Read template
  let template = fs.readFileSync(templatePath, "utf8");

  // Get database configuration
  console.log("🗄️  Database Configuration:");
  const dbHost =
    (await question("Database host (default: localhost): ")) || "localhost";
  const dbPort = (await question("Database port (default: 5432): ")) || "5432";
  const dbName =
    (await question("Database name (default: sciss_db): ")) || "sciss_db";
  const dbUser = await question("Database username: ");
  const dbPassword = await question("Database password: ");

  // Get deployment type
  console.log("\n🚀 Deployment Configuration:");
  const isRender = await question("Deploying to Render? (y/N): ");

  let databaseUri;
  if (isRender.toLowerCase() === "y") {
    const renderHost = await question("Render database host: ");
    databaseUri = `postgresql://${dbUser}:${dbPassword}@${renderHost}:${dbPort}/${dbName}?sslmode=require&pool_timeout=20&connection_limit=20`;
  } else {
    databaseUri = `postgresql://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`;
  }

  // Replace placeholders in template
  template = template.replace(
    "DB_PASSWORD=your-long-database-password-here",
    `DB_PASSWORD=${dbPassword}`
  );
  template = template.replace(
    "DATABASE_URI=postgresql://username:${DB_PASSWORD}@localhost:5432/sciss_db",
    `DATABASE_URI=${databaseUri}`
  );

  // Get Payload secret
  console.log("\n🔐 Security Configuration:");
  const payloadSecret = await question(
    "Payload secret (press Enter for auto-generation): "
  );
  const finalPayloadSecret = payloadSecret || generateSecret(32);
  template = template.replace(
    "PAYLOAD_SECRET=your-super-secret-key-here",
    `PAYLOAD_SECRET=${finalPayloadSecret}`
  );

  // Get server URLs
  console.log("\n🌐 Server Configuration:");
  const serverUrl =
    (await question("Server URL (default: http://localhost:3001): ")) ||
    "http://localhost:3001";
  const frontendUrl =
    (await question("Frontend URL (default: http://localhost:3000): ")) ||
    "http://localhost:3000";

  template = template.replace(
    "NEXT_PUBLIC_SERVER_URL=http://localhost:3001",
    `NEXT_PUBLIC_SERVER_URL=${serverUrl}`
  );
  template = template.replace(
    "FRONTEND_URL=http://localhost:3000",
    `FRONTEND_URL=${frontendUrl}`
  );
  template = template.replace(
    "NEXT_PUBLIC_API_URL=http://localhost:3001/api/payload",
    `NEXT_PUBLIC_API_URL=${serverUrl}/api/payload`
  );
  template = template.replace(
    "NEXT_PUBLIC_APP_URL=http://localhost:3000",
    `NEXT_PUBLIC_APP_URL=${frontendUrl}`
  );

  // Optional: R2 Storage
  console.log("\n☁️  Storage Configuration (Optional):");
  const useR2 = await question("Use Cloudflare R2 for storage? (y/N): ");

  if (useR2.toLowerCase() === "y") {
    const r2Bucket = await question("R2 bucket name: ");
    const r2Endpoint = await question("R2 endpoint: ");
    const r2AccessKey = await question("R2 access key ID: ");
    const r2SecretKey = await question("R2 secret access key: ");

    template = template.replace(
      "R2_BUCKET=your-bucket-name",
      `R2_BUCKET=${r2Bucket}`
    );
    template = template.replace(
      "R2_ENDPOINT=https://your-account-id.r2.cloudflarestorage.com",
      `R2_ENDPOINT=${r2Endpoint}`
    );
    template = template.replace(
      "R2_ACCESS_KEY_ID=your-access-key-id",
      `R2_ACCESS_KEY_ID=${r2AccessKey}`
    );
    template = template.replace(
      "R2_SECRET_ACCESS_KEY=your-secret-access-key",
      `R2_SECRET_ACCESS_KEY=${r2SecretKey}`
    );
  }

  // Write the file
  fs.writeFileSync(envPath, template);

  console.log("\n✅ Environment setup completed!");
  console.log(`📁 Environment file created: ${envPath}`);

  if (!payloadSecret) {
    console.log(`🔑 Generated Payload secret: ${finalPayloadSecret}`);
  }

  console.log("\n🎯 Next steps:");
  console.log("1. Review your .env.local file");
  console.log("2. Run: pnpm payload generate:types");
  console.log("3. Run: pnpm payload migrate");
  console.log("4. Start development: pnpm dev");

  rl.close();
}

function generateSecret(length) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Handle command line arguments
const args = process.argv.slice(2);
if (args.includes("--help") || args.includes("-h")) {
  console.log("SCISS Environment Setup Script");
  console.log("");
  console.log("Usage: node scripts/setup-env.js");
  console.log("");
  console.log("This script will help you configure your environment variables");
  console.log("for local development and deployment.");
  process.exit(0);
}

setupEnvironment().catch(console.error);
