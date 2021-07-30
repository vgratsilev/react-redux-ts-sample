import {Dispatch} from 'redux';
import {TodoActionTypes} from '../../types/todo';
import axios from 'axios';
import {fetchTodosAction, fetchTodosErrorAction, fetchTodosSuccessAction} from '../actions/todo';

export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoActionTypes>) => {
        try {
            dispatch(fetchTodosAction())
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {_page: page, _limit: limit}
            })
            setTimeout(() => {
                dispatch(fetchTodosSuccessAction(response.data))
            }, 500)
        } catch (e) {
            dispatch(fetchTodosErrorAction('Error occurred while loading todos data.'))
        }
    }
}
