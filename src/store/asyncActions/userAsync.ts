import {Dispatch} from 'redux';
import {UserActionTypes} from '../../types/user';
import axios from 'axios';
import {fetchUsersAction, fetchUsersErrorAction, fetchUsersSuccessAction} from '../actions/user';

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserActionTypes>) => {
        try {
            dispatch(fetchUsersAction())
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setTimeout(() => {
                dispatch(fetchUsersSuccessAction(response.data))
            }, 1000)
        } catch (e) {
            dispatch(fetchUsersErrorAction('Error occurred while loading users data.'))
        }
    }
}
