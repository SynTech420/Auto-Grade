import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Register = () => {
  const [message, setMessage] = useState("");
  const [warning, setWarning] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{7,15}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const role = document.getElementById("role").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (username && email && role && password && confirmPassword) {
      if (validatePassword(password)) {
        if (password === confirmPassword) {
          // Simulate successful registration
          setMessage("Successfully registered!");
          setWarning("");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } else {
          setWarning("Passwords do not match.");
          setMessage("");
        }
      } else {
        setWarning(
          "Password must be 7-15 characters long, contain at least one capital letter, one special character, and one small letter."
        );
        setMessage("");
      }
    } else {
      setMessage("Please fill in all details.");
      setWarning("");
    }
  };

  return (
    <div className="register-wrapper fade-in">
      <div className="register-inner slide-in">
        <form id="registerForm" onSubmit={handleSubmit}>
          <h3>Register</h3>
          {message && <div className="success-message">{message}</div>}
          {warning && <div className="warning-message">{warning}</div>}
          <div className="form-holder">
            <input
              type="text"
              id="username"
              className="form-control"
              placeholder="Username"
            />
            <span className="lnr lnr-user"></span>
          </div>
          <div className="form-holder">
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Email"
            />
            <span className="lnr lnr-envelope"></span>
          </div>
          <div className="form-holder">
            <select id="role" className="form-control">
              <option value="" disabled selected>
                Select Role
              </option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
            <span className="lnr lnr-chevron-down"></span>
          </div>
          <div className="form-holder">
            <span
              className={`lnr ${passwordVisible ? "lnr-eye" : "lnr-eye-off"}`}
              onClick={togglePasswordVisibility}
            ></span>
            <span className="lnr lnr-lock"></span>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="form-holder">
            <span
              className={`lnr ${confirmPasswordVisible ? "lnr-eye" : "lnr-eye-off"}`}
              onClick={toggleConfirmPasswordVisibility}
            ></span>
            <span className="lnr lnr-lock"></span>
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              id="confirmPassword"
              className="form-control"
              placeholder="Confirm Password"
            />
          </div>
          <button type="submit">
            <span>Register</span>
          </button>
          <p>
            Already have an account? <a href="/login">Click here to login</a>
          </p>
        </form>
      </div>
      <div className="about-us fade-in">
        <img
          src="image-3.png"
          alt="Teacher Avatar"
          className="register-image"
        />
        <div className="about-box slide-in">
          <h3>About Us</h3>
          <p>
            Welcome to <strong>Auto Grade</strong>, your one-stop solution for
            managing and grading academic activities. Our platform is designed
            to streamline the educational process for both students and
            teachers. Join us today and experience the future of education.
          </p>
          <p>
            At <strong>Auto Grade</strong>, we believe in leveraging technology
            to simplify the grading system, improve student engagement, and
            enhance learning experiences. Our platform provides:
          </p>
          <p>
            At <strong>Auto Grade</strong>, we believe in transforming the
            traditional education system with smart automation. Our platform
            simplifies assessments, reduces workload, and provides real-time
            insights to enhance learning outcomes.
          </p>
          <ul>
            <li>
              ⚡ <strong>Automated Grading</strong> – Say goodbye to manual
              corrections with our AI-powered assessment system.
            </li>
            <li>
              📊 <strong>Performance Analytics</strong> – Get insights into
              student progress and class performance.
            </li>
            <li>
              👨‍🏫 <strong>Teacher & Student Collaboration</strong> – Interactive
              tools for seamless communication.
            </li>
            <li>
              🗂️ <strong>Classroom Management</strong> – Easily organize
              assignments, tests, and grading records.
            </li>
            <li>
              🔒 <strong>Secure & Reliable</strong> – Data encryption ensures
              privacy and security for all users.
            </li>
          </ul>
          <p>
            Our goal is to empower educators with automation and enhance student
            learning experiences through intelligent analytics. Whether you're a
            student striving for better results or an educator seeking
            efficiency, Auto Grade is here for you.
            <strong>Let’s redefine education together!</strong>
          </p>
          <p>
            Whether you are a student, educator, or institution, Auto Grade is
            here to transform the way education is managed. Join us in shaping
            the future of smart learning!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
