import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // Added useLocation
import logo from '../assets/images/logo-white.svg';

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const navigate = useNavigate(); 
  const location = useLocation(); // Get the current route

  const navLinks = [
    { name: 'Calendar', to: '/calendar' },
    { name: 'Booking List', to: '/booking' },
    { name: 'Setting', to: '/settings' },
  ];

  const profileOptions = [
    { name: 'Change Password', action: '/forgetpw', target: 'modal' },
    { name: 'Logout', action: '/' },
  ];

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  const toggleAdminDropdown = () => setIsAdminOpen(!isAdminOpen);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      navigate('/');
    }
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        setIsAdminOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <div className="container head">
          <Link to="/" className="navbar-brand">
            <div className="logoW-wrapper">
              <img src={logo} alt="Rishabh Software" />
              <span>Meal Facility</span>
            </div>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNav}
            aria-controls="navbarSupportedContent"
            aria-expanded={isNavOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navLinks.map((link) => (
                <li key={link.to} className="nav-item">
                  <Link
                    className={`nav-link ${
                      location.pathname === link.to ? 'active' : ''
                    }`}
                    to={link.to}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="h-100 d-lg-inline-flex align-items-center">
              <ul className="app-nav">
                <li className="dropdown">
                  <Link
                    className="app-nav__item notification-num"
                    to="#"
                    data-toggle="dropdown"
                    aria-label="Show notifications"
                  >
                    <i className="icon-bell"></i>
                    <span className="num">5</span>
                  </Link>
                </li>

                <li className="dropdown">
                  <Link
                    className="app-nav__item dropdown-toggle"
                    to="#"
                    onClick={toggleAdminDropdown}
                    aria-label="Open Profile Menu"
                    aria-expanded={isAdminOpen ? 'true' : 'false'}
                  >
                    Admin
                  </Link>
                  <ul
                    className={`dropdown-menu settings-menu dropdown-menu-left ${isAdminOpen ? 'show' : ''}`}
                    aria-labelledby="navbarDropdown"
                  >
                    {profileOptions.map((option, index) => (
                      <li key={index}>
                        {option.name === 'Logout' ? (
                          <Link
                            className="dropdown-item"
                            to="/"
                            onClick={handleLogout}
                          >
                            {option.name}
                          </Link>
                        ) : (
                          <Link
                            className="dropdown-item"
                            to={option.action}
                          >
                            {option.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
