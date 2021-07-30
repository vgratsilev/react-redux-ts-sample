import {UserActionTypes, UserState} from '../../types/user';

export const FETCH_USERS = 'FETCH_USERS'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'

const initialState: UserState = {
    users: [],
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action: UserActionTypes): UserState => {
    switch (action.type) {
        case FETCH_USERS:
            return {
                users: [],
                loading: true,
                error: null
            }
        case FETCH_USERS_SUCCESS:
            return {
                users: action.users,
                loading: false,
                error: null
            }
        case FETCH_USERS_ERROR:
            return {
                users: [],
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}
