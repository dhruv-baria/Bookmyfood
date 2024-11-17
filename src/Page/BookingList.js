import React, { useState } from 'react';
import Heading from '../Components/Heading';
import ModalComponent from '../Components/ModalComponent';
import { CSVLink } from "react-csv"; // For CSV export
import Moment from 'moment'; // To handle date formatting
import Button from '../Components/Button';
import { Link } from 'react-router-dom';

const BookingList = () => {
  const [activeTab, setActiveTab] = useState('rishabh');
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [searchTerm, setSearchTerm] = useState(''); // State for search input
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  const employeeData = [
    { id: 1, name: 'John Doe', department: 'IT', totalMeals: 3, mealDate: '2024-11-10' },
    { id: 2, name: 'Jane Smith', department: 'HR', totalMeals: 2, mealDate: '2024-11-11' },
    { id: 3, name: 'Samuel Adams', department: 'Finance', totalMeals: 4, mealDate: '2024-11-10' },
    { id: 4, name: 'Emily Johnson', department: 'Marketing', totalMeals: 1, mealDate: '2024-10-12' },
    { id: 5, name: 'Michael Brown', department: 'Finance', totalMeals: 2, mealDate: '2024-10-15' },
    { id: 6, name: 'Sophia Wilson', department: 'Sales', totalMeals: 5, mealDate: '2024-11-05' },
    { id: 7, name: 'David Lee', department: 'IT', totalMeals: 3, mealDate: '2024-09-20' },
    { id: 8, name: 'Olivia Moore', department: 'HR', totalMeals: 4, mealDate: '2024-09-22' },
    // Add more employee data here
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Filter employee data based on search term, selected month, and year
  const filteredData = employeeData.filter((emp) => {
    const mealMonth = Moment(emp.mealDate).month() + 1; // Get the month (1-based)
    const mealYear = Moment(emp.mealDate).year();

    const matchesSearchTerm = searchTerm
      ? emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.department.toLowerCase().includes(searchTerm.toLowerCase())
      : true;

    return matchesSearchTerm &&
           (selectedMonth ? mealMonth === selectedMonth : true) &&
           (selectedYear ? mealYear === selectedYear : true);
  });

  // Pagination: Calculate records to display for the current page
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredData.slice(indexOfFirstRecord, indexOfLastRecord);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="container-fluid top-80">
        <div className="container pt-30 mb-30">
          <div className="container-head">
            <div className="container-left">
              <Heading title="Booking List" classes="container-title" />
            </div>
            <div className="container-right">
              <Button
                buttonName={"Add Booking"}
                aria-label="Add Booking"
                className="btn btn-primary"
                onClick={() => setShowAddModal(true)}
              >
              </Button>
            </div>
          </div>

          <div className="content-tab">
            <Link
              to="#"
              className={`content-tab_link ${activeTab === 'rishabh' ? 'active' : ''}`}
              onClick={() => handleTabClick('rishabh')}
            >
              Rishabh Employees
            </Link>
            <Link
              to="#"
              className={`content-tab_link ${activeTab === 'others' ? 'active' : ''}`}
              onClick={() => handleTabClick('others')}
            >
              Others
            </Link>
          </div>

          <div className="filter-and-search-container">
  {/* Search Bar */}
  <input
    type="text"
    placeholder="Search by name or department"
    className="search-input"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />

  {/* Month/Year Filters */}
  <select
    onChange={(e) => setSelectedMonth(Number(e.target.value))}
    value={selectedMonth || ''}
    className="filter-select"
  >
    <option value="">Select Month</option>
    {Array.from({ length: 12 }, (_, i) => (
      <option key={i} value={i + 1}>{Moment().month(i).format('MMMM')}</option>
    ))}
  </select>

  <select
    onChange={(e) => setSelectedYear(Number(e.target.value))}
    value={selectedYear || ''}
    className="filter-select"
  >
    <option value="">Select Year</option>
    {Array.from({ length: 5 }, (_, i) => (
      <option key={i} value={Moment().year() - i}>{Moment().year() - i}</option>
    ))}
  </select>

  {/* Export Data Button */}
{/* Export Data Button */}
<CSVLink
  data={filteredData}
  filename={`employee_booking_data_${selectedMonth || 'all'}_${selectedYear || 'all'}.csv`}
  className={`btn btn-secondary export-btn ${filteredData.length === 0 ? 'disabled' : ''}`}
  onClick={(e) => {
    if (filteredData.length === 0) {
      e.preventDefault();
      alert('No data available to export. Please adjust your filters.');
    }
  }}
>
  Export Data
</CSVLink>

</div>


          {/* Table Container */}
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>Employee Name</th>
                  <th>Department</th>
                  <th>Total Meals Booked</th>
                  <th>Meal Date</th>
                </tr>
              </thead>
              <tbody>
                {currentRecords.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.department}</td>
                    <td>{employee.totalMeals}</td>
                    <td>{employee.mealDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

{/* Pagination Controls */}
<div className="pagination-container">
  {Array.from({ length: Math.ceil(filteredData.length / recordsPerPage) }, (_, index) => (
    <button
      key={index}
      onClick={() => paginate(index + 1)}
      className={`pagination-btn ${currentPage === index + 1 ? 'active' : ''}`}
    >
      {index + 1}
    </button>
  ))}
</div>


        </div>
      </div>

      {showAddModal && (
        <ModalComponent setShowModal={(val) => setShowAddModal(val)} />
      )}
    </>
  );
};

export default BookingList;

