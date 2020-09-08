import React from 'react';
import './App.css';
import Homepage from './pages/homepage.component';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Switch>
    <Route exact path='/' component={Homepage}></Route>
    </Switch>
    </div>
  );
}

export default App;
