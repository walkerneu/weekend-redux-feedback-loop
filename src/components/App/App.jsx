import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import FeelingsInput from '../FeelingsInput/FeelingsInput';
import UnderstandingInput from '../UnderstandingInput/UnderstandingInput';
import SupportInput from '../SupportInput/SupportInput';
import CommentsInput from '../CommentsInput/CommentsInput';
import SubmitPage from '../SubmitPage/SubmitPage';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route exact path='/'>
          <FeelingsInput />
        </Route>
        <Route exact path='/understanding'>
          <UnderstandingInput />
        </Route>
        <Route exact path='/support'>
          <SupportInput />
        </Route>
        <Route exact path='/comments'>
          <CommentsInput />
        </Route>
        <Route exact path='/submit'>
          <SubmitPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
