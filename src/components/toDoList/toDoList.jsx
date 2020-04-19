import React from 'react';
import './ToDoList.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import {restoreState, saveState} from "./localStorage";

class ToDoList extends React.Component {
    constructor(props) {
        super(props);

    }

    state = {
        tasks: [],
        filterValue: "All",
        priority: 'low'

    }

    nextTaskId = 0

    componentDidMount() {
        let newState = restoreState('our-state', this.state)
        this.setState(newState, () => {
            this.state.tasks.forEach(task => {
                if (task.id >= this.nextTaskId) {
                    this.nextTaskId = task.id + 1
                }
            })
        })
    }

    onAddTaskClick = (newText) => {
        let newTask = {
            id: this.nextTaskId,
            title: newText,
            isDone: false,
            priority: 'low'
        }
        this.nextTaskId++
        let newTasks = [...this.state.tasks, newTask]
        this.setState({tasks: newTasks}, () => {
            saveState('our-state', this.state)
        })

    }

    changeFilter = (newFilterValue) => {
        this.setState({filterValue: newFilterValue}, () => {
            saveState('our-state', this.state)
        })
    }

    changeStatus = (taskId, isDone) => {
        this.changeTask(taskId, {isDone: isDone})
    }

    changeTitle = (taskId, title) => {
        this.changeTask(taskId, {title: title})
    }

    changeTask = (taskId, obj) => {
        let newTasks = this.state.tasks.map(t => {
                if (t.id != taskId) {
                    return t
                } else {
                    return {...t, ...obj}
                }
            }
        )
        this.setState({tasks: newTasks}, () => {
            saveState('our-state', this.state)
        })
    }


    deleteTask = (task) => {
        let updateTask = this.state.tasks.filter(t => t.id !== task.id)
        this.setState({tasks: updateTask}, () => {
            saveState('our-state', this.state)
        })
    }


    render = () => {

        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader onAddTaskClick={this.onAddTaskClick}/>
                    <TodoListTasks
                        priority ={this.priority}
                        deleteTask={this.deleteTask}
                        changeTitle={this.changeTitle}
                        changeStatus={this.changeStatus}
                        tasks={this.state.tasks.filter(t => {
                            if (this.state.filterValue === 'All') {
                                return true
                            }
                            if (this.state.filterValue === 'Completed') {
                                return t.isDone === true
                            }
                            if (this.state.filterValue === 'Active') {
                                return t.isDone === false
                            }
                        })}/>
                    <TodoListFooter isHidden={this.state.isHidden} filterValue={this.state.filterValue}
                                    changeFilter={this.changeFilter}/>
                </div>
            </div>
        );
    }
}

export default ToDoList;

