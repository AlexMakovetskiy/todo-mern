import React from 'react';
import { Typography, Layout } from 'antd';

import ControlPanel from '../components/controlPanel/ControlPanel';
import TodoList from '../components/todos/todoList/TodoList';

import styles from '../style/index.module.scss';

const { Header } = Layout;
const { Title } = Typography;

function App () {
    return (
        <React.Fragment>
            <Header className={styles.header}><Title level={2} >TO DO | YOUR TASKS</Title></Header>
            <ControlPanel/>
            <TodoList/>
        </React.Fragment>
    );
};

export default App;