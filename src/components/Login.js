import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Login = () => {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent multiple submissions
    setIsSubmitting(true);

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
      setMessage("Please fill in all details");
      setIsSubmitting(false);
    } else {
      // Placeholder for database integration
      try {
        // Simulate a database call
        const response = await fakeDatabaseCall(username, password);
        if (response.success) {
          setMessage("");
          navigate("/");
        } else {
          setMessage("Invalid username or password");
        }
      } catch (error) {
        setMessage("An error occurred. Please try again.");
      }
      setIsSubmitting(false);
    }
  };

  const fakeDatabaseCall = (username, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (username === "Admin" && password === "Admin@123") {
          resolve({ success: true });
        } else {
          resolve({ success: false });
        }
      }, 1000);
    });
  };

  return (
    <div className="login-wrapper animated fadeIn">
      <div className="login-inner animated bounceIn">
        <form id="loginForm" onSubmit={handleLogin} method="POST">
          <div className="welcome-message">Welcome to Auto Grade</div>
          <h3>Login</h3>
          {message && <div className="warning-message">{message}</div>}
          <div className="form-holder">
            <span className="lnr lnr-user"></span>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
              placeholder="Username"
            />
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
              name="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <button type="submit" disabled={isSubmitting}>
            <span>Login</span>
          </button>
          <p>
            New user? <a href="/register">Click here to register</a>
          </p>
        </form>
      </div>
      <img
        src="image-3.png"
        alt="Teacher Avatar"
        className="login-image animated fadeIn"
      />
    </div>
  );
};

export default Login;
