import React from 'react';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {

    render() {
        let taskElements = this.props.tasks.map(task => {
            return <TodoListTask
                onChangePriorityOfTask={this.props.onChangePriorityOfTask}
                priority={task.priority}
                key={task.id}
                deleteTask={this.props.deleteTask}
                changeTitle={this.props.changeTitle}
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