import React, {useEffect} from 'react';
import {useTypedSelector} from '../hooks/useTypedSelector';
import {useActions} from '../hooks/useActions';

const TodoList: React.FC = () => {
    const {page, error, todos, loading, limit} = useTypedSelector((state) => state.todo)
    const {fetchTodos, setTodoPageAction} = useActions()
    const pages = [1, 2, 3, 4, 5]

    useEffect(() => {
        fetchTodos(page, limit)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    const selectPageHandler = (selectedPageNumber: number) => {
        setTodoPageAction(selectedPageNumber)
    }

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {todos.map((todo) => <div key={todo.id}>{todo.id} - {todo.title}</div>)}
            <div className={'pageNumbersContainer'}>
                {pages.map((p, index) =>
                    <div
                        key={`${index}-${p}`}
                        className={p === page ? 'selectedPageNumber' : 'pageNumber'}
                        onClick={() => selectPageHandler(p)}
                    >
                        {p}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TodoList;
