import {TodoActionTypes, TodoState} from '../../types/todo';

export const FETCH_TODOS = 'FETCH_TODOS'
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS'
export const FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR'
export const SET_TODO_PAGE = 'SET_TODO_PAGE'

const initialState: TodoState = {
    todos: [],
    page: 1,
    error: null,
    limit: 10,
    loading: false
}

export const todoReducer = (state: TodoState = initialState, action: TodoActionTypes): TodoState => {
    switch (action.type) {
        case FETCH_TODOS:
            return {...state, loading: true}
        case FETCH_TODOS_SUCCESS:
            return {...state, loading: false, todos: action.todo}
        case FETCH_TODOS_ERROR:
            return {...state, loading: false, error: action.error}
        case SET_TODO_PAGE:
            return {...state, page: action.page}
        default:
            return state
    }
}
