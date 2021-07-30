import * as actions from '../store/actions/user';

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never

export type UserActionTypes = ReturnType<InferValueTypes<typeof actions>>

export interface UserState {
    users: any[],
    loading: boolean,
    error: null | string
}
