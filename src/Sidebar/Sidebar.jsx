import React, { useState } from 'react';
import "./Sidebar.css";
import Logo from '../assets/Vector.png';
import Picture from '../assets/Comunity.png';

const Sidebar = ({ data, second, tasks }) => {
  const [Open, setOpen] = useState(true);

  const toggleSidebar = () => {
    setOpen(!Open);
  };

  return (
    <div className={`wrapper ${Open ? 'sidebar-open' : 'sidebar-closed'}`}>
      <div className='container'>
        <div className="contain">
          <div className="header">
            <img src={Logo} alt="logo" />
            <h2>EduWave</h2>
          </div>
          <div className="bottom">
            {data.map((item, index) => (
              <div key={index} className="with">
                <p>{item.icon}</p>
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="underbottom">
          <img src={Picture} alt="premium" />
          <h3>Exclusive Community</h3>
          <p>Join to Premium for more functionality</p>
          <button>Join Now</button>
        </div>
      </div>

      <div className="containig">
        <header style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <button
            onClick={toggleSidebar}
            style={{
              padding: '8px 12px',
              cursor: 'pointer',
              backgroundColor: '#004677',
              color: 'white',
              border: 'none',
              borderRadius: '6px'
            }}
          >
            {Open ? 'Close Sidebar' : 'Open Sidebar'}
          </button>
          <span><a className='logo' href="/">Dashboard</a></span>
        </header>

        <div className="middle">
          <div className="carts">
            {second.map((item, index) => (
              <div key={index} className="cart">
                <img className='imge' src={item.url} alt="img" />
                <h4>{item.title}</h4>
                <p className='subtitue'>{item.subtitle}</p>
                <div className="rightwards">
                  <p className='icons'>{item.icons}</p>
                  <button>{item.button}</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="main-grid">
          <div className="tasks-container">
            <h2 className="section-title">Tasks From The Teacher</h2>
            {tasks.map((task) => (
              <div key={task.id} className={`task-card ${task.active ? 'active' : 'light'}`}>
                <div className="task-info">
                  <h4>{task.title}</h4>
                  <small>🕒 {task.date}</small>
                </div>
                <div className="arrow-icon">›</div>
              </div>
            ))}
          </div>

          <div className="scores-container">
            <h2 className="section-title">Student Test Scores</h2>
            <div className="score-user">
              <div className="user-avatar">👤</div>
              <div>
                <h4>Drew Newton</h4>
                <small>Class 12</small>
              </div>
            </div>

            <div className="score-item active-blue">
              <span>🎨 Art and Design</span>
              <strong>85</strong>
            </div>
            <div className="score-item">
              <span>📖 English Lessons</span>
              <strong>79</strong>
            </div>
            <div className="score-item">
              <span>📐 Basic Mathematic</span>
              <strong>75</strong>
            </div>
          </div>
        </div>

        <div className="exam-section">
          <h2>Exam Schedule</h2>
          <div className="schedule-box">
            <div className="schedule-header">
              <span>Date and time</span>
              <span>Start Time</span>
              <span>Subjects</span>
              <span>Exam Room</span>
            </div>
            <div className="schedule-row">
              <span>Mon, April 29 2024</span>
              <span>8.00</span>
              <span>Plant Research</span>
              <span>Science Laboratory</span>
            </div>
            <div className="schedule-row">
              <span>Tue, April 30 2024</span>
              <span>9.00</span>
              <span>English</span>
              <span>Classroom</span>
            </div>
            <div className="schedule-row">
              <span>Wed, May 1 2024</span>
              <span>8.00</span>
              <span>Mathematics</span>
              <span>Classroom</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;