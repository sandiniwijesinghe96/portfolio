import "../Education/styles.css";

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2 className="education-title">Education</h2>

      <div className="education-timeline">
        <div className="education-item">
          <div className="institution-badge">🎓 University of Moratuwa</div>
          <h3>Master of Science in Computer Science</h3>
          <div className="edu-meta">
            <span className="edu-class first-class">First Class</span>
            <span className="edu-duration">Jan 2024 – Dec 2026</span>
          </div>
          <div className="research-block">
            <span className="research-tag">Research</span>
            <p>Explainable Design Pattern Recommendation via Classification and Explanation Generation</p>
          </div>
        </div>

        <div className="education-item">
          <div className="institution-badge">🎓 University of Moratuwa</div>
          <h3>Bachelor of Science (Hons.) in Information Technology</h3>
          <div className="edu-meta">
            <span className="edu-class second-upper">Second Class Upper · CGPA 3.61</span>
            <span className="edu-duration">Sept 2017 – Mar 2022</span>
          </div>
        </div>

        <div className="education-item">
          <div className="institution-badge">🏫 Visakha Vidyalaya, Colombo 05</div>
          <h3>GCE Advanced Level</h3>
          <div className="edu-meta">
            <span className="edu-duration">2002 – 2016</span>
          </div>
          <div className="subject-tags">
            <span className="subject-tag">Combined Mathematics</span>
            <span className="subject-tag">Physics</span>
          </div>
        </div>
      </div>

      <h2 className="education-title certs-title">Certifications</h2>

      <div className="education-timeline">
        <div className="education-item cert-item">
          <div className="institution-badge">🏆 Amazon Web Services</div>
          <h3>
            <a href="https://www.credly.com/badges/7985003a-d4aa-4a5d-a347-5d511bb4662f/linked_in_profile" 
               target="_blank" 
               rel="noreferrer">
              AWS Certified Solutions Architect – Associate
            </a>
          </h3>
          <div className="edu-meta">
            <span className="edu-duration">SAA-C03</span>
          </div>
        </div>

        <div className="education-item cert-item">
          <div className="institution-badge">🎖️ CIMA</div>
          <h3>Diploma in Management Accounting</h3>
          <div className="edu-meta">
            <span className="edu-duration">Chartered Institute of Management Accountants</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
