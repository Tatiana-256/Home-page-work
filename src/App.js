import React from 'react';
import './App.css';
import Header from "./components/header/head.component";
import Message from "./components/message/message.component";
import Characteristics from "./components/character/character";
import Increment from "./components/Increment/IncrementComponent";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Header/>
                <Message/>
                <Characteristics/>
                <Increment/>
            </header>
        </div>
    );
}

export default App;
