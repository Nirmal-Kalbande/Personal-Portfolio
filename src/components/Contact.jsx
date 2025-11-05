import React from "react";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Contact Me</h2>
      <p className="contact-subtext">
        Prefer email?{" "}
        <a href="mailto:kalbandenirmal4@gmail.com" className="email-link">
          kalbandenirmal4@gmail.com
        </a>
      </p>

      <div className="contact-container">
        <div className="contact-card">
          <h3>Say Hello 👋</h3>
          <p>Drop a mail or connect with me on LinkedIn to discuss projects or collaborations.</p>
        </div>

        <div className="contact-card">
          <h3>Social Links 🌐</h3>
          <p className="social-links">
            <a
              href="https://github.com/Nirmal-Kalbande"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              GitHub
            </a>
            {" • "}
            <a
              href="https://linkedin.com/in/nirmal-kalbande"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
