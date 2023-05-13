import React, { useState } from 'react';
import { Button, Input, Layout, Checkbox  } from 'antd';

import { PROJECT_URL_API } from '../../../constants';

import styles from './SingleTodo.module.scss';

function SingleTodo ({title, _id}) {
    const [todoData, setTodoData] = useState({
        id: _id,
        title: title,
    });

    const TODO_ID_URL_API = `${PROJECT_URL_API}${todoData.id}/`;

    function handleChangeTitle (event) {
        event.preventDefault();
        setTodoData((prevState) => ({
            ...prevState,
            title: event.target.value,
        }));
    }

    async function sendUpdateTodo () {
        const modifiedTitle = { 
            title: todoData.title,
        };
        await fetch(TODO_ID_URL_API, {
            method: 'PATCH',
            body: JSON.stringify(modifiedTitle),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    async function deleteCurrentTodo() {
        await fetch(TODO_ID_URL_API, {
            method: 'DELETE',
        });
    }

    return (
        <Layout className={styles.todoWrap}>
            <Checkbox/>
            <Input defaultValue={todoData.title} onChange={handleChangeTitle}></Input>
            <Button onClick={sendUpdateTodo}>Confirm changes</Button>
            <Button type="primary" onClick={deleteCurrentTodo}>Delete</Button>
        </Layout>
    );
}

export default SingleTodo;