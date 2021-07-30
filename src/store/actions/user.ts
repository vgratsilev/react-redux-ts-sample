import {FETCH_USERS, FETCH_USERS_ERROR, FETCH_USERS_SUCCESS} from '../reducers/userReducer'

export const fetchUsersAction = () => ({type: FETCH_USERS} as const)
export const fetchUsersSuccessAction = (payload: any[]) => ({type: FETCH_USERS_SUCCESS, users: payload} as const)
export const fetchUsersErrorAction = (payload: null | string) => ({type: FETCH_USERS_ERROR, error: payload} as const)
