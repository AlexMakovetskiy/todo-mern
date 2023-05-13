import React, { useState } from 'react';
import { Button, Input } from 'antd';

import { PROJECT_URL_API } from '../../constants';

import styles from './ControlPanel.module.scss';

function ControlPanel () {
    const [todoTitle, setTodoTitle] = useState('');

    function handleChangeNewTodo (event) {
        event.preventDefault();
        setTodoTitle(event.target.value);
    }

    async function sendNewTodoData () {
        const modifiedTitle = { 
            title: todoTitle,
        };
        await fetch(PROJECT_URL_API, {
            method: 'POST',
            body: JSON.stringify(modifiedTitle),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return setTodoTitle('');
    }

    return (
        <div className={styles.controlPanelWrap}>
            <Input placeholder="Your new todo" onChange={handleChangeNewTodo} value={todoTitle}></Input>
            <Button onClick={sendNewTodoData}>Add todo</Button>
        </div>
    );
}

export default ControlPanel;