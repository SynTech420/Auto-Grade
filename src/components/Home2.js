import React from "react";
import { useNavigate } from "react-router-dom";
import "./Css File/HomeStyles.css";

const Home = () => {
  const navigate = useNavigate();

  const handleStartLearningClick = () => {
    navigate("/register");
  };

  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="header">
        <img src="SYN.png" alt="Auto Grade Logo" className="logo" />
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Courses</a>
          <a href="#">Live Classes</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </nav>
        <button className="login-btn" onClick={() => navigate("/login")}>
          Login / Register
        </button>
      </header>

      <section className="illustration">
        <img
          src="Educational Ilustration.webp"
          alt="Education Illustration"
          className="hero-img"
        />
      </section>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Transforming Education with Auto Grade</h1>
          <p>
            Automate grading, enhance learning, and streamline educational
            management.
          </p>
          <button className="cta-btn" onClick={handleStartLearningClick}>
            Start Learning
          </button>
        </div>
      </section>

      {/* Illustration Section */}

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
      <footer className="footer">
        <p>© 2025 Auto Grade. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
