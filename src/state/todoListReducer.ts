import {FilterValuesType, TodolistType} from "../App";

import {v1} from "uuid";

export type  RemoveTodoListsActionType = {
    type: "REMOVE-TODOLIST",
    todoListID: string
}
export type  AddTodoListsActionType = {
    type: "ADD-TODOLIST"
    title: string
    todolistId: string
}
export type  ChangeTodoListTitleActionType = {
    type: "CHANGE-TODOLIST-TITLE"
    title: string
    todoListID: string
}
export type  ChangeTodoListFilterActionType = {
    type: "CHANGE-TODOLIST-FILTER"
    filter: FilterValuesType
    title: string
    todoListID: string
}

type ActionType =
    RemoveTodoListsActionType
    | AddTodoListsActionType
    | ChangeTodoListTitleActionType
    | ChangeTodoListFilterActionType;

export const todoListReducer = (state: Array<TodolistType>, action: ActionType): Array<TodolistType> => {
    switch (action.type) {
        case "REMOVE-TODOLIST":
            return state.filter(tl => tl.id !== action.todoListID)
        case "ADD-TODOLIST": {
            const newTodoList: TodolistType = {
                id: action.todolistId,
                title: action.title,
                filter: "all"
            }
            return [...state, newTodoList]
        }
        case "CHANGE-TODOLIST-TITLE": {
            const todolist = state.find(tl => tl.id === action.todoListID);
            if (todolist) {
                // если нашёлся - изменим ему заголовок
                todolist.title = action.title;
                return [...state]
            }
        }
            return state
        case "CHANGE-TODOLIST-FILTER": {
            const todolist = state.find(tl => tl.id === action.todoListID);
            if (todolist) {
                // если нашёлся - изменим ему заголовок
                todolist.filter = action.filter;
                return [...state]
            }
            return state
        }

        default:
            //return state
            throw new Error("I don't understand this type");
    }
}

export const RemoveTodolistAC = (todoListID: string): RemoveTodoListsActionType => {
    /// запрос на сервак...
    return { type: 'REMOVE-TODOLIST',
        todoListID: todoListID
    }
}

export const AddTodoListAC = (title: string): AddTodoListsActionType => {
    /// запрос на сервак...
    return { type: 'ADD-TODOLIST',
        title: title,
        todolistId: v1()
    }
}

export const ChangeTodoListTitleAC = (todoListID: string, title: string): ChangeTodoListTitleActionType => {
    /// запрос на сервак...
    return { type: "CHANGE-TODOLIST-TITLE",
        title: title,
        todoListID: todoListID
    }
}

export const ChangeTodoListFilterAC = (todoListID: string,title: string, filter: FilterValuesType): ChangeTodoListFilterActionType => {
    /// запрос на сервак...
    return { type: "CHANGE-TODOLIST-FILTER",
        filter: filter,
        title: title,
        todoListID: todoListID
    }
}


