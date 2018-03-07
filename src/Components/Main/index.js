import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import './Main.css';
import TableContainer from '../TableContainer';

function Main(props) {
  return (

    <div className="w3-main Main" >
      <TableContainer changePage={props.changePage} />
    </div>
  );
}

export default Main;
