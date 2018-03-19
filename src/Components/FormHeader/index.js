import React from 'react';
import PropTypes from 'prop-types';
import './FormHeader.css';
import mainLogo from '../../images/group-26.png';

class LoginHeader extends React.Component {
  render() {
    return (
      <div className="form-header">
        <img src={mainLogo} className="logoImage" />
      </div>
    );
  }
}
// LoginHeader.defaultProps = {
// };
LoginHeader.propTypes = {
  text: PropTypes.string.isRequired,
};
export default LoginHeader;
