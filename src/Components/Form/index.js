import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { modifyUser } from '../../redux/actions';
import './Form.css';
import Field from '../Field';
import Button from '../Button';
import { withRouter } from 'react-router-dom';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      email: this.props.email,
      phoneNumber: this.props.phoneNumber,
      formSubmissionState: false,
    };
  }

  updateFirstName = (value) => {
    this.setState({
      firstName: value,
    });
  }

  updateLastName = (value) => {
    this.setState({
      lastName: value,
    });
  }

  updateEmail = (value) => {
    this.setState({
      email: value,
    });
  }

  updatePhone = (value) => {
    this.setState({
      phoneNumber: value,
    });
  }

  submitForm = (e) => {
    e.preventDefault();
    this.setState({ formSubmissionState: true });
  }

  render() {
    console.log('FirstName is: ', this.state.firstName);
    const { formSubmissionState } = this.state;
    return (
      <div>
        <div className="main-content-agile">
          <h2>Edit user details<i className="fa mail fa-envelope" /></h2>
          <div className="sub-main-w3">
            <form onSubmit={this.submitForm}>
              <div className="field">
                <i className="fa fa-user" />
                <Field name="email" placeholder="Email" type="email" value={this.state.email} update={this.updateEmail} />
              </div>
              <div className="field">
                <i className="fa fa-envelope" />
                <Field name="firstName" placeholder="First Name" type="text" value={this.state.firstName} update={this.updateFirstName} />
              </div>
              <div className="field">
                <i className="fa fa-phone" />
                <Field name="lastName" placeholder="Last Name" type="text" value={this.state.lastName} update={this.updateLastName} />
              </div>
              <div className="field">
                <Field name="phoneNumber" placeholder="Phone Number" type="text" pattern="[0-9]{10}" value={this.state.phoneNumber} update={this.updatePhone} />
              </div>
              <Button
                onClick={() => {
                    fetch('/adminUpdateDetails', {
                      method: 'post',
                      headers: {
                        'Content-Type': 'application/json',
                        Authorization: localStorage.getItem('token'),
                      },
                      body: JSON.stringify({
                        firstName: this.state.firstName,
                        lastName: this.state.lastName,
                        email: this.state.email,
                        phoneNumber: this.state.phoneNumber,
                      }),
                    }).then(resp => resp.json()).then(() => {
                      // console.log(data);
                      const obj = {
                        firstName: this.state.firstName,
                        lastName: this.state.lastName,
                        email: this.state.email,
                        phoneNumber: this.state.phoneNumber,
                      };
                      this.props.modifyUser(obj);
                    });
                  }}
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                email={this.state.email}
                phoneNumber={this.state.phoneNumber}
              />
            </form>
            {formSubmissionState && (
            <Redirect to="/adminMain/users" />
            )}
          </div>
        </div>
      </div>

    );
  }
}


Form.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  modifyUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  console.log('The phone number is: ', state.users.currentUser.phoneNumber);
  return ({
    email: state.users.currentUser.email,
    firstName: state.users.currentUser.firstName,
    lastName: state.users.currentUser.lastName,
    phoneNumber: state.users.currentUser.phoneNumber,
  });
};

const mapDispatchToProps = dispatch => ({
  modifyUser: (obj) => {
    dispatch(modifyUser(obj));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Form));
