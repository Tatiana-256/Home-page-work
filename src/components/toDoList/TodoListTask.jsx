import React from 'react';

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

    onTitleChanged =(e)=>{
        this.props.changeTitle(this.props.task.id, e.currentTarget.value)
    }

 onDeleteTask =() =>{
        this.props.deleteTask(this.props.task)
 }

    render() {

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
                </div>
            </div>
        </div>
    }
}

export default TodoListTask