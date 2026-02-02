import React from "react";
import Logo from './assets/Vector.png'
import Sidebar from "./Sidebar/Sidebar";
const data = [
  {
    icon: "📱",
    title: "Dashboard",
  },
  {
    icon: "📔",
    title: "Dashboard",
  },
  {
    icon: "📃",
    title: "Dashboard",
  },
  {
    icon: "👥",
    title: "Discussion",
  },
  {
    icon: "📆",
    title: "Calendar",
  },
  {
    icon: "🎇",
    title: "Settings",
  },
];
const second = [
  {
    url: 'https://media.licdn.com/dms/image/v2/C561BAQG8gU6ynxI6GQ/company-background_10000/company-background_10000/0/1585488097505/cominity_cover?e=2147483647&v=beta&t=BBO-h3IGWkZmiarmzOLvJ7aPezjHEHmeeNs2WlJWcZM',
    title: "Design 3D",
    subtitle: "Art and Design",
    icons: "👥",
    button: ">",
  },
  {
    url: 'https://thumbs.dreamstime.com/b/gran-canaria-port-colorful-buildings-grancnaria-fine-day-30607587.jpg',
    title: "Interactive Sosial",
    subtitle: "Art and Design",
    icons: "👥",
    button: ">",
  },
  {
    url: 'https://images.privateproperty.com.ng/large/property-for-sale-in-benin-city-3bedroom-apartment-attached-with-2units-of-room-and-parlor-self-contain-in-dpc-level-in-a-land-measuring-50100-7pK2kCgoFsb4OrYLXLMT.jpg',
    title: "Calculating Data",
    subtitle: "Art and Design",
    icons: "👥",
    button: ">",
  },
];
const tasks = [
  {
    id: 1,
    title: "Natural science",
    date: "24 April 2024, 12.30",

  },
  {
    id: 2,
    title: "Basic Mathematic",
    date: "24 April 2024, 12.30",

  },
  {
    id: 3,
    title: "English Lessons",
    date: "24 April 2024, 12.30",

  },

];
const two = [{}];

const App = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "start",
      }}
    >
      <Sidebar tasks={tasks} two={two} second={second} data={data} />
    </div>
  );
};

export default App;