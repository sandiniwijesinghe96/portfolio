import "../styles.css";

const onClickResume = () => {
    window.open('/ResumeSandini.pdf', '_blank');
}

const onClickLinkedIn = () => {
    window.open('http://www.linkedin.com/in/sandini-wijesinghe96', '_blank');
}

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-banner-with-img">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting">
              <span className="greeting-text">Welcome to my world</span>
            </div>
            <h1 className="hero-banner-h1">
              Sandini Wijesinghe
              <span className="cursor-blink">|</span>
            </h1>
            <div className="hero-roles">
              <span className="role-text">Aspiring Developer</span>
              <span className="role-separator">•</span>
              <span className="role-text">Continuous Learner</span>
              <span className="role-separator">•</span>
              <span className="role-text">Creative Thinker</span>
            </div>
            <p className="hero-description">
              I may not know everything about tech, but I definitely strive to do better than yesterday. 
              A curious software engineer who finds rhythm in code and melody in problem-solving, 
              always learning, always growing. �✨
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">∞</span>
                <span className="stat-label">Learning Journey</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">♪</span>
                <span className="stat-label">Music & Code</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">🌱</span>
                <span className="stat-label">Growing Daily</span>
              </div>
            </div>
          </div>
          <div className="buttons-in-hero">
            <button className="button primary-button" onClick={onClickResume}>
              <span className="button-icon">📄</span>
              View Resume
            </button>
            <button className="button secondary-button" onClick={onClickLinkedIn}>
              <span className="button-icon">💼</span>
              LinkedIn
            </button>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-content">
          <div className="scroll-arrow">↓</div>
          <span className="scroll-text">Explore my story</span>
          <div className="scroll-hint">Journey • Growth • Passion</div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;