import React from "react";
const WeeklySchedule = () => {
  const scheduleData = [
    {
      time: "07:00 - 08:00",
      saturday: { type: "breakfast", activity: "Breakfast" },
      sunday: { type: "breakfast", activity: "Breakfast" },
      monday: { type: "breakfast", activity: "Breakfast" },
      tuesday: { type: "breakfast", activity: "Breakfast" },
      wednesday: { type: "breakfast", activity: "Breakfast" },
      thursday: { type: "breakfast", activity: "Breakfast" },
      friday: { type: "breakfast", activity: "Breakfast" },
    },
    {
      time: "08:00 - 09:00",
      saturday: {
        type: "free",
        activity: "Yoga, Meditation or Training in the Gym (Optional)",
      },
      sunday: {
        type: "free",
        activity: "Yoga, Meditation or Training in the Gym (Optional)",
      },
      monday: {
        type: "free",
        activity: "Yoga, Meditation or Training in the Gym (Optional)",
      },
      tuesday: {
        type: "free",
        activity: "Yoga, Meditation or Training in the Gym (Optional)",
      },
      wednesday: {
        type: "free",
        activity: "Yoga, Meditation or Training in the Gym (Optional)",
      },
      thursday: {
        type: "free",
        activity: "Yoga, Meditation or Training in the Gym (Optional)",
      },
      friday: {
        type: "free",
        activity: "Yoga, Meditation or Training in the Gym (Optional)",
      },
    },
    {
      time: "09:00 - 10:00",
      saturday: { type: "trips", activity: "Day Trips" },
      sunday: { type: "activities", activity: "Group Activity" },
      monday: { type: "academic", activity: "Academic Classes" },
      tuesday: { type: "academic", activity: "Academic Classes" },
      wednesday: { type: "academic", activity: "Academic Classes" },
      thursday: { type: "academic", activity: "Academic Classes" },
      friday: { type: "academic", activity: "Academic Classes" },
    },
    {
      time: "10:00 - 11:00",
      saturday: { type: "trips", activity: "Harvard & MIT Visits" },
      sunday: { type: "activities", activity: "Group Activity" },
      monday: {
        type: "academic",
        activity: "Path to Wall Street / AI / Public Speaking",
      },
      tuesday: {
        type: "academic",
        activity: "Path to Wall Street / AI / Public Speaking",
      },
      wednesday: {
        type: "academic",
        activity: "Path to Wall Street / AI / Public Speaking",
      },
      thursday: {
        type: "academic",
        activity: "Path to Wall Street / AI / Public Speaking",
      },
      friday: { type: "special", activity: "Professional CEO Speaker" },
    },
    {
      time: "11:00 - 12:00",
      saturday: { type: "trips", activity: "Yale University Visits" },
      sunday: { type: "activities", activity: "Group Activity" },
      monday: {
        type: "academic",
        activity: "Youth Innovation / Language / Visual Arts",
      },
      tuesday: {
        type: "academic",
        activity: "Youth Innovation / Language / Visual Arts",
      },
      wednesday: {
        type: "academic",
        activity: "Youth Innovation / Language / Visual Arts",
      },
      thursday: {
        type: "academic",
        activity: "Youth Innovation / Language / Visual Arts",
      },
      friday: { type: "special", activity: "Professional CEO Speaker" },
    },
    {
      time: "12:00 - 01:00",
      saturday: { type: "lunch", activity: "Lunch" },
      sunday: { type: "lunch", activity: "Lunch" },
      monday: { type: "lunch", activity: "Lunch" },
      tuesday: { type: "lunch", activity: "Lunch" },
      wednesday: { type: "lunch", activity: "Lunch" },
      thursday: { type: "lunch", activity: "Lunch" },
      friday: { type: "lunch", activity: "Lunch" },
    },
    {
      time: "01:00 - 02:00",
      saturday: { type: "trips", activity: "Museums & Historical Sites" },
      sunday: {
        type: "activities",
        activity: "Shopping Mall: Daily Necessities",
      },
      monday: { type: "electives", activity: "Electives (Sports)" },
      tuesday: { type: "electives", activity: "Electives (Sports)" },
      wednesday: {
        type: "trips",
        activity: "Field Trip: Museums/Basketball Hall of Fame",
      },
      thursday: { type: "electives", activity: "Electives (Sports)" },
      friday: { type: "electives", activity: "Electives/Awarding Ceremony" },
    },
    {
      time: "02:00 - 03:00",
      saturday: { type: "trips", activity: "Basketball Hall of Fame" },
      sunday: {
        type: "activities",
        activity: "Free Activities: Bowling and Games",
      },
      monday: { type: "electives", activity: "Basketball/Rowing/Golf/Fencing" },
      tuesday: {
        type: "electives",
        activity: "Basketball/Rowing/Golf/Fencing",
      },
      wednesday: {
        type: "trips",
        activity: "Field Trip: Museums/Basketball Hall of Fame",
      },
      thursday: {
        type: "electives",
        activity: "Basketball/Rowing/Golf/Fencing",
      },
      friday: { type: "electives", activity: "Sports Competition Finals" },
    },
    {
      time: "03:00 - 04:00",
      saturday: { type: "trips", activity: "Six Flags Theme Park" },
      sunday: {
        type: "activities",
        activity: "Free Activities: Bowling and Games",
      },
      monday: {
        type: "electives",
        activity: "Soccer/Archery/Fitness Training",
      },
      tuesday: {
        type: "electives",
        activity: "Soccer/Archery/Fitness Training",
      },
      wednesday: {
        type: "trips",
        activity: "Field Trip: Museums/Basketball Hall of Fame",
      },
      thursday: {
        type: "electives",
        activity: "Soccer/Archery/Fitness Training",
      },
      friday: { type: "electives", activity: "Sports Competition Finals" },
    },
    {
      time: "04:00 - 05:00",
      saturday: { type: "trips", activity: "Return to Campus" },
      sunday: { type: "activities", activity: "Return to Campus" },
      monday: {
        type: "free",
        activity: "Free Time, Workshops and Organized Activities",
      },
      tuesday: {
        type: "free",
        activity: "Free Time, Workshops and Organized Activities",
      },
      wednesday: { type: "trips", activity: "Return from Field Trip" },
      thursday: {
        type: "free",
        activity: "Free Time, Workshops and Organized Activities",
      },
      friday: {
        type: "free",
        activity: "Free Time, Workshops and Organized Activities",
      },
    },
    {
      time: "05:00 - 06:00",
      saturday: { type: "free", activity: "Free Time & Rest" },
      sunday: { type: "free", activity: "Free Time & Rest" },
      monday: {
        type: "free",
        activity: "Free Time, Workshops and Organized Activities",
      },
      tuesday: {
        type: "free",
        activity: "Free Time, Workshops and Organized Activities",
      },
      wednesday: {
        type: "free",
        activity: "Free Time, Workshops and Organized Activities",
      },
      thursday: {
        type: "free",
        activity: "Free Time, Workshops and Organized Activities",
      },
      friday: {
        type: "free",
        activity: "Free Time, Workshops and Organized Activities",
      },
    },
    {
      time: "06:00 - 07:00",
      saturday: { type: "dinner", activity: "Dinner" },
      sunday: { type: "dinner", activity: "Dinner" },
      monday: { type: "dinner", activity: "Dinner" },
      tuesday: { type: "dinner", activity: "Dinner" },
      wednesday: { type: "dinner", activity: "Dinner" },
      thursday: { type: "dinner", activity: "Dinner" },
      friday: { type: "dinner", activity: "Dinner" },
    },
    {
      time: "07:00 - 08:00",
      saturday: { type: "entertainment", activity: "Entertainment" },
      sunday: { type: "team", activity: "Team Activities" },
      monday: { type: "team", activity: "Team Activities" },
      tuesday: { type: "team", activity: "Team Activities" },
      wednesday: { type: "team", activity: "Team Activities" },
      thursday: { type: "team", activity: "Team Activities" },
      friday: { type: "entertainment", activity: "DJ Dancing/Talent Show" },
    },
    {
      time: "08:00 - 09:00",
      saturday: { type: "entertainment", activity: "Movie Night" },
      sunday: { type: "team", activity: "Movie Night/Board Games" },
      monday: { type: "team", activity: "Bonfire Party/Basketball Game" },
      tuesday: { type: "team", activity: "Bonfire Party/Basketball Game" },
      wednesday: { type: "team", activity: "Bonfire Party/Basketball Game" },
      thursday: { type: "team", activity: "Kickball/Team Building" },
      friday: { type: "entertainment", activity: "Formal Gala" },
    },
  ];

  const activityTypes = {
    academic: { color: "#1B365D", label: "Academic Classes" },
    electives: { color: "#2E5C7E", label: "Elective Sports" },
    trips: { color: "#7FB3D3", label: "Field Trips" },
    activities: { color: "#5C7CFA", label: "Activities" },
    team: { color: "#495057", label: "Team Events" },
    entertainment: { color: "#212529", label: "Entertainment" },
    special: { color: "#E74C3C", label: "Special Events" },
    free: { color: "#F8F9FA", label: "Free Time" },
    breakfast: { color: "#FFF3CD", label: "Breakfast" },
    lunch: { color: "#D4EDDA", label: "Lunch" },
    dinner: { color: "#D1ECF1", label: "Dinner" },
  };

  const getActivityStyle = (type) => {
    const activityType = activityTypes[type];
    const isLight = ["free", "breakfast", "lunch", "dinner"].includes(type);

    return {
      backgroundColor: activityType?.color || "#FFFFFF",
      color: isLight ? "#333333" : "#FFFFFF",
      border: "1px solid #E9ECEF",
      fontSize: "0.85rem",
      fontWeight: "500",
    };
  };

  return (
    <section className="weekly-schedule-section">
      <div className="schedule-intro">
        <div className="schedule-intro__content">
          <h2 className="schedule-title">A Typical Week at SCISS</h2>
          <p className="schedule-description">
            While each student enjoys an individually tailored summer school
            experience at SCISS, our structured schedule ensures they maximize
            their time with us. The timetable below provides an outline of what
            to expect during a typical week.
          </p>
        </div>
      </div>

      <div className="schedule-wrapper">
        <div className="legend">
          {Object.entries(activityTypes).map(([key, { color, label }]) => (
            <span key={key} className="legend__item">
              <span
                className="legend__color-box"
                style={{ backgroundColor: color }}
              ></span>
              <span className="legend__label">{label}</span>
            </span>
          ))}
        </div>

        <div className="table-scroller">
          <table className="schedule-table">
            <thead>
              <tr>
                <th className="schedule-table__time-col">Time</th>
                <th>Saturday</th>
                <th>Sunday</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((row, index) => (
                <tr key={index}>
                  <td className="schedule-table__time-col">{row.time}</td>
                  <td
                    style={getActivityStyle(row.saturday.type)}
                    title={row.saturday.activity}
                  >
                    <span className="activity-text">
                      {row.saturday.activity}
                    </span>
                  </td>
                  <td
                    style={getActivityStyle(row.sunday.type)}
                    title={row.sunday.activity}
                  >
                    <span className="activity-text">{row.sunday.activity}</span>
                  </td>
                  <td
                    style={getActivityStyle(row.monday.type)}
                    title={row.monday.activity}
                  >
                    <span className="activity-text">{row.monday.activity}</span>
                  </td>
                  <td
                    style={getActivityStyle(row.tuesday.type)}
                    title={row.tuesday.activity}
                  >
                    <span className="activity-text">
                      {row.tuesday.activity}
                    </span>
                  </td>
                  <td
                    style={getActivityStyle(row.wednesday.type)}
                    title={row.wednesday.activity}
                  >
                    <span className="activity-text">
                      {row.wednesday.activity}
                    </span>
                  </td>
                  <td
                    style={getActivityStyle(row.thursday.type)}
                    title={row.thursday.activity}
                  >
                    <span className="activity-text">
                      {row.thursday.activity}
                    </span>
                  </td>
                  <td
                    style={getActivityStyle(row.friday.type)}
                    title={row.friday.activity}
                  >
                    <span className="activity-text">{row.friday.activity}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="schedule-note">
          <p>
            Every student at SCISS will relish a distinctive experience
            customized to match their interests and talents. However, this chart
            provides a glimpse into what lies ahead.
          </p>
          <p>
            <strong>Note:</strong>Field trips, and activities are subject to
            weather conditions and availability. Schedule may vary based on
            field trip days and special events. Weekend activities include
            cultural excursions and recreational events.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WeeklySchedule;
