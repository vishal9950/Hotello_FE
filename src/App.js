import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';
import MainHeader from './Components/MainHeader';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarStyle: 'block',
    };
  }

  changeStyle = (newStyle) => {
    this.setState({
      sidebarStyle: newStyle,
    });
  }

  render() {
    // <ActionBar changeStyle={this.changeStyle} />
    return (
      <div>
        <Header />
        <div style={{ marginTop: '70px' }}>
          <Sidebar sidebarStyle={this.state.sidebarStyle} changeStyle={this.changeStyle} />
          <MainHeader changeStyle={this.changeStyle} />
          <Main />
        </div>
      </div>
    );
  }
}


export default App;
