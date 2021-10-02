import React from "react";
import styled from "styled-components";
import TasksList from "../TasksListComponent";
import TaskTabComponent from "../TaskTabComponent";

const TabWrapper = styled.div`
    margin: 8px 0px;
    min-height: 90px;
    background-color: ${props => props.tabWrapperBgColor};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 20px;
    box-sizing: border-box;
    box-shadow: 0px 2px 6px 0px ${props => props.tabWrapperShadowColor};
    cursor: pointer;
    transition: transform .3s;
    &.active{
        cursor: default;
    }

    &:hover:not(.active){
        transform: scale(1.04);
    }
`;

const TabComponent = ({
    activeTab,
    setActiveTab,
    tasks,
    changeTaskStatus,
    changeTaskStatusDelete,
    nameTab,
    tabTitle,
    tabDescription,
    taskListHeight,
    tabWrapperBgColor,
    tabWrapperShadowColor,
    borderBottomTaskDivColor,
    removeTaskTextColor,
    doneTaskTextColor,
}) => (
    <TabWrapper className={(activeTab===nameTab)?"active":""} tabWrapperShadowColor={tabWrapperShadowColor}>
        <TaskTabComponent
            nameTab={nameTab}
            tasks={tasks}
            setActiveTab={setActiveTab}
            tabDescription={tabDescription}
            tabTitle={tabTitle}
            tabWrapperBgColor={tabWrapperBgColor}
        />
        <TasksList
            changeTaskStatusDelete={changeTaskStatusDelete}
            changeTaskStatus={changeTaskStatus}
            activeTab={activeTab}
            tasks={tasks}
            nameTab={nameTab}
            taskListHeight={taskListHeight}
            borderBottomTaskDivColor={borderBottomTaskDivColor}
            removeTaskTextColor={removeTaskTextColor}
            doneTaskTextColor={doneTaskTextColor}
        />
    </TabWrapper>
);

export default TabComponent;
