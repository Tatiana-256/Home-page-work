import React from "react";
import styles from "../textMessage/textMessage.module.css";

class TextMessage extends React.Component {

    state = {
        error: true,
        title: '',
        messages: []
    }

    onAddMessageClick = (newText) => {
        let newMessage = [...this.state.messages, newText]
        this.setState({messages: newMessage})
    }

    onAddClick = () => {
        let message = this.state.title
        this.setState({title: ''})
        if (message === '') {
            this.setState({error: true})
        } else {
            this.setState({error: false})
            this.onAddMessageClick(message)
        }

    }

    onTitleChange = (event) => {
        this.setState({
            error: false,
            title: event.currentTarget.value
        })
    }

    onKeyPress = (e) => {
        if (e.key === "Enter") {
            this.onAddClick()
        }
    }

    render() {
        let today = new Date();
        let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
        let date = `${today.getFullYear()}/${(today.getMonth() + 1)}/${today.getDate()}`;

        return (<div>
            {this.state.messages.map(m => <div key={m}>{m}</div>)}
            <div className={styles.inp}>
                <input className={this.state.error ? styles.error : ''} placeholder='Your message'
                       value={this.state.title}
                       onChange={this.onTitleChange} onKeyPress={this.onKeyPress}/></div>
            <button className={styles.btn} onClick={this.onAddClick}>Add message</button>
            <div className={styles.time}>
                <div>{date}</div>
                <div>{time}</div>
            </div>
        </div>);
    }
}

export default TextMessage