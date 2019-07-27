import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingComponent from './components/LandingComponent';
import { Provider } from 'react-redux'
import rawStore from './redux/stores';

const store = rawStore();

const App: React.FC = () => {
  return (
    <Provider store={store} >
      <Router>
        <Route path="/" component={LandingComponent} />
      </Router>
    </Provider>
    
  );
}

export default App;
