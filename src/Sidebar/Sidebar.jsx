import React from 'react';
import './Sidebar.css'

const Sidebar = ({data}) => {
  return (
    <div>
      {data.map((item ,index)=>
      <div key={index} className="sidebar">
        <img src={item.images} alt="img" />
        <h1>{item.headtitle}</h1>
      </div>
      )}
    </div>
  );
}

export default Sidebar;
