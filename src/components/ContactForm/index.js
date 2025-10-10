import React, { useState, useRef } from 'react';
import '../ContactForm/styles.css';

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.user_name.trim()) {
      newErrors.user_name = 'Name is required';
    } else if (formData.user_name.trim().length < 2) {
      newErrors.user_name = 'Name must be at least 2 characters';
    }
    
    if (!formData.user_email.trim()) {
      newErrors.user_email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
      newErrors.user_email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 5) {
      newErrors.message = 'Message must be at least 5 characters';
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);

      try {
        // ✅ Send form data to Getform endpoint
        const response = await fetch("https://getform.io/f/arogeeob", {
          method: "POST",
          body: new FormData(form.current),
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          setFormData({
            user_name: '',
            user_email: '',
            subject: '',
            message: ''
          });
          setSubmitted(true);
          setTimeout(() => setSubmitted(false), 5000);
        } else {
          alert("Sorry, something went wrong. Please try again.");
        }
      } catch (error) {
        console.error("Failed to send message:", error);
        alert("Network error. Please check your connection and try again.");
      }

      setIsSubmitting(false);
    } else {
      setErrors(newErrors);
    }
  };

  const resetForm = () => {
    setFormData({
      user_name: '',
      user_email: '',
      subject: '',
      message: ''
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="contact-section">
      <div className="contact-header">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Have a project in mind or just want to say hello? I'd love to hear from you.
        </p>
      </div>
      
      {submitted && (
        <div className="success-message">
          <div className="success-icon">✓</div>
          <p>Thank you! Your message has been sent successfully.</p>
        </div>
      )}
      
      <form 
        ref={form} 
        className="contact-form" 
        onSubmit={handleSubmit}
      >
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="user_name">Name</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              placeholder="Your full name"
              value={formData.user_name}
              onChange={handleChange}
              className={errors.user_name ? 'error' : ''}
              disabled={isSubmitting}
            />
            {errors.user_name && <span className="error-message">{errors.user_name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="user_email">Email</label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              placeholder="your.email@example.com"
              value={formData.user_email}
              onChange={handleChange}
              className={errors.user_email ? 'error' : ''}
              disabled={isSubmitting}
            />
            {errors.user_email && <span className="error-message">{errors.user_email}</span>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="What's this about?"
            value={formData.subject}
            onChange={handleChange}
            className={errors.subject ? 'error' : ''}
            disabled={isSubmitting}
          />
          {errors.subject && <span className="error-message">{errors.subject}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell me about your project or just say hello..."
            rows="6"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? 'error' : ''}
            disabled={isSubmitting}
          ></textarea>
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>

        <div className="form-actions">
          <button 
            type="submit" 
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="spinner"></span>
                Sending...
              </>
            ) : (
              <>
                <span className="send-icon">✉</span>
                Send Message
              </>
            )}
          </button>
          
          <button 
            type="button" 
            onClick={resetForm} 
            className="reset-btn"
            disabled={isSubmitting}
          >
            <span className="reset-icon">↻</span>
            Clear Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
