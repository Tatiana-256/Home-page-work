import React from 'react';
import './App.css';
import MessageBox from "./MessageBox.component";
import Navigation from "./components/navigation/Navigation.component";
import {Route} from "react-router-dom";
import ToDoList from "./components/toDoList/ToDoList";
import styles from './components/toDoList/loader.module.css'
import {connect} from "react-redux";
import {actions} from "./components/store/actions";
import Wednesday from "./components/Styles/Wednesday_Styles";


class App extends React.Component {
    state = {
        loader: false
    }


    timer = () => {
        return setTimeout(() => {
            this.props.changeLoading()
        }, 0)
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
                    <Route exact path="/wednesday" component={Wednesday}/>

                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeLoading: () => {
            dispatch(actions.changeLoading())
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
