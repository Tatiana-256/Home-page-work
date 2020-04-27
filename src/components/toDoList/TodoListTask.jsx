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
        debugger
    }

    render() {
        return <div className="">
            <div className="todoList-tasks">

                <div className="todoList-task">
                    <div className="list">
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
                        <div className="inner">
                            <div>Created: {this.props.task.time}</div>
                            <div>Task: {this.props.task.isDone === true ? " Done" : ' In progress'}</div>
                        </div>

                        <div className='prior'>
                            <select onChange={this.onChangePriority}>
                                <option>Select priority:</option>
                                <option value="low" className='low'>low</option>
                                <option value="average" className='average'>average</option>
                                <option value="high" className='high'>high
                                </option>
                            </select>
                        </div>
                    </div>
                    {/*<button className="low" onClick={() => {*/}
                    {/*    this.props.onChangePriorityOfTask(this.props.task.id, 'low')*/}
                    {/*}}>low*/}
                    {/*</button>*/}
                    {/*<button*/}
                    {/*    className={this.props.priority === 'average' || this.props.priority === 'high' ? 'average' : ''}*/}
                    {/*    onClick={() => {*/}
                    {/*        this.props.onChangePriorityOfTask(this.props.task.id, 'average')*/}
                    {/*    }}>middle*/}
                    {/*</button>*/}
                    {/*<button className={this.props.priority === 'high' ? 'high' : ''} onClick={() => {*/}
                    {/*    this.props.onChangePriorityOfTask(this.props.task.id, 'high')*/}
                    {/*}}>high*/}
                    {/*</button>*/}
                </div>
            </div>
        </div>
    }
}

export default TodoListTask