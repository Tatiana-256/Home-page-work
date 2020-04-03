import React from 'react';
import './App.css';
import MessageBox from "./MessageBox.component";
import Navigation from "./components/navigation/navigation.component";
import {Route} from "react-router-dom";
import AdditionalPage from "./components/additional/additional.component";


function App() {
    return (
        <div className="App">
            <Navigation/>
            <Route exact path="/monday" component={MessageBox}/>
            <Route exact path="/tuesday" component={AdditionalPage}/>


        </div>
    );
}

export default App;
