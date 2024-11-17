import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import btn from '../assets/images/add-btn-2.svg';
import Heading from '../Components/Heading';
import BookingBlock from '../Components/BookingBlock';
import CalendarComponent from '../Components/CalendarComponent';



const bookingData = [
  { title: 'Employees', count: 200, icon: 'icon-employees', link: '#' },
  { title: 'Non Employees', count: 160, icon: 'icon-employees', link: '#' },
  { title: 'Buffer', count: 180, icon: 'icon-buffer', link: '#' },
];

const Calendar = () => {


  return (
    <div className="container-fluid top-80">
      <div className="calendar-wrapper">
        <div className="container">
          <Heading title="Calendar" classes="main-title" />
          <div className="row">
            <div className="col-lg-9">
              <div className="tile">
                <CalendarComponent/>     
              </div>
            </div>
            <div className="col-lg-3">
              <div className="tile">
                <Heading title="Saturday, 19 Dec 2022" classes="tile-title" />
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
