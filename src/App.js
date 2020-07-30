import React from 'react';
import './App.css';
import Logo from './components/Logo';
import Title from './components/Title';
import Greeting from './components/Greeting';
import CopyRight from './components/CopyRight';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {Logo}
        <Title/>
        <Greeting name={'React'}/>
      </header>
      <footer>
        <CopyRight year={2020}/>
      </footer>
    </div>
  );
}

export default App;
