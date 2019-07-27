import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingComponent from './components/LandingComponent';

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" component={LandingComponent} />
    </Router>
  );
}

export default App;
