import React, { Component } from 'react';
import './App.css';
import Practice from './practice';
import {Practice2} from './practice';

const App = () => {
    return (
      <div className = "app-main">
            <Practice heading="Person 1 Data" />
            <Practice2 heading="Person 2 Data" />
      </div>
    );
}

export default App;
