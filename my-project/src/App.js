import React from 'react';
import Router from 'react-dom'
import './App.css';
import Timer from './tugas12/Timer'
import Buah from './tugas15/Buah'
import Routes from './tugas15/Routes'

function App() {
  return (
    <>
    <Router>
      < Routes />
    </Router>
    <div>
      < Buah />
      < Timer start={100}/>
    </div>
    </>
  );
}

export default App;