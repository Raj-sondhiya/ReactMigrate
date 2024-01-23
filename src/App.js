import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from './MyNavbar';
import Footer from './Footer';
import Weather from './Internship-App/WeatherApp/Weather';
import News from './Internship-App/NewsApp/News';
import FullCalendar from './Internship-App/FullCalendar/FullCalendar';
import EmpManagement from './Internship-App/EmpManagement/EmpManagement';
const App = () => {
  return (
    <Router>
      <>
        <div>
          <MyNavbar />
        </div>
        <br />
        <div>
          <Routes>
            <Route path="/" element={<Weather />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/News" element={<News />} />
            <Route path="/fullcalendar" element={<FullCalendar />} />
            <Route path="/empmanagement" element={<EmpManagement />} />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </>
    </Router>
  );
};

export default App;