import React, { useEffect } from 'react';
import { Calendar } from '@fullcalendar/core'; // Import the Calendar object from FullCalendar
import dayGridPlugin from '@fullcalendar/daygrid'; // Import the dayGrid plugin
import timeGridPlugin from '@fullcalendar/timegrid'; // Import the timeGrid plugin
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid'; // Import the resourceTimeGrid plugin
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const CalendarComponent = () => {
    useEffect(() => {
        const calendarEl = document.getElementById('calendar');

        const resources = [
            { id: 'a', title: 'Doctor A' },
            { id: 'b', title: 'Doctor B' },
            { id: 'c', title: 'Doctor C' },
        ];

        const events = [
            {
                id: 'a',
                title: 'Mr. Vaibhav Yadav',
                start: '2024-01-23T12:34:56',
                end: '2024-01-23T01:34:56',
                resourceId: 'a',
            },
            {
                id: 'b',
                title: 'Mr. Ajay',
                start: '2024-01-23T1:30:00',
                end: '2024-01-23T02:00:00',
                resourceId: 'b',
            },
            {
                id: 'c',
                title: 'Mr. Ramraj',
                start: '2024-01-23T03:40:00',
                end: '2024-01-23T05:30:56',
                resourceId: 'c',
            },
        ];

        const calendar = new Calendar(calendarEl, {
            plugins: [dayGridPlugin, timeGridPlugin, resourceTimeGridPlugin], // Include required plugins
            initialView: 'resourceTimeGridDay', // Use 'resourceTimeGridDay' for resource views
            resources: resources,
            events: events,
            editable: true,
            eventOverlap: false,
        });

        calendar.render();

        // Cleanup on component unmount
        return () => {
            calendar.destroy();
        };
    }, []);

    return <div id="calendar"></div>;
};

export default CalendarComponent;
