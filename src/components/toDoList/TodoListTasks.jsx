import React from 'react';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {

    render() {
        console.log(this.props.priority)
        let taskElements = this.props.tasks.map(task => {
            return <TodoListTask
                onChangePriorityOfTaskLow={this.props.onChangePriorityOfTaskLow}
                onChangePriorityOfTaskAverage={this.props.onChangePriorityOfTaskAverage}
                onChangePriorityOfTaskHigh={this.props.onChangePriorityOfTaskHigh}
                priority={this.props.priority}
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