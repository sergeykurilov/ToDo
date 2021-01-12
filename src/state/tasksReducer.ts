import {FilterValuesType, TodolistType, TasksStateType} from "../App";

import {v1} from "uuid";
import {RemoveTodoListsActionType} from "./todoListReducer";

export type  removeTaskACType = {
    type: 'REMOVE-TASK',
    todoListID: string,
    taskId: string
}
export type  addTaskACType = {
    type: "ADD-TASK"
    title: string,
    todoListID: string
}

export type  changeTaskStatusACType = {
    type: "CHANGE-STATUS-TASK"
    todoListID: string,
    isDone: boolean,
    taskId: string
}

export type  changeTaskTitleACType = {
    type: "CHANGE-TITLE-TASK"
    todoListID: string,
    title: string,
    taskId: string
}
export type  AddTodolistACType = {
    type: "ADD-TODOLIST"
    title: string,
    todolistId: string
}
type ActionType =
    removeTaskACType
    | addTaskACType
    | changeTaskStatusACType
    | changeTaskTitleACType
    | AddTodolistACType
    | RemoveTodoListsActionType

export const tasksReducer = (state: TasksStateType, action: ActionType) => {
    switch (action.type) {

        case 'REMOVE-TASK': {
            let copyState = {...state}
            copyState[action.todoListID] = copyState[action.todoListID].filter(task => task.id !== action.taskId)
            return copyState
        }
        case 'ADD-TASK': {
            let copyState = {...state}
            let task = {
                id: v1(),
                isDone: false,
                title: action.title
            }
            copyState[action.todoListID] = [task, ...copyState[action.todoListID]]
            return copyState
        }
        case "CHANGE-STATUS-TASK": {
            return {
                ...state,
                [action.todoListID]: state[action.todoListID].map(task => {
                    if (task.id !== action.taskId) {
                        return task
                    } else {
                        return {...task, isDone: action.isDone}
                    }
                })
            }
        }
        case "CHANGE-TITLE-TASK": {
            return {
                ...state,
                [action.todoListID]: state[action.todoListID].map(task => {
                    if (task.id !== action.taskId) {
                        return task
                    } else {
                        return {...task, title: action.title}
                    }
                })
            }
        }
        case "ADD-TODOLIST": {
            return {...state, [action.todolistId]: []}
        }
        case "REMOVE-TODOLIST":{
            let copyState = {...state}
            delete copyState[action.todoListID]
            return copyState
        }
        default:
            //return state
            throw new Error("I don't understand this type");
    }
}

export const removeTaskAC = (taskId: string, todoListID: string): removeTaskACType => {
    /// запрос на сервак...
    return {
        type: 'REMOVE-TASK',
        todoListID: todoListID,
        taskId: taskId
    }
}

export const addTaskAC = (title: string, todoListID: string): addTaskACType => {
    /// запрос на сервак...
    return {
        type: "ADD-TASK",
        title: title,
        todoListID: todoListID
    }
}

export const changeTaskStatusAC = (taskId: string, isDone: boolean, todoListID: string): changeTaskStatusACType => {
    /// запрос на сервак...
    return {
        type: "CHANGE-STATUS-TASK",
        todoListID: todoListID,
        isDone: isDone,
        taskId: taskId
    }
}

export const changeTaskTitle = (taskId: string, title: string, todoListID: string): changeTaskTitleACType => {
    /// запрос на сервак...
    return {
        type: "CHANGE-TITLE-TASK",
        todoListID: todoListID,
        title: title,
        taskId: taskId
    }
}

export const AddTodolistAC = (title: string): AddTodolistACType => {
    /// запрос на сервак...
    return {
        type: 'ADD-TODOLIST',
        title: title,
        todolistId: v1()
    }
}