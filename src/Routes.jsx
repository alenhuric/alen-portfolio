// Routes.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/react/ReactProjects" component={ProjectsPortfolio} />
        <Route path="/react/SymfonyProjects" component={ProjectsPortfolio} />
        <Route path="/react/LaravelProjects" component={ProjectsPortfolio} />
      </Switch>
    </Router>
  );
};

export default Routes;
