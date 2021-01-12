export type StateType = {
    age: number
    childrenCount: number
    name: string
}
export type ActionType = {
    type: string
    [key: string]: any
}

export const userReducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case 'INCREMENT-AGE':
            const newState = {...state};
            newState.age = state.age + 1;
            console.log(newState)
            return newState;
        case 'INCREMENT-CHILDREN-COUNT':
            return {...state, childrenCount: state.childrenCount + 1}
            return state;
        case "CHANGE-NAME" :
            return {...state, name: action.newName}
        default:
            throw new Error("I don't quite understand what you want.")
    }
}

