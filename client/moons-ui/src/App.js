import React from 'react';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <div class='moons-wrapper'>
      <Header />
      <Main />      
      <footer>
        <p>By Ricardo Mendez Vilalpando</p>
      </footer>            
    </div>    
  );
}

export default App;
