import React from 'react';
import './Dashboard.css';
import Header from '../Header/Header';
import FloatingActionButton from '../FAB/FloatingActionButton';
import { FiBook, FiAward, FiClock } from 'react-icons/fi';

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <Header />

      <div className="dashboard-content">
        {/* Learning Progress */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon courses">
              <FiBook />
            </div>
            <div className="stat-info">
              <h3>Courses Enrolled</h3>
              <p className="stat-number">12</p>
              <p className="stat-trend">4 in progress</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon achievements">
              <FiAward />
            </div>
            <div className="stat-info">
              <h3>Achievements</h3>
              <p className="stat-number">8</p>
              <p className="stat-trend positive">2 new badges</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon time">
              <FiClock />
            </div>
            <div className="stat-info">
              <h3>Learning Hours</h3>
              <p className="stat-number">45</p>
              <p className="stat-trend positive">+5 this week</p>
            </div>
          </div>
        </div>

        {/* Course Sections */}
        <div className="courses-section">
          <h2>My Courses</h2>
          <div className="course-grid">
            {[
              {
                title: 'Introduction to Programming',
                progress: 75,
                image: './programming.jpg',
                status: 'In Progress'
              },
              {
                title: 'Web Development Basics',
                progress: 45,
                image: './web_dev.jpg',
                status: 'In Progress'
              },
              {
                title: 'Data Structures',
                progress: 20,
                image: './DSA.png',
                status: 'Just Started'
              },
              {
                title: 'Algorithm Design',
                progress: 0,
                image: './algoDesign.jpg',
                status: 'Not Started'
              }
            ].map((course, index) => (
              <div key={index} className="course-card">
                <img src={course.image} alt={course.title} className="course-image" />
                <div className="course-info">
                  <h3>{course.title}</h3>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <div className="course-meta">
                    <span className="progress-text">{course.progress}% Complete</span>
                    <span className={`course-status ${course.status.toLowerCase().replace(' ', '-')}`}>
                      {course.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FloatingActionButton />
    </div>
  );
};

export default Dashboard;