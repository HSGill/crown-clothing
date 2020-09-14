import React from 'react';
import './App.css';
import Homepage from './pages/homepage.component';
import { Switch, Route } from 'react-router-dom';
import  ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx'
function App() {
  return (
    <div className="App">
    <Header />
    <Switch>
    <Route exact path='/' component={Homepage}></Route>
    <Route exact path='/shop' component={ShopPage}></Route>
    </Switch>
    </div>
  );
}

export default App;
