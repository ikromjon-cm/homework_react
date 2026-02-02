import "./Sidebar.css";
import Logo from '../assets/Vector.png'
import Picture from '../assets/Comunity.png'


const Sidebar = ({ data, second, tasks,  }) => {
  return (
    <div className="wrapper">
      <div className='container'>
        <div className="contain">
          <div className="header">
            <img src={Logo} alt="images" />
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
          <img src={Picture} alt="image" />
          <h3>Exclusive Community</h3>
          <p>Join to Premium for more functionality</p>
          <button>Join Now</button>
        </div>
      </div>

      <div className="containig">
        <header>
          <span><a className='logo' href="/">Dashboard</a></span>
          <nav>
            <ul className='navigator'>
              <li><a className='nav_links' href="#">home</a></li>
              <li><a className='nav_links' href="#">contact</a></li>
              <li><a className='nav_links' href="#">contact us</a></li>
              <li><a className='nav_links' href="#">services</a></li>
              <li><a className='nav_links' href="#">blog</a></li>
            </ul>
          </nav>
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

        <div className="tasks-wrap">
          <div className="tasks-container">
            <h2 style={{ marginBottom: '24px' }}>Tasks From The Teacher</h2>
            {tasks.map((task) => (
              <div
                key={task.id}
                className={`task-card ${task.active ? 'active' : 'light'}`}
              >
                <div className="task-info">
                  <h4>{task.title}</h4>
                  <small>🕒 {task.date}</small>
                </div>
                <div className="arrow-icon">›</div>
              </div>
            ))}
          </div>

          <div className="tasks-container">
            <h2 style={{ marginBottom: '24px' }}>Tasks From The Teacher</h2>
            {tasks.map((task) => (
              <div
                key={task.id}
                className={`task-card ${task.active ? 'active' : 'light'}`}
              >
                <div className="info">
                  <h4>{task.title}</h4>
                  <small>🕒 {task.date}</small>
                </div>
                <div className="arrow-icon">›</div>
              </div>
            ))}
          </div>
        </div> 
      </div>
    </div>
  );
};

export default Sidebar;