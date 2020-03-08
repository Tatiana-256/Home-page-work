import React from 'react';
import './App.css';
import Header from "./components/header/head.component";
import Message from "./components/message/message.component";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Header/>
                <Message/>
            </header>
        </div>
    );
}

export default App;
