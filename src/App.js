import React from 'react';
import './Css/App.css';
import Main from './Pages'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
  );
}

export default App;
