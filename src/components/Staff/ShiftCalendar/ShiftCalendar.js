import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './ShiftCalendar.css';
import Sidebar from '../Navbar/Navbar'; // Adjust the path to where your Sidebar component is located
import { FaBars } from 'react-icons/fa'; // Import FaBars icon

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'John Doe - Shift',
    start: new Date(2024, 6, 30, 9, 0),
    end: new Date(2024, 6, 30, 17, 0),
  },
  {
    title: 'Jane Smith - Shift',
    start: new Date(2024, 6, 31, 10, 0),
    end: new Date(2024, 6, 31, 18, 0),
  },
  {
    title: 'Mike Johnson - Shift',
    start: new Date(2024, 7, 1, 8, 0),
    end: new Date(2024, 7, 1, 16, 0),
  },
];

const ShiftCalendar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(prevState => !prevState);
  };

  return (
    <div className="shift-calendar-container">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`content ${sidebarOpen ? 'shifted' : ''}`}>
        <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
          <FaBars /> {/* FontAwesome menu icon */}
        </button>
        <h2 className="shift-calendar-heading">Shift Calendar</h2>
        <div className="calendar-wrapper">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: '500px', width: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default ShiftCalendar;
