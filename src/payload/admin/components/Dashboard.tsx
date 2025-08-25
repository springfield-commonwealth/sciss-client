import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>SCISS Admin Dashboard</h1>
      <p>
        Welcome to the Springfield Commonwealth International Summer School
        admin panel.
      </p>

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
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "20px",
            backgroundColor: "white",
          }}
        >
          <h3>Quick Stats</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
            }}
          >
            <div>
              <strong>Total Courses:</strong> <span id="courses-count">-</span>
            </div>
            <div>
              <strong>Total Staff:</strong> <span id="staff-count">-</span>
            </div>
            <div>
              <strong>Total Activities:</strong>{" "}
              <span id="activities-count">-</span>
            </div>
            <div>
              <strong>Total Trips:</strong> <span id="trips-count">-</span>
            </div>
          </div>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "20px",
            backgroundColor: "white",
          }}
        >
          <h3>Quick Actions</h3>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <a
              href="/admin/collections/academic-programs"
              style={{
                padding: "10px",
                backgroundColor: "#007bff",
                color: "white",
                textDecoration: "none",
                borderRadius: "4px",
                textAlign: "center",
              }}
            >
              Manage Courses
            </a>
            <a
              href="/admin/collections/staff"
              style={{
                padding: "10px",
                backgroundColor: "#28a745",
                color: "white",
                textDecoration: "none",
                borderRadius: "4px",
                textAlign: "center",
              }}
            >
              Manage Staff
            </a>
            <a
              href="/admin/collections/activities"
              style={{
                padding: "10px",
                backgroundColor: "#ffc107",
                color: "black",
                textDecoration: "none",
                borderRadius: "4px",
                textAlign: "center",
              }}
            >
              Manage Activities
            </a>
            <a
              href="/admin/collections/trips"
              style={{
                padding: "10px",
                backgroundColor: "#dc3545",
                color: "white",
                textDecoration: "none",
                borderRadius: "4px",
                textAlign: "center",
              }}
            >
              Manage Trips
            </a>
          </div>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "20px",
            backgroundColor: "white",
          }}
        >
          <h3>Recent Activity</h3>
          <div id="recent-activity">
            <p>Loading recent activity...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
