import React from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'; // Import the CSS for styling
const localizer = momentLocalizer(moment);


const CalendarComponent = ({ eventsList = [] }) => {
  // styles the date-tile;
  const dayStyleGetter = (date) => {
    const today = moment().isSame(date, 'day');
    const hasEvent = eventsList.some(event =>
      moment(date).isBetween(event.start, event.end, 'day', '[]')
    );

    return {
      style: {
        color: today ? 'coral' : '#000',
        fontWeight: today ? 'bold' : 'normal',
        // border: hasEvent ? '1px solid green' : ''
        // backgroundColor: hasEvent ? 'green' : 'transparent', // Apply background color for days with events
      },
    };
  };

  return (
    <div>
      <BigCalendar
        localizer={localizer}
        events={eventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        views={['month', 'week', 'day']}
        defaultView="month"
        dayPropGetter={dayStyleGetter}
      />
    </div>
  );
};

export default CalendarComponent;
