import React, { useState } from 'react';
import Select from 'react-select'; // Import react-select
import DatePicker from 'react-datepicker'; // Import react-datepicker
import "react-datepicker/dist/react-datepicker.css"; // Import date picker styles
import { addMonths, differenceInCalendarDays } from 'date-fns'; // Import date-fns to manipulate dates
import FormText from './FormText';
import Button from './Button';

const ModalComponent = ({ setShowModal }) => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [mealType, setMealType] = useState('Lunch');
  const [bookingCategory, setBookingCategory] = useState('Employees');
  const [startDate, setStartDate] = useState(null); // Start date for date range
  const [endDate, setEndDate] = useState(null); // End date for date range
  const [bookingCount, setBookingCount] = useState('');
  const [notes, setNotes] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState(''); // New department state
  const [errors, setErrors] = useState({});

  const employees = [
    { id: 2001, name: 'Thomas', department: 'Analytics' },
    { id: 2002, name: 'John', department: 'HR' },
    { id: 2003, name: 'Sarah', department: 'IT' },
    { id: 2004, name: 'Emily', department: 'Marketing' }
  ];

  // Prepare employee options filtered by the selected department
  const employeeOptions = employees
    .filter(employee => !selectedDepartment || employee.department === selectedDepartment)
    .map(employee => ({
      value: employee.id,
      label: `${employee.name} - ${employee.department}`
    }));

  // Validate form fields
  const validateForm = () => {
    let formErrors = {};
    if (!selectedEmployee && bookingCategory === 'Employees') formErrors.employee = "Please select an employee.";
    if (!startDate || !endDate) formErrors.date = "Please select a start and end date.";
    if (!bookingCount || isNaN(bookingCount)) formErrors.count = "Please enter a valid booking count.";
    return formErrors;
  };

  const handleFormSubmit = () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    // Submit form logic here (e.g., API call)
    console.log("Form submitted successfully!", {
      selectedEmployee, bookingCategory, mealType, startDate, endDate, bookingCount, notes, selectedDepartment
    });
    setShowModal(false); // Close modal on successful submission
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Function to calculate the difference in days between start and end date
  const calculateDaysRange = () => {
    if (!startDate || !endDate) return '';
    const daysDifference = differenceInCalendarDays(endDate, startDate);
    return daysDifference >= 0 ? `Total ${daysDifference + 1} days selected` : '';
  };

  return (
    <div className="modal-container top-80">
      <button className="close-btn" onClick={() => handleCloseModal()}>X</button>

      <div className="modal-header">
        <h5 className="modal-title">Book a Meal</h5>
      </div>
      <div className="modal-body">


        {/* Booking Category Radio */}
        <div className="form-group custom-radio">
          <label>Select Category</label>
          <div className="d-flex align-content-center justify-content-start">
            {['Employees', 'Non Employees', 'Custom Booking'].map((category) => (
              <div className="radio-block" key={category}>
                <input
                  type="radio"
                  id={category}
                  name="category-group"
                  value={category}
                  checked={bookingCategory === category}
                  onChange={() => setBookingCategory(category)}
                />
                <label htmlFor={category} className="mr-0">{category}</label>
              </div>
            ))}
          </div>
        </div>



        {/* Department Input (only for Employees category) */}
        {bookingCategory === 'Employees' && (
          <div className="form-group">
            <label>Select Department</label>
            <select
              className="form-control"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              <option value="">All Departments</option>
              <option value="Analytics">Analytics</option>
              <option value="HR">HR</option>
              <option value="IT">IT</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>
        )}

        {/* Meal Type Radio */}
        <div className="form-group custom-radio">
          <label>Select Meal</label>
          <div className="d-flex align-content-center justify-content-start">
            {['Lunch', 'Dinner'].map((meal) => (
              <div className="radio-block" key={meal}>
                <input
                  type="radio"
                  id={meal}
                  name="meal-group"
                  value={meal}
                  checked={mealType === meal}
                  onChange={() => setMealType(meal)}
                />
                <label htmlFor={meal} className="mr-0">{meal}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Select Start and End Date */}
        <div className="form-group ">
          <label>Select Date Range</label>
          <div className="input-group date-picker-input ">
            <DatePicker
              selected={startDate}
              onChange={(dates) => {
                const [start, end] = dates;
                setStartDate(start);
                setEndDate(end);
              }}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              dateFormat="yyyy-MM-dd"
              minDate={new Date()}
              maxDate={addMonths(new Date(), 3)} // Limit to 3 months from current date
              placeholderText="Select Date Range"
              className={`form-control border-right-0 ${errors.date ? 'is-invalid' : ''}`}
            />
            {errors.date && <div className="invalid-feedback">{errors.date}</div>}
          </div>
          {/* Display the number of days selected */}
          {startDate && endDate && <p>{calculateDaysRange()}</p>}
        </div>

        {/* Conditional rendering for "Non Employees" and "Custom Booking" */}
        {bookingCategory === 'Employees' && (
          <div className="form-group">
            <label>Select Employee</label>
            <Select
              options={employeeOptions}
              value={selectedEmployee}
              onChange={(selectedOption) => setSelectedEmployee(selectedOption)}
              className={errors.employee ? 'is-invalid' : ''}
              placeholder="Select Employee"
            />
            {errors.employee && <div className="invalid-feedback">{errors.employee}</div>}
          </div>
        )}

        {/* Common fields for "Non Employees" and "Custom Booking" */}
        {bookingCategory !== 'Employees' && (
          <>
            {/* Booking Count */}

            <FormText
              label="Booking Count"
              type="text"
              className={`form-control ${errors.count ? 'is-invalid' : ''}`}
              placeholder="100"
              value={bookingCount}
              onChange={(e) => setBookingCount(e.target.value)}
            />
            {errors.count && <div className="invalid-feedback">{errors.count}</div>}


            {/* Notes */}

            <FormText
              label={"Notes"}
              className="form-control"
              rows="4"
              placeholder="Type here.."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />

          </>
        )}

        {/* Modal Footer with Buttons */}
        <div className="modal-footer">
          <Button buttonName={"Cancel"} type="button" className="btn btn-outline-primary" onClick={handleCloseModal}/>
          <Button buttonName={"Book"} type="button" className="btn btn-primary" onClick={handleFormSubmit}/>
        </div>
      </div>
    </div >
  );
};

export default ModalComponent;
