import React from 'react'


const AddBooking = () => {
  return (
    <div>
      <div className="modal fade" id="changepwdModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Change Password</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                {/* <span aria-hidden="true">&times;</span> */}
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label for="exampleInputPassword1">Old Password<span className="extric">*</span></label>
                  <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">New Password<span className="extric">*</span></label>
                  <input type="password" className="form-control" id="exampleInputPassword1" />

                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Confirm Password<span className="extric">*</span></label>
                  <input type="password" className="form-control" id="exampleInputPassword1" />
                  <div className="error-block">Error display here</div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>


      <div className="modal fade side-modal" id="addBookingModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
        <div className="modal-dialog modal-md" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Book a Meal</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group custom-radio">
                <label>Select Catagory</label>
                <div className="d-flex align-content-center justify-content-start">
                  <div className="radio-block">
                    <input type="radio" id="test1" name="radio-group" checked />
                    <label for="test1" className="mr-0">Employees</label>
                  </div>
                  <div className="radio-block">
                    <input type="radio" id="test2" name="radio-group" checked />
                    <label for="test2" className="mr-0">Non Employees</label>
                  </div>
                  <div className="radio-block">
                    <input type="radio" id="test3" name="radio-group" checked />
                    <label for="test3" className="mr-0">Custom Booking</label>
                  </div>
                </div>

              </div>
              <div className="form-group custom-radio">
                <label>Select Catagory</label>
                <div className="d-flex align-content-center justify-content-start">
                  <div className="radio-block">
                    <input type="radio" id="test4" name="radio-group" checked />
                    <label for="test4" className="mr-0">Lunch</label>
                  </div>
                  <div className="radio-block">
                    <input type="radio" id="test5" name="radio-group" checked />
                    <label for="test5" className="mr-0">Dinner</label>
                  </div>
                </div>

              </div>
              <div className="form-group mb-30">
                <label className="custom-checkbox mb-0"><span className="checkbox__title">Weekend</span>
                  <input className="checkbox__input" type="checkbox" /><span className="checkbox__checkmark"></span>
                </label>
              </div>
              <div className="form-group">
                <label>Select Date (s)</label>
                <div className="input-group date-picker-input">
                  <input type="text" className="form-control border-right-0" placeholder="Select Date" id="demoDate" />
                  <div className="input-group-append bg-transparent">
                    <span className="input-group-text bg-transparent" id="basic-addon2"><i className="icon-calendar"></i></span>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Select Account</label>
                <div className="search-wrapper">
                  <input type="text" className="form-control" placeholder="Search Department.." />
                  <i className="icon-search search-icon"></i>
                </div>
              </div>
              <div className="form-group">
                <label>Notes</label>
                <textarea className="form-control" rows="4" placeholder="Type here.."></textarea>
              </div>
              <div className="form-group">
                <label>Booking Count</label>
                <input type="text" className="form-control" placeholder="100" />
              </div>
              <div className="form-group">
                <label>Select Employees</label>
              </div>
              <div className="table-responsive">
                <table className="table table-hover responsive nowrap table-bordered">
                  <thead>
                    <tr>
                      <th>
                        <div className="form-group mb-0">
                          <label className="custom-checkbox">
                            <input className="checkbox__input" type="checkbox" /><span className="checkbox__checkmark"></span>
                          </label>
                        </div>
                      </th>
                      <th>Employee ID</th>
                      <th>Employee Name</th>
                      <th>Department</th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr>
                      <td>
                        <div className="form-group mb-0">
                          <label className="custom-checkbox m-0">
                            <input className="checkbox__input" type="checkbox" /><span className="checkbox__checkmark"></span>
                          </label>
                        </div>
                      </td>
                      <td>2001</td>
                      <td>Thomas</td>
                      <td>Analytics</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-group mb-0">
                          <label className="custom-checkbox m-0">
                            <input className="checkbox__input" type="checkbox" /><span className="checkbox__checkmark"></span>
                          </label>
                        </div>
                      </td>
                      <td>2001</td>
                      <td>Thomas</td>
                      <td>Analytics</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-group mb-0">
                          <label className="custom-checkbox m-0">
                            <input className="checkbox__input" type="checkbox" /><span className="checkbox__checkmark"></span>
                          </label>
                        </div>
                      </td>
                      <td>2001</td>
                      <td>Thomas</td>
                      <td>Analytics</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-group mb-0">
                          <label className="custom-checkbox m-0">
                            <input className="checkbox__input" type="checkbox" /><span className="checkbox__checkmark"></span>
                          </label>
                        </div>
                      </td>
                      <td>2001</td>
                      <td>Thomas</td>
                      <td>Analytics</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-primary">Cancel</button>
              <button type="button" className="btn btn-primary">Book</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AddBooking
