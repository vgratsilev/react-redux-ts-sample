import {FETCH_TODOS, FETCH_TODOS_ERROR, FETCH_TODOS_SUCCESS, SET_TODO_PAGE} from '../reducers/todoReducer';


export const fetchTodosAction = () => ({type: FETCH_TODOS} as const)
export const fetchTodosSuccessAction = (payload: any[]) => ({type: FETCH_TODOS_SUCCESS, todo: payload} as const)
export const fetchTodosErrorAction = (payload: null | string) => ({type: FETCH_TODOS_ERROR, error: payload} as const)
export const setTodoPageAction = (payload: number) => ({type: SET_TODO_PAGE, page: payload} as const)
