import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h1>AG Auto Grade</h1>
        <button>Announcement</button>
        <button>Chat Box</button>
        <button>Schedule Meet</button>
        <button>Create Classroom</button>
        <button>Calendar</button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2>Hello Shaikh, Welcome Back...</h2>
        
        {/* Login Button */}
        <button className="login-btn" onClick={() => navigate("/login")}>
          Login
        </button>

        {/* Card Section */}
        <div className="card-container">
          <div className="card">
            <h3>F. Y BTech (A-Div)</h3>
            <p>Subject: Basics of Programming Language</p>
          </div>
          <div className="card">
            <h3>S. Y BTech (A-Div)</h3>
            <p>Subject: Basic EDA</p>
          </div>
          <div className="card">
            <h3>T. Y BTech (A-Div)</h3>
            <p>Subject: Cloud Computing</p>
          </div>
          <div className="card">
            <h3>BTech (A-Div)</h3>
            <p>Subject: Machine Learning</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
