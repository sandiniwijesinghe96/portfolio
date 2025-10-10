import "../styles.css";

const onClickResume = () => {
    window.open(process.env.PUBLIC_URL + '/ResumeSandini.pdf', '_blank');
}

const onClickLinkedIn = () => {
    window.open('http://www.linkedin.com/in/sandini-wijesinghe96', '_blank');
}

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-badge">
            <span className="badge-icon">✨</span>
            <span className="badge-text">Available for opportunities</span>
          </div>
          
          <div className="hero-greeting">
            <span className="greeting-text">hello world!</span>
          </div>
          
          <h1 className="hero-banner-h1">
            Sandini Wijesinghe
            <span className="cursor-blink">|</span>
          </h1>
          
          <div className="hero-subtitle">
            <span className="subtitle-main">Aspiring Developer</span>
            <span className="subtitle-accent">• Continuous Learner • Creative Thinker</span>
          </div>
          
          <p className="hero-description">
            I believe there’s no such thing as the ‘best’ software engineer - only those who keep learning. With curiosity, creativity, and persistence, I strive to grow daily and turn challenges into opportunities. 🎵✨
          </p>
          
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
        
        <div className="hero-right">
          <div className="profile-card">
            <div className="card-header">
              <div className="status-dot"></div>
              <span className="status-text">Currently Growing</span>
            </div>
            
            <div className="profile-avatar">
              <div className="avatar-placeholder">
                <span className="avatar-initial">S</span>
                <div className="avatar-ring"></div>
              </div>
            </div>
            
            <div className="profile-info">
              <h3 className="profile-name">Sandini</h3>
              <p className="profile-role">Software Engineer</p>
              <div className="profile-location">
                <span className="location-icon">📍</span>
                <span>Sri Lanka</span>
              </div>
            </div>
            
            <div className="profile-stats">
              <div className="stat">
                <span className="stat-icon">∞</span>
                <span className="stat-text">Learning Journey</span>
              </div>
              <div className="stat">
                <span className="stat-icon">♪</span>
                <span className="stat-text">Music & Code</span>
              </div>
              <div className="stat">
                <span className="stat-icon">🌱</span>
                <span className="stat-text">Growing Daily</span>
              </div>
            </div>
            
            <div className="card-footer">
              <div className="tech-tags">
                <span className="tech-tag">React</span>
                <span className="tech-tag">NextJS</span>
                <span className="tech-tag">Java</span>
                <span className="tech-tag">SQL</span>
              </div>
            </div>
          </div>
          
          <div className="floating-elements">
            <div className="float-item float-1">💻</div>
            <div className="float-item float-2">🎨</div>
            <div className="float-item float-3">☕</div>
            <div className="float-item float-4">🚀</div>
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
