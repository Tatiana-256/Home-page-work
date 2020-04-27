import React from 'react';
import './App.css';
import MessageBox from "./MessageBox.component";
import Navigation from "./components/navigation/Navigation.component";
import {Route} from "react-router-dom";
import ToDoList from "./components/toDoList/ToDoList";
import styles from './components/toDoList/loader.module.css'


class App extends React.Component {
    state = {
        loader: true
    }


    timer = () => {
        return setTimeout(() => {
            this.setState({loader: false})
        }, 0)
    }

    componentDidMount() {
        this.timer()
    }

    render() {
        if (this.state.loader === true) {
            return <div className={styles.position}>
                <div className={styles.loader}/>
            </div>
        } else if (this.state.loader === false) {
            return (
                <div className="App">
                    <Navigation/>
                    <Route exact path="/monday" component={MessageBox}/>
                    <Route exact path="/tuesday" component={ToDoList}/>
                </div>
            )
        }
    }
}

export default App;
