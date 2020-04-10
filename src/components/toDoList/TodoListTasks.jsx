import React from 'react';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {
    render() {
        let taskElements = this.props.tasks.map(task => {
            return <TodoListTask
                deleteTask={this.props.deleteTask}
                changeTitle ={this.props.changeTitle}
                changeStatus={this.props.changeStatus}
                task={task}
            />
        })
        return (
            <div className="todoList-task">
                {taskElements}
            </div>
        );
    }
}

export default TodoListTasks