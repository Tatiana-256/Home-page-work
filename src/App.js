import React from 'react';
import './App.css';
import MessageBox from "./MessageBox.component";
import Navigation from "./components/navigation/Navigation.component";
import {Route} from "react-router-dom";
import ToDoList from "./components/toDoList/ToDoList";
import styles from './components/toDoList/loader.module.css'
import {connect} from "react-redux";


class App extends React.Component {
    state = {
        loader: false
    }


    timer = () => {
        return setTimeout(() => {
            this.props.changeLoading()
        }, 3000)
    }

    componentDidMount() {
        this.timer()
    }

    render() {
        if (this.props.loading === true) {
            return <div className={styles.position}>
                <div className={styles.loader}/>
            </div>
        } else {
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

const mapStateToProps = (state) => {
    return {
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeLoading: () => {
            const action = {
                type: 'SET_LOADING',
                loading: false
            }
            dispatch(action)
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
