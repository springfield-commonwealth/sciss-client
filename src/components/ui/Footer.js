
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
            <div className="footerSection">
                <h4>Contact Us</h4>
                <p>1 Ames Hill Dr<br/>Springfield, MA 01105</p>
                <p>Phone: (929) 928-1085<br/>
                Email: info@springfieldca.org</p>
            </div>
            <div className="footerSection">
                <h4>Quick Links</h4>
                <p><a href="#programs">Academic Programs</a></p>
                <p><a href="#sports">Sports & Activities</a></p>
                <p><a href="#tuition">Tuition & Dates</a></p>
                <p><a href="#apply">Apply Now</a></p>
            </div>
            <div className="footerSection">
                <h4>Sessions 2025</h4>
                <p>Session 1: June 29 - July 18</p>
                <p>Session 2: July 20 - August 8</p>
                <p>Early Bird Deadline: April 1st</p>
            </div>
            <div className="footerSection">
                <h4>Accreditation</h4>
                <p>National Honor Society (NHS)<br/>
                New England Association of Schools and Colleges (NEASC)</p>
            </div>
        </div>
        <div className="footerBottom">
            <p>&copy; 2025 Springfield Commonwealth International Summer School. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
