import * as UserAsyncActionCreators from '../asyncActions/userAsync'
import * as TodoAsyncActionCreators from '../asyncActions/todoAsync'
import {setTodoPageAction} from './todo'

const ActionCreators = {
    ...UserAsyncActionCreators,
    ...TodoAsyncActionCreators,
    setTodoPageAction
}
export default ActionCreators
