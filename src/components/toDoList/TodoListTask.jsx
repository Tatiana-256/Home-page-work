import React from 'react';
import './ToDoList.css';
import {restoreState, saveState} from "./localStorage";

class TodoListTask extends React.Component {

    state = {
        editMode: false,
        priority: 'low'
    }

    componentDidMount() {
        let newState = restoreState('priority', this.state)
        this.setState(newState, ()=>{
          return   this.state.priority
        })
    }

    onChangePriorityOfTaskLow = () => {
        this.setState({priority: 'low'}, () => {
                saveState('priority', this.state)
            }
        )
    }

    onChangePriorityOfTaskAverage = () => {
        this.setState({priority: 'average'}, () => {
                saveState('priority', this.state)
            }
        )
    }
    onChangePriorityOfTaskHigh = () => {
        this.setState({priority: 'high'}, () => {
                saveState('priority', this.state)
            }
        )
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }

    deActivateEditMode = () => {
        this.setState({editMode: false})
    }


    onIsDoneChanges = (e) => {
        this.props.changeStatus(this.props.task.id, e.currentTarget.checked)
    }

    onTitleChanged = (e) => {
        this.props.changeTitle(this.props.task.id, e.currentTarget.value)
    }

    onDeleteTask = () => {
        this.props.deleteTask(this.props.task)
    }


    render() {
        console.log(this.props.priority)

        return <div className="">
            <div className="todoList-tasks">

                <div className="todoList-task">
                    <button onClick={this.onDeleteTask}>x</button>
                    <input
                        onChange={this.onIsDoneChanges}
                        type="checkbox" checked={this.props.task.isDone}/>
                    {this.state.editMode ?
                        <input onBlur={this.deActivateEditMode}
                               onChange={this.onTitleChanged}
                               autoFocus={true}
                               value={this.props.task.title}/> :
                        <span onClick={this.activateEditMode}>
                            {this.props.task.id} - {this.props.task.title}
                        </span>}
                    <button className="low" onClick={() => {
                        this.onChangePriorityOfTaskLow()
                    }}>low
                    </button>
                    <button
                        className={this.state.priority === 'average' || this.state.priority === 'high' ? 'average' : ''}
                        onClick={() => {
                            this.onChangePriorityOfTaskAverage()
                        }}>middle
                    </button>
                    <button className={this.state.priority === 'high' ? 'high' : ''} onClick={() => {
                        this.onChangePriorityOfTaskHigh()
                    }}>high
                    </button>
                    <span className='text'>Priority of task</span>

                </div>
            </div>
        </div>
    }
}

export default TodoListTask