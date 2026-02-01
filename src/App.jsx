import Vector from '../public/Vector.png'
import Dashboard from '../public/Dashboard.png'
import Edu from '../public/edu.png'
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
    img:Dashboard,
    title:'course'
  },
    {
    img:Dashboard,
    title:'task'
  },
    {
    img:Dashboard,
    title:'discussion'
  },
    {
    img:Dashboard,
    title:'Dashboard'
  }




]
export default function App() {
  return (
    <div>
      <Sidebar data={data}/>
    </div>
  )
}
