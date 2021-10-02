import React, {useContext, useEffect, useState} from "react";
import HeaderComponent from "../../components/HeaderComponent";
import ContentComponent from "../../components/ContentComponent";
import FooterComponent from "../../components/FooterComponent";
import {ThemeContext} from "../../theme/ThemeContext";

const TasksPageComponent = () => {
    let initTasks = [];
    const [newTask, setNewTasks] = useState('');
    const [tasks, setTasks] = useState(initTasks);
    const [activeTab, setActiveTab] = useState('all');
    const [isAddTaskFormOpen, setAddTaskFormOpen] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTasks([
                {id: 1, title: 'First task. Wake up', done: true, delete: true},
                {id: 2, title: 'Open your eyes', done: true, delete: true},
                {id: 3, title: 'Third task. Go to the bath.', done: false, delete: false},
                {id: 4, title: 'Check smartphone', done: true, delete: false},
                {id: 5, title: 'Brush your teeth', done: false, delete:false}
            ]);
        }, 2000);
    }, []);

    const changeTaskStatus = el => {
        setTasks(tasks.map(item => item.id === el.id ? {...item, done: !item.done} : item));
    };

    const changeTaskStatusDelete = el => {
        setTasks(tasks.map(item => item.id === el.id ? {...item, delete: !item.delete} : item));
    };

    const enterNewTask = (e) => {
        setNewTasks(e.target.value);
    };
    const addNewTask = () => {
        setTasks([
            ...tasks,
            {id: tasks.length+1, title: newTask, done: false, delete: false}
        ]);
        setNewTasks('');
    };

    const keyBoardHandler = e => {
        if (e.keyCode === 13) {
            addNewTask();
            setNewTasks('');
            setAddTaskFormOpen(false);
        }
        if (e.keyCode === 27) {
            setNewTasks('');
            setAddTaskFormOpen(false);
        }
    };

    const {theme} = useContext(ThemeContext);

    return (
        <>
            <HeaderComponent deviceBorderColor={theme.deviceBorderColor}/>

            <ContentComponent
                tasks={tasks}
                setActiveTab={setActiveTab}
                changeTaskStatusDelete={changeTaskStatusDelete}
                activeTab={activeTab}
                changeTaskStatus={changeTaskStatus}
                tabWrapperBgColor={theme.tabWrapperBgColor}
                tabWrapperShadowColor={theme.tabWrapperShadowColor}
                borderBottomTaskDivColor={theme.borderBottomTaskDivColor}
                removeTaskTextColor={theme.removeTaskTextColor}
                doneTaskTextColor={theme.doneTaskTextColor}
            />

            <FooterComponent
                setAddTaskFormOpen={setAddTaskFormOpen}
                newTask={newTask}
                keyBoardHandler={keyBoardHandler}
                isAddTaskFormOpen={isAddTaskFormOpen}
                enterNewTask={enterNewTask}
            />
        </>
    );
}

export { TasksPageComponent };
