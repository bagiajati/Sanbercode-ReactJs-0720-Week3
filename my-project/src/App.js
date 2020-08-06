import React from 'react';
import './App.css';
import Timer from './tugas12/Timer'
import Tugas13 from './tugas13/Tugas13'

function App() {
  return (
    <div>
      {/* < DataBuah /> */}
      < Tugas13 />
      < Timer start={100}/>
    </div>
  );
}

export default App;