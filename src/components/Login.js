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
    if (isSubmitting) return;
    setIsSubmitting(true);

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
      setMessage("Please fill in all details");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data));
        setMessage("");
        navigate("/");
      } else {
        if (data.message === "User not found") {
          setMessage(
            <div>
              User not found. Please{" "}
              <a href="/register" className="register-link">
                register here
              </a>{" "}
              to create an account.
            </div>
          );
        } else if (data.message === "Invalid password") {
          setMessage("Invalid password. Please try again.");
        } else {
          setMessage(data.message || "Invalid username or password");
        }
      }
    } catch (error) {
      setMessage(
        "Unable to connect to the server. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-wrapper animated fadeIn">
      <div className="sliding-text">
        <span className="line-1">
          <span>A</span>
          <span>u</span>
          <span>t</span>
          <span>o</span>
        </span>
        <span className="line-2">
          <span>G</span>
          <span>r</span>
          <span>a</span>
          <span>d</span>
          <span>e</span>
        </span>
        <span className="line-3">
          <span> </span>
          <span> </span>
          <span>T</span>
          <span>h</span>
          <span>e</span> <span>F</span>
          <span>u</span>
          <span>t</span>
          <span>u</span>
          <span>r</span>
          <span>e</span> <span>o</span>
          <span>f</span> <span>S</span>
          <span>m</span>
          <span>a</span>
          <span>r</span>
          <span>t</span> <span>L</span>
          <span>e</span>
          <span>a</span>
          <span>r</span>
          <span>n</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
        </span>
      </div>
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
            <span>{isSubmitting ? "Logging in..." : "Login"}</span>
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
