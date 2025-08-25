// Simple user creation via REST API
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

async function createAdminUser() {
  try {
    const response = await fetch(
      "http://localhost:3001/api/payload/users/first-register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Admin User",
          email: "admin@sciss.org",
          password: "admin123",
          role: "admin",
        }),
      }
    );

    if (response.ok) {
      const user = await response.json();
      console.log("🎉 Admin user created!");
      console.log("Email: admin@sciss.org");
      console.log("Password: admin123");
      console.log("User:", user);
    } else {
      const error = await response.text();
      console.log("Response:", error);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

createAdminUser();
