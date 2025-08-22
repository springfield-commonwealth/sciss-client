"use client";

import { campSchedules } from "@/app/src/constants/CampScheduleData";
import { useState } from "react";

const CampSchedule = () => {
  const [selectedSession, setSelectedSession] = useState("session1");
  const [selectedWeek, setSelectedWeek] = useState(0);
  const session = campSchedules[selectedSession];
  const week = session[selectedWeek];

  return (
    <section className="camp-schedule-section container">
      <h2 className="text-center">Session Schedules</h2>
      {/* Session Tabs (future-proof) */}
      <div className="session-tabs" style={{ marginBottom: 16 }}>
        <button
          className={selectedSession === "session1" ? "active" : ""}
          onClick={() => setSelectedSession("session1")}
        >
          Session 1
        </button>
        {/* <button disabled>Session 2 (Coming Soon)</button> */}
      </div>
      {/* Week Tabs */}
      <div className="week-tabs" style={{ marginBottom: 16 }}>
        {session.map((w, idx) => (
          <button
            key={w.week}
            className={selectedWeek === idx ? "active" : ""}
            onClick={() => setSelectedWeek(idx)}
          >
            {w.week}
          </button>
        ))}
      </div>
      {/* Schedule Table */}
      <div
        className="camp-schedule-table-wrapper"
        style={{ overflowX: "auto" }}
      >
        <table className="camp-schedule-table">
          <thead>
            <tr>
              <th>Time</th>
              {week.days.map((day, i) => (
                <th key={day}>
                  {day}
                  <br />
                  <span style={{ fontWeight: "normal", fontSize: 12 }}>
                    {week.dates[i]}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {week.times.map((time, rowIdx) => (
              <tr key={time}>
                <td>{time}</td>
                {week.schedule[rowIdx].map((cell, colIdx) => (
                  <td key={colIdx}>{cell || ""}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Download PDF Button (placeholder)
      <div style={{ marginTop: 24 }}>
        <button disabled style={{ opacity: 0.6 }}>
          Download PDF (Coming Soon)
        </button>
      </div> */}
    </section>
  );
};

// Fill all blank cells with '-'
Object.values(campSchedules).forEach((session) => {
  session.forEach((week) => {
    week.schedule = week.schedule.map((row) =>
      row.map((cell) => (cell === "" ? "-" : cell))
    );
  });
});

export default CampSchedule;
