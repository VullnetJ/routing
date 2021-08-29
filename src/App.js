import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';
import About from './About';
function App() {
  return (

    <BrowserRouter>
      <div className="Header" >
        <h1 >Welcome to React Router </h1>
      </div>
      <div className="Menus">
        <div className="link-menu">
          <Link to="/">Home</Link> {''}
          <Link to="/about">About</Link> {' '}
          <Link to="/contact">Contact</Link> {' '}
        </div>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
