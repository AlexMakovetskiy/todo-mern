import React, { useEffect, useState } from 'react';
import {  Layout } from 'antd';

import SingleTodo from '../singleTodo/SingleTodo';
import { PROJECT_URL_API } from '../../../constants';

import styles from './TodoList.module.scss';

function TodoList () {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const fetchTodos = async () => {
            const response = await fetch(PROJECT_URL_API);
            const todos = await response.json();
            setTodos(todos);            
        };
        fetchTodos();
    });
    if (!todos) return <p>No todo data</p>;

    return (
        <Layout className={styles.todoListWrap}>
            {todos.map((todo) => {
                return <li key={todo._id}><SingleTodo {...todo}/></li>;
            })}
        </Layout>
    );
}

export default TodoList;

