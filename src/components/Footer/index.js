import React from 'react';
import './styles.css';

const Footer = () => {

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'http://www.linkedin.com/in/sandini-wijesinghe96',
      icon: '💼'
    },
    {
      name: 'Email',
      url: 'mailto:sandini.wijesinghe20@gmail.com',
      icon: '📧'
    },
    {
      name: 'Resume',
      url: '/ResumeSandini.pdf',
      icon: '📄'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (href) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (href.startsWith('mailto:')) {
      window.location.href = href;
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <h3 className="footer-logo">Sandini Wijesinghe</h3>
            <p className="footer-tagline">
              Crafting innovative software solutions with passion and precision.
            </p>
            <div className="footer-location">
              <span className="location-icon">📍</span>
              Colombo, Sri Lanka
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-section-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="footer-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div className="footer-section">
            <h4 className="footer-section-title">Let's Connect</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(social.url);
                  }}
                  title={social.name}
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-section-title">Get In Touch</h4>
            <div className="contact-info">
              <p className="contact-item">
                <span className="contact-icon">✨</span>
                Open to opportunities
              </p>
              <p className="contact-item">
                <span className="contact-icon">🚀</span>
                Available for projects
              </p>
              <p className="contact-item">
                <span className="contact-icon">💡</span>
                Let's build something amazing
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2025 Sandini Wijesinghe. Crafted with ❤️ and lots of ☕ by myself
            </p>
            <div className="footer-bottom-links">
              <span className="footer-status">
                <span className="status-indicator"></span>
                Available for work
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;