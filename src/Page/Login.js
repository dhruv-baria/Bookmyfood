import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastStyle } from '../constants/generalConsts';
import FormInput from '../Components/FormInput';
import Checkbox from '../Components/CheckBox';
import Button from '../Components/Button';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false,
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = ({ target: { name, value, type, checked } }) => {
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateForm = () => {
    const formErrors = {};
    let isValid = true;

    if (!formData.username.trim()) {
      formErrors.username = 'Username is required';
      isValid = false;
      toast.error('Please Enter Correct Details', toastStyle);
    }

    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!strongPasswordRegex.test(formData.password)) {
      formErrors.password =
        'Password must be at least 8 characters, with at least one uppercase, one lowercase, one digit, and one special character';
      toast.error('Password must be at least 8 characters', toastStyle);
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success('Login successful', toastStyle);

      setTimeout(() => navigate('/calendar'), 1500);
    }
  };

  return (
    <>
      <section className="login-content">
        <div className="login-content-lt" />
        <div className="login-content-rt">
          <div className="login-box">
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="logo-wrapper">
                <img src={logo} alt="Rishabh Software" />
                <span>Meal Facility</span>
              </div>
              <h3 className="login-head">Sign in to your account</h3>
              <p className="login-text">Enter your credentials to access your account.</p>

              <FormInput
                label="User Name"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                error={errors.username}
                placeholder="Robert Smith"
                autoFocus
              />

              <FormInput
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                error={errors.password} 
                placeholder="Enter password"
              />

              {/* Remember Me Checkbox and Forgot Password */}
              <div className="d-flex align-items-center justify-content-between">
                <div className="form-group mb-0">
                  <Checkbox
                    label="Remember Me"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group mb-0">
                  <div className="utility">
                    <p>
                      <Link to="/forgetpw" className="form-link">
                        Forgot Password?
                      </Link>
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="form-group btn-container">
                <Button type="submit" className="btn btn-xl btn-primary" buttonName="Sign in" />
              </div>
            </form>
          </div>
        </div>
      </section>

      <ToastContainer />
    </>
  );
};

export default Login;
