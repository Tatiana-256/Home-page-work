import React from 'react';
import './ToDoList.css';

class TodoListTask extends React.Component {

    state = {
        editMode: false,
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

    onChangePriority = (event) => {
        this.props.onChangePriorityOfTask(this.props.task.id, event.target.value)
    }

     classSelect = () => {
        if (this.props.task.priority === "low") {
            return 'low'
        } else if (this.props.task.priority === "average") {
            return 'average'
        } else if (this.props.task.priority === "high") {
            return 'high'
        }
    }

    render() {

        return (
            <div className="">
                <div className="todoList-tasks">
                    <div className="todoList-task">
                        <div className='delete'>
                            <div> Delete task</div>
                            <div>
                                <button onClick={this.onDeleteTask}>x</button>
                            </div>
                        </div>
                        <div className="list">
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
                            <div className="inner">
                                <div>Created: {this.props.task.created}</div>
                                {this.props.task.updated ? <div>Updated: {this.props.task.updated}</div> : ""}
                                {this.props.task.finished ? <div>Finished: {this.props.task.finished}</div> : ''}
                                <div>Task: {this.props.task.isDone === true ? " Done" : ' In progress'}</div>
                            </div>
                        </div>
                        <div className='prior'>
                            <select
                                className={this.classSelect()}
                                value={this.props.task.priority}
                                onChange={this.onChangePriority}>
                                <option>Select priority:</option>
                                <option value="low" className='low'>low</option>
                                <option value="average" className='average'>average</option>
                                <option value="high" className='high'>high
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>)
    }
}

export default TodoListTask