import { useConfig } from "payload/components/utilities";
import React from "react";

const Dashboard: React.FC = () => {
  const { collections } = useConfig();

  return (
    <div style={{ padding: "20px" }}>
      <h1>SCISS Admin Dashboard</h1>
      <p>Welcome to the SCISS Content Management System</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            padding: "20px",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h3>Quick Stats</h3>
          <ul>
            <li>Collections: {collections?.length || 0}</li>
            <li>Users: Active</li>
            <li>Content: Ready</li>
          </ul>
        </div>

        <div
          style={{
            padding: "20px",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h3>Quick Actions</h3>
          <ul>
            <li>
              <a href="/admin/collections/users">Manage Users</a>
            </li>
            <li>
              <a href="/admin/collections/applications">View Applications</a>
            </li>
            <li>
              <a href="/admin/collections/academic-programs">
                Academic Programs
              </a>
            </li>
          </ul>
        </div>

        <div
          style={{
            padding: "20px",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h3>System Info</h3>
          <ul>
            <li>Payload CMS v3</li>
            <li>Next.js 15</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
