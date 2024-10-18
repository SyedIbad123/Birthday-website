import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BirthdayForm from './Components/BirthdayForm';
import Countdown from './Components/Countdown';
import BirthdayWish from './Components/BirthdayWish';

function App() {
  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<BirthdayForm />} />
        <Route path="/countdown" element={<Countdown />} />
        <Route path="/birthdayWish" element={<BirthdayWish />} />
      </Routes>
    </Router>
  );
}

export default App;
