import { render } from '@testing-library/react';
import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
    const todoList = todos.length ? (
        todos.map(t => {
            return (
                <div className="collection-item" key={t.id}>
                    <span onClick={() => {deleteTodo(t.id)}}>{t.content}</span>
                </div>
            )
        })
    ) : (
    <p className="center">You have no Todo!</p>
)
return (
    <div className="todos collection">
        {todoList}
    </div>
)
}

export default Todos;