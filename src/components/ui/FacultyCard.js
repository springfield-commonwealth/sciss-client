const FacultyCard = ({ name, role, background, expertise, photo }) => (
  <div className="faculty-card">
    <div className="faculty-info">
      {photo && (
        <div className="faculty-photo-wrapper">
          <img src={photo} alt={name} className="faculty-photo" />
        </div>
      )}
      <h4 className="faculty-name">{name}</h4>
      <div className="faculty-role">{role}</div>
      <div className="faculty-background">
        {Array.isArray(background)
          ? background.map((line, idx) => <div key={idx}>{line}</div>)
          : background}
      </div>
    </div>
  </div>
);

export default FacultyCard;
