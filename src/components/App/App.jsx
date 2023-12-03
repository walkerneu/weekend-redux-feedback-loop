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
import SuccessPage from '../SuccessPage/SuccessPage';
import AdminPage from '../AdminPage/AdminPage';
import Header from '../Header/Header';

function App() {

  return (
    <div className='App'>
      <Router>
        <Header />
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
        <Route exact path='/success'>
          <SuccessPage />
        </Route>
        <Route exact path='/admin'>
          <AdminPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
