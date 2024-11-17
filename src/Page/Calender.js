import React from 'react';
import { Link } from 'react-router-dom';
import btn from '../assets/images/add-btn-2.svg';
import Heading from '../Components/Heading';
import BookingBlock from '../Components/BookingBlock';
import CalendarComponent from '../Components/CalendarComponent';
import moment from "moment"



const getTitleString = (employee, nonEmployee, others) => {
  let string = '';
  if (employee)
    string = string + `Emp: ${employee}, `

  if (nonEmployee)
    string = string + ` Non-Emp: ${nonEmployee}, `

  if (others)
    string = string + ` Others: ${others}`

  return string.trim();
}

const events = [
  {
    title: getTitleString(3, 4, 5),
    start: new Date(2024, 10, 12, 10, 0),
    end: new Date(2024, 10, 12, 12, 0),
  },
  {
    title: getTitleString(24, 0, 2),
    start: new Date(2024, 10, 14, 16),
    end: new Date(2024, 10, 14, 17),
  },
  {
    title: getTitleString(1, 3, 0),
    start: new Date(2024, 10, 17, 13, 0),
    end: new Date(2024, 10, 17, 14, 0),
  },
];

const Calendar = () => {

  let currentDateBookings = [33, 254, 22];

  const bookingData = [
    { title: 'Employees', count: currentDateBookings[0], icon: 'icon-employees', link: '#' },
    { title: 'Non Employees', count: currentDateBookings[1], icon: 'icon-employees', link: '#' },
    { title: 'Buffer', count: currentDateBookings[2], icon: 'icon-buffer', link: '#' },
  ];

  return (
    <div className="container-fluid top-80">
      <div className="calendar-wrapper">
        <div className="container">
          <Heading title="Calendar" classes="main-title" />
          <div className="row">
            <div className="col-lg-9">
              <div className="tile">
                <CalendarComponent eventsList={events} />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="tile">
                <Heading title={moment().format('dddd, D MMM YYYY')} classes="tile-title" />
                <div className="booking-wrapper">
                  <div className="booking-block" style={{ backgroundColor: 'Blue' }}>
                    <h5>
                      <Link to="/registration" style={{ textDecoration: 'none', color: 'white' }}>
                        Add New Registration
                      </Link>
                    </h5>
                    <Link to="/registration" aria-label="Add Registration">
                      <img src={btn} alt="Add" />
                    </Link>
                  </div>

                  {bookingData.map((block, index) => (
                    <BookingBlock
                      key={index}
                      title={block.title}
                      count={block.count}
                      icon={block.icon}
                      link={block.link}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
