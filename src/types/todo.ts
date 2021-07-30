import * as actions from '../store/actions/todo';

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never

export type TodoActionTypes = ReturnType<InferValueTypes<typeof actions>>

export interface TodoState {
    todos: any[],
    loading: boolean,
    error: null | string,
    page: number,
    limit: number
}
