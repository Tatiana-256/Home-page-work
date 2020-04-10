import React from "react";
import styles from './Increment.module.css';
import Names from "../Names/names";


class Increment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            name: []
        }
    }

    increment = () => {
        let name = this.newNameRef.current.value
        alert(name)
        this.newNameRef.current.value = ''
        let newName = [...this.state.name, name]
        this.setState({value: this.state.value + 1, name: newName})
    }

    newNameRef = React.createRef()


    render() {

        return <div>
            <div className={styles.page}>
                <div className={styles.general}>
                    <span>{this.state.value}</span>
                    <input className={styles.inp} ref={this.newNameRef} type="text" placeholder="New name"/>
                    <button onClick={(this.increment)} className={styles.btn}>
                        Increment and add name
                    </button>
                </div>
                <div>
                    {this.state.name.map(name => <Names name={name} key={name.index}/>)}
                </div>
            </div>
        </div>
    }
}

export default Increment