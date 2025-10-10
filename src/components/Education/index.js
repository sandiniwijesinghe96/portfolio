import "../Education/styles.css";

const Education = () => {
  return (
    <section className="education-section">
      <h2>Education & Certifications</h2>

      <div className="education-timeline">
        <div className="education-item">
          <div className="institution-badge">🎓 Master's Degree</div>
          <h3>Master of Science in Computer Science</h3>
          <span className="education-duration">Jan 2023 - Present</span>
          <p>University of Moratuwa, Sri Lanka | Department of Computer Science and Engineering</p>
        </div>

        <div className="education-item">
          <div className="institution-badge">🎓 Bachelor's Degree</div>
          <h3>Bachelor of Science (Hons.) in Information Technology</h3>
          <span className="education-duration">Sept 2017 – Mar 2022</span>
          <p>University of Moratuwa, Sri Lanka | CGPA: 3.61 - Second Class Upper Division</p>
        </div>

        <div className="education-item">
          <div className="institution-badge">🏫 Advanced Level</div>
          <h3>Advanced Level Education</h3>
          <span className="education-duration">2002 - 2016</span>
          <p>Visakha Vidyalaya, Colombo 05 | Advanced in Combined Mathematics and Physics</p>
        </div>
      </div>

      <div className="certifications">
        <h3>Professional Certifications</h3>
        <div className="cert-grid">
          <div className="cert-card">
            <div className="cert-icon">🏆</div>
            <div className="cert-content">
              <a href="https://www.credly.com/badges/7985003a-d4aa-4a5d-a347-5d511bb4662f/linked_in_profile" target="_blank" rel="noreferrer" className="cert-title">
                AWS Certified Solution Architect - Associate
              </a>
              <div className="cert-details">
                <span className="cert-code">(SAA-C03)</span>
                <span className="cert-badge">AWS</span>
              </div>
            </div>
          </div>
          <div className="cert-card">
            <div className="cert-icon">🎖️</div>
            <div className="cert-content">
              <div className="cert-title">
                Diploma in Management Accounting
              </div>
              <div className="cert-details">
                <span className="cert-code">Chartered Institute of Management Accountants</span>
                <span className="cert-badge">CIMA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
