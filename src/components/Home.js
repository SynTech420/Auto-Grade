import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Css File/HomeStyles.css";

const Home = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
      return;
    }

    // Parse user data
    const userData = JSON.parse(user);
    if (!userData.token) {
      navigate("/login");
    } else {
      // Set the username from user data
      setUsername(userData.username);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

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
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2>Hello {username}, Welcome Back...</h2>

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
