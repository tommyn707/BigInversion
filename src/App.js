import React from 'react';
import logo from './logo.svg';
import './App.css';
import SomeClassComponent from './components/Personcard'

function App() {
  return (
    <div className="App">
         <SomeClassComponent firstName="Bill" lastName="Justice" Age="45" hair="Brown" />
        <SomeClassComponent firstName="Smith" lastName="John" Age="88" hair="Brown" />
        <SomeClassComponent firstName="Fillmore" lastName="Millard" Age="50" hair="Brown" />
        <SomeClassComponent firstName="Smith" lastName="Maria" Age="62" hair="Brown" />

      
    </div>
  );
}

export default App;
