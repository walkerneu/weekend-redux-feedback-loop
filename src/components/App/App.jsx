import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
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
      <Router>
        <Header />
        <div className='App'>
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
        </div>
      </Router>
  );
}

export default App;
