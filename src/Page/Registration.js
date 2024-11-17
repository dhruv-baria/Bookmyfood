import React, { useState } from 'react';
import logo from '../assets/images/logo-white.svg';
import FormInput from '../Components/FormInput';
import Checkbox from '../Components/CheckBox';


const Registration = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    rememberMe: false,
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    phone: '',
  });

  // Validate form inputs
  const validate = () => {
    let valid = true;
    let errors = {};

    if (!formData.username) {
      errors.username = 'Username is required';
      valid = false;
    }
    if (!formData.email) {
      errors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
      valid = false;
    }
    if (!formData.phone) {
      errors.phone = 'Phone number is required';
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = 'Phone number is invalid';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log('Form Data:', formData);
      // You can now perform further actions such as sending data to the server
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <div>
      <div className="login-content">
        <div className="login-content-lt"></div>
        <div className="login-content-rt">
          <div className="login-box">
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="logo-wrapper">
                <img src={logo} alt="Rishabh Software" />
                <span>Meal Facility</span>
              </div>
              <h3 className="login-head">Register Your Account</h3>
              <p className="login-text">Enter your details to create an account.</p>

              {/* Username field */}

              <FormInput
                label="User Name"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                error={errors.username}
                placeholder="Robert Smith"
                autoFo cus
              />

              {/* Email field */}

              <FormInput
                label='Email'
                className="form-control"
                type="text"
                name="email"
                placeholder="example@example.com"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />


              {/* Phone Number field */}

              <FormInput
                label='Phone Number'
                className="form-control"
                type="text"
                name="phone"
                placeholder="1234567890"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
              />


              {/* Remember me checkbox */}
              <div className="d-flex align-items-center justify-content-between">
                <div className="form-group mb-0">
                  <Checkbox
                    label="Remember Me"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                </div>
              </div>


              {/* Submit button */}
              <div className="form-group btn-container">
                <button className="btn btn-xl btn-primary" type="submit">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
