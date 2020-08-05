import React from 'react';
import './App.css';
import Logo from './components/logo/Logo';
import Title from './components/title/Title';
import Greeting from './components/greeting/Greeting';


function App() {
    return (
        <div className="App">
            <header className="App-header">
                {Logo}
                <Title/>
                <Greeting name={'React'}/>
            </header>
        </div>
    );
}

export default App;
