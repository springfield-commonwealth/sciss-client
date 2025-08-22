#!/usr/bin/env node

import http from "http";

const endpoints = [
  "/admin/",
  "/admin/collections/users/",
  "/admin/collections/academic-programs/",
  "/admin/collections/activities/",
  "/admin/collections/staff/",
  "/admin/collections/trips/",
  "/admin/collections/media/",
  "/api/payload",
  "/api/payload/collections",
  "/api/payload/collections/users",
  "/api/payload/collections/academic-programs",
  "/api/payload/collections/activities",
  "/api/payload/collections/staff",
  "/api/payload/collections/trips",
  "/api/payload/collections/media",
];

const options = {
  hostname: "localhost",
  port: 3001,
  method: "GET",
  timeout: 5000,
};

async function testEndpoint(path) {
  return new Promise((resolve) => {
    const req = http.request({ ...options, path }, (res) => {
      resolve({
        path,
        status: res.statusCode,
        working: res.statusCode === 200,
      });
    });

    req.on("error", () => {
      resolve({
        path,
        status: "ERROR",
        working: false,
      });
    });

    req.on("timeout", () => {
      req.destroy();
      resolve({
        path,
        status: "TIMEOUT",
        working: false,
      });
    });

    req.end();
  });
}

async function runTests() {
  console.log("\n🔍 Testing SCISS Admin Endpoints...\n");

  const results = [];

  for (const endpoint of endpoints) {
    const result = await testEndpoint(endpoint);
    results.push(result);

    const status = result.working ? "✅" : "❌";
    console.log(`${status} ${endpoint} - ${result.status}`);
  }

  const working = results.filter((r) => r.working).length;
  const total = results.length;

  console.log(`\n📊 Summary:`);
  console.log(`✅ Working: ${working}/${total}`);
  console.log(`❌ Failed: ${total - working}/${total}`);

  if (working === total) {
    console.log("\n🎉 All endpoints are working perfectly!");
  } else {
    console.log("\n⚠️  Some endpoints need attention.");
  }
}

runTests().catch(console.error);
