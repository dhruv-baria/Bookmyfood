import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import FormInput from '../Components/FormInput';

const Forgetpw = () => {
  // State for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  // Validate the form
  const validateForm = () => {
    let formErrors = {};

    if (!email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = 'Email is invalid';
    }

    if (!password) {
      formErrors.password = 'Password is required';
    }

    if (password !== confirmPassword) {
      formErrors.confirmPassword = 'Passwords do not match';
    }

    return formErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    Object.keys(validationErrors).length === 0 ?
      console.log({ email, password, confirmPassword }) :
      setErrors(validationErrors); 
  };

  return (
    <div>
      <div className="mt-0">
        <section className="login-content">
          <div className="login-content-lt"></div>
          <div className="login-content-rt">
            <div className="login-box">
              <form className="login-form" onSubmit={handleSubmit}>
                <div className="logo-wrapper">
                  <img src={logo} alt="Rishabh Software" />
                  <span>Meal Facility</span>
                </div>
                <h3 className="login-head">
                  <Link to="/forgetpw">Change Password</Link>
                </h3>
                <p className="login-text">Enter the email below to continue.</p>

                <div className="form-group">
                  <label className="control-label">Email</label>
                  <div className="input-addon">
                    {/* <input
                      className="form-control"
                      type="text"
                      placeholder="Robert@rishabhsoft.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoFocus
                    /> */}
                    <FormInput
                     className="form-control"z
                     type="text"
                     placeholder="Robert@rishabhsoft.com"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     autoFocus
                     />
                    {errors.email && <div className="error-block">{errors.email}</div>}
                    <div className="icon-after icon-green">
                      {/* <i className="icon-check"></i> */}
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label">Password</label>
                  <div className="input-addon">
                    <FormInput
                      id="password-field"
                      className="form-control"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <div className="error-block">{errors.password}</div>}
                    <span toggle="#password-field" className="icon-eye-close field-icon toggle-password"></span>
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label">Confirm Password</label>
                  <div className="input-addon">
                    <FormInput
                      id="password-field"
                      className="form-control"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {errors.confirmPassword && <div className="error-block">{errors.confirmPassword}</div>}
                    <span toggle="#password-field" className="icon-eye-close field-icon toggle-password"></span>
                  </div>
                </div>

                <div className="form-group btn-container">
                  <button className="btn btn-xl btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Forgetpw;
