import React from 'react';
import './AdminProfile.css';

class AdminProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordBoxText: 'Change Password',
      isChanging: false,
    };
  }

  onClickHandler2 = () => {
    alert('Change Profile Logic!');
  }

  onClickHandler1 = () => {
    alert('Change Password Logic!');
  }

  onClickHandler = () => {
    if (!this.state.isChanging) {
      this.setState({
        passwordBoxText: 'Close x',
        isChanging: true,
      });
    } else {
      this.setState({
        passwordBoxText: 'Change Password',
        isChanging: false,
      });
    }
  }

  render() {
    return (
      <div>
        <div className="AdminProfile-head">
              Your Profile
        </div>

        <div className="AdminProfile-outer">
          <div className="AdminProfile-thumb">
            AV
          </div>
          <div className="AdminProfile-details">
            <div className="APDetails-edit"><button className="APDetails-btn" onClick={() => { this.onClickHandler2(); }}>Edit Profile</button></div>
            <div className="APDetails-name">*First Name* *Last Name*</div>
            <div className="APDetails-phone">*Phone Number*</div>
            <div className="APDetails-email">*Email*</div>
            <div className="APDetails-pswd">
              <button className="APDetails-btn" onClick={() => { this.onClickHandler(); }}>{this.state.passwordBoxText}</button>
            </div>
            <div className={this.state.isChanging ? 'APDetails-boxShow' : 'APDetails-boxNoShow'}>
              <div className="APDetails-labelContent"><label className="APDetails-label">Old Password </label><input type="password" className="APDetails-input" /></div>
              <div className="APDetails-labelContent"><label className="APDetails-label">New Password </label><input type="password" className="APDetails-input" /></div>
              <div className="APDetails-labelContent"><label className="APDetails-label">Confirm Password </label><input type="password" className="APDetails-input" /></div>
              <div className="APDetails-changeBtn"><button onClick={() => { this.onClickHandler1(); }}>Change Password</button></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminProfile;
