import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faChalkboardTeacher,
  faFolderOpen,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import "./Css File/HomeStyles.css";

const Home = () => {
  const navigate = useNavigate();
  const servicesRef = useRef(null);
  const aboutUsRef = useRef(null);
  const footerRef = useRef(null);

  const handleStartLearningClick = () => {
    navigate("/register");
  };

  const handleServicesClick = (e) => {
    e.preventDefault();
    servicesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleAboutUsClick = (e) => {
    e.preventDefault();
    aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="header">
        <img src="SYN.png" alt="Auto Grade Logo" className="logo" />
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Courses</a>
          <a href="#" onClick={handleServicesClick}>
            Our Services
          </a>
          <a href="#" onClick={handleAboutUsClick}>
            About Us
          </a>
          <a href="#" onClick={handleContactClick}>
            Contact
          </a>
        </nav>
        <button className="login-btn" onClick={() => navigate("/login")}>
          Login / Register
        </button>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Transforming Education <br />
              with Auto Grade
            </h1>
            <p>
              Automate grading, enhance learning, and streamline educational
              management.
            </p>
            <button className="cta-btn" onClick={handleStartLearningClick}>
              Start Learning
            </button>
          </div>
          <div className="hero-img">
            <img src="Header Image.png" alt="Education Illustration" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" ref={servicesRef}>
        <div className="features-section">
          <h2 className="section-title">
            🚀 Powerful <span className="highlight">Features to Enhance</span>{" "}
            Learning
          </h2>
          <h1>-- -- -- -- -- --</h1>
          <h2> </h2>
          <p className="section-description">
            Auto Grade simplifies education with AI-powered grading,
          </p>
          <p className="section-description">
            seamless classroom management, and interactive learning tools.
          </p>
          <h2> </h2>
          <p className="section-description">
            Designed for both <strong>Students</strong> and{" "}
            <strong>Teachers</strong>,
          </p>
          <p className="section-description">
            our platform enhances efficiency, improves engagement,
          </p>
          <p className="section-description">
            and provides valuable insights for academic success.
          </p>
        </div>
        <h2> </h2>
        <div className="services-container">
          <div className="service-card">
            <FontAwesomeIcon icon={faBrain} className="service-icon" />
            <h3>AI-Powered Grading</h3>
            <p>
              Automatically evaluates assignments, reducing manual effort and
              increasing accuracy.
            </p>
            <a href="#">Read More →</a>
          </div>
          <div className="service-card">
            <FontAwesomeIcon
              icon={faChalkboardTeacher}
              className="service-icon"
            />
            <h3>Smart Classroom Management</h3>
            <p>
              Manage student progress, attendance, and classroom activities
              effortlessly.
            </p>
            <a href="#">Read More →</a>
          </div>
          <div className="service-card">
            <FontAwesomeIcon icon={faFolderOpen} className="service-icon" />
            <h3>Resource & Assignment Sharing</h3>
            <p>
              Upload and distribute study materials, assignments, and notices
              efficiently.
            </p>
            <a href="#">Read More →</a>
          </div>
          <div className="service-card">
            <FontAwesomeIcon icon={faHeadset} className="service-icon" />
            <h3>24/7 Student Support</h3>
            <p>
              Instant feedback, chat support, and AI-powered assistance
              available anytime.
            </p>
            <a href="#">Read More →</a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us" ref={aboutUsRef}>
        <div className="about-content">
          <h2>
            About <span className="highlight">Auto Grade</span> & Our Mission
          </h2>
          <p>
            Auto Grade is an AI-powered education platform designed to
            streamline{" "}
            <strong>
              grading, classroom management, and student engagement
            </strong>
            . Our goal is to <strong>enhance learning experiences</strong> by
            automating repetitive tasks, allowing educators to focus on what
            matters most—<strong>teaching</strong>.
          </p>

          <div className="about-services">
            <div className="about-service-card">
              <h3>📊 AI-Powered Grading</h3>
              <p>
                Automatically evaluates assignments, reducing manual effort and
                improving accuracy.
              </p>
            </div>
            <div className="about-service-card">
              <h3>📚 Smart Classroom Management</h3>
              <p>
                Track student progress, attendance, and assignments in a
                seamless digital environment.
              </p>
            </div>
            <div className="about-service-card">
              <h3>🔗 Resource & Assignment Sharing</h3>
              <p>
                Upload, distribute, and organize study materials efficiently.
              </p>
            </div>
            <div className="about-service-card">
              <h3>💬 24/7 Student Support</h3>
              <p>
                Instant feedback and AI-powered assistance to ensure continuous
                learning.
              </p>
            </div>
          </div>
        </div>

        <div className="about-image">
          <img
            src="/Untitled design (5).png"
            alt="AI Education Illustration"
            className="about-right-dec"
          />
        </div>
      </section>

      {/* Course Categories */}
      <section className="courses">
        <h2>Explore Our Courses</h2>
        <div className="courses-container">
          <div className="course-card">
            <img src="/images/maths.png" alt="Maths" />
            <h3>Mathematics</h3>
            <p>Master math with interactive lessons and quizzes.</p>
          </div>
          <div className="course-card">
            <img src="/images/science.png" alt="Science" />
            <h3>Science</h3>
            <p>Engaging science content for curious minds.</p>
          </div>
          <div className="course-card">
            <img src="/images/programming.png" alt="Programming" />
            <h3>Programming</h3>
            <p>Learn coding with hands-on projects.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Students Say</h2>
        <div className="testimonial-container">
          <div className="testimonial-card">
            <p>"Auto Grade has made studying so much easier!"</p>
            <h4>- Aditi Sharma</h4>
          </div>
          <div className="testimonial-card">
            <p>"A great platform for interactive learning."</p>
            <h4>- Rohan Deshmukh</h4>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer" ref={footerRef}>
        <div className="footer-container">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=123+Education+St,+Learning+City,+ED+12345"
                target="_blank"
                rel="noopener noreferrer"
              >
                Location: All India Shri Shivaji Memorial Society's Institue of
                Information technology, Pune, 411011.
              </a>
            </p>
            <p>Phone: +91 9322592505</p>
            <p>
              <a href="mailto:info@autograde.com">info@autograde.com</a>
            </p>
            <p>
              <a
                href="whatsapp://send?phone=+919322592505&text=Hi%20I%20want%20help%20for%20AutoGrade"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat with us on WhatsApp
              </a>
            </p>
          </div>
          <div className="footer-section">
            <h3>About Us</h3>
            <p>
              <a href="#">Home</a>
            </p>
            <p>
              <a href="#">Services</a>
            </p>
            <p>
              <a href="#">About</a>
            </p>
            <p>
              <a href="#">Testimonials</a>
            </p>
            <p>
              <a href="#">Pricing</a>
            </p>
          </div>
          <div className="footer-section">
            <h3>Useful Links</h3>
            <p>
              <a href="#">Free Apps</a>
            </p>
            <p>
              <a href="#">App Engine</a>
            </p>
            <p>
              <a href="#">Programming</a>
            </p>
            <p>
              <a href="#">Development</a>
            </p>
            <p>
              <a href="#">App News</a>
            </p>
          </div>
          <div className="footer-section">
            <h3>About Our Company</h3>
            <p>
              Auto Grade is an AI-powered education platform designed to
              streamline grading, classroom management, and student engagement.
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Auto Grade. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
