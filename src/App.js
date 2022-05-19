import React from 'react'
import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useHistory } from 'react-router';
import Meetupspage from './pages/meetups-page.js'
import AddNewMeetupPage from './pages/add-new-meetup.js'
import ErrorPage from './pages/error-page.js'

function App() {
  return (
    <>
      <header className="header">
        <div className="logo">Meetups</div>
        <nav>
          <ul>
            <li>
              <Link to='/'>All Meetups</Link>
            </li>
            <li>
              <Link to='/add-new-meetup'>Add New Meetup</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route exact path="/" element={<Meetupspage />} />
        <Route exact path="/add-new-meetup" element={<AddNewMeetupPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
