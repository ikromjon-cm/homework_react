import Vector from '../public/Vector.png'
import Dashboard from '../public/Dashboard.png'
import Edu from '../public/edu.png'
import Group from '../public/Group.png'
import Dis from '../public/dis.png'
import Calendar from '../public/Icons.png'
import Settings from '../public/settings.png'
import React from 'react'
import Sidebar from './Sidebar/Sidebar'
const data = [
  {
    images:Edu,
    headtitle:'EduWave'
  },
  {
    img:Dashboard,
    title:'Dashboard'
  },
    {
    img:Vector,
    title:'course'
  },
    {
    img:Group,
    title:'task'
  },
    {
    img:Dis,
    title:'discussion'
  },
    {
    img:Calendar,
    title:'calendar'
  },
      {
    img:Settings ,
    title:'settings'
  }





]
export default function App() {
  return (
    <div>
      <Sidebar data={data}/>
    </div>
  )
}
