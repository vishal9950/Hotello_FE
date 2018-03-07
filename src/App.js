import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';
import ActionBar from './Components/ActionBar';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarStyle: 'block',
      activeLinkId: 1,
    };
  }

  changeSidebarStyle = (newStyle) => {
    this.setState({
      sidebarStyle: newStyle,
    });
  }

  // changeActiveLink = (linkId) => {
  //   this.setState({
  //     activeLinkId: linkId,
  //   });
  // }

  render() {
    return (
      <div>
        <Header />
        <div style={{ marginTop: '70px' }}>
          <Sidebar sidebarStyle={this.state.sidebarStyle} changeSidebarStyle={this.changeSidebarStyle} />
          <ActionBar changeSidebarStyle={this.changeSidebarStyle} />
          <Main changeActiveLink={this.changeActiveLink} />
        </div>
      </div>
    );
  }
}


export default App;
