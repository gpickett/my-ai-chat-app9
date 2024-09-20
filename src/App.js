import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthComponent from './components/AuthComponent';
import HomeComponent from './components/HomeComponent';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomeComponent} />
          <Route path="/auth" component={AuthComponent} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;