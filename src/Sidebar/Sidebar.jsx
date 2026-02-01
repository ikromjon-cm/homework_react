import React from 'react';
import './Sidebar.css'

const Sidebar = ({data}) => {
  return (
    <div>
      {data.map((item ,index)=>
      <div key={index} className="sidebar">
        <div className="sidebar_header">
        <img src={item.images} alt="img" />
        <h1>{item.headtitle}</h1>
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent:'flex-start'}} className="menu">
          <img src={item.img} alt="images" />
          <p>{item.title}</p>
        </div>
      </div>
      
      )}
    </div>
  );
}

export default Sidebar;
