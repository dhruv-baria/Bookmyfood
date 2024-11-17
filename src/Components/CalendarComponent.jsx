import React, { useState } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'; // Import the CSS for styling
const localizer = momentLocalizer(moment);

const events = [
    {
      title: 'Meeting',
      start: new Date(2024, 10, 15, 10, 0),
      end: new Date(2024, 10, 15, 12, 0),
    },
    {
      title: 'Conference',
      start: new Date(2024, 10, 16),
      end: new Date(2024, 10, 17),
    },
    {
      title: 'Lunch Break',
      start: new Date(2024, 10, 17, 13, 0),
      end: new Date(2024, 10, 17, 14, 0),
    },
  ];

const CalendarComponent = () => {
    const [calendarEvents, setCalendarEvents] = useState(events);
    const dayStyleGetter = (date) => {
        const today = moment().isSame(date, 'day');
        return {
          style: {
            color: today ? 'coral' : '#000', // Highlight today's date in red
            fontWeight: today ? 'bold' : 'normal',
          },
        };
      };

    return (
        <div>
            <BigCalendar
                localizer={localizer}
                events={calendarEvents}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                views={['month', 'week', 'day']}
                defaultView="month"
                dayPropGetter={dayStyleGetter}
            />
        </div>
    )
}

export default CalendarComponent
