import React from "react";
import styles from './Increment.module.css';


class Increment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 0}
    }

    increment = () => {
        alert(this.newNameRef.current.value)
        this.newNameRef.current.value = ''
        this.setState({value: this.state.value + 1})
    }

    newNameRef = React.createRef()


mongoDB
    render() {

        return <div className={styles.page}>
            <div className={styles.general}>
                <span>{this.state.value}</span>
                <input ref={this.newNameRef} type="text" placeholder="New name"/>
                <button onClick={(this.increment)}>
                    Increment and add name
                </button>
            </div>
        </div>

    }
}

export default Increment