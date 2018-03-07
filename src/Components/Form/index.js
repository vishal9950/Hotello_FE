import React, { Component } from 'react';
import './Form.css';
import Field from '../Field';
import Button from '../Button';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      email: this.props.email,
      phoneNumber: this.props.phoneNumber,
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

  render() {
    console.log('FirstName is: ', this.state.firstName);
    return (
      <div>
        <form className="form">
          <Field name="email" placeholder="Email" type="email" value={this.state.email} update={this.updateEmail} />
          <Field name="firstName" placeholder="Last Name" type="text" value={this.state.firstName} update={this.updateFirstName} />
          <Field name="lastName" placeholder="Last Name" type="text" value={this.state.lastName} update={this.updateLastName} />
          <Field name="phoneNumber" placeholder="Phone Number" type="number" value={this.state.phoneNumber} update={this.updatePhone} />
          <Button
            onClick={(data) => {
              alert(localStorage.getItem('jwt'));
              fetch('/adminUpdateDetails', {
                method: 'post',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: localStorage.getItem('jwt'),
                },
                body: JSON.stringify({
                  firstName: this.state.firstName,
                  lastName: this.state.lastName,
                  email: this.state.email,
                  phoneNumber: this.state.phoneNumber,
                }),
              }).then(resp => resp.json()).then((data) => {
                console.log(data);
              });
            }}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            phoneNumber={this.state.phoneNumber}
          />
        </form>
        <div className="main-content-agile">
          <h2>Edit user details<i className="fa mail fa-envelope" /></h2>
          <div className="sub-main-w3">
            <form action="#" method="post">
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
                <Field name="phoneNumber" placeholder="Phone Number" type="tel" value={this.state.phoneNumber} update={this.updatePhone} />
              </div>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>

    );
  }
}


export default Form;
