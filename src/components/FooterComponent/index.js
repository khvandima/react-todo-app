import React, {useContext} from "react";
import { ThemeContext } from "../../theme/ThemeContext";
import {FooterStyledComponent} from "./index.styled";

const FooterComponent = ({
    isAddTaskFormOpen,
    setAddTaskFormOpen,
    enterNewTask,
    keyBoardHandler,
    newTask,
}) => {
    const {theme} = useContext(ThemeContext);
    return (
        <FooterStyledComponent
            className={isAddTaskFormOpen?'active':''}

            addButtonWrapperBgColor={theme.addButtonWrapperBgColor}
            hrBgColor={theme.hrBgColor}
            addTaskFormWrapperBgColor={theme.addTaskFormWrapperBgColor}
            inputUnderLineColor={theme.inputUnderLineColor}
            mainTextColor={theme.mainTextColor}
        >
            <div className="add__button__wrapper" onClick={() => setAddTaskFormOpen(!isAddTaskFormOpen)}>
                <span className="hr"></span>
                <span className={`hr ${isAddTaskFormOpen?'':'vr'}`}></span>
            </div>
            <div className="add__task__form__wrapper">
                <label htmlFor="task_input">Add new task for today</label>
                <input id="task_input" type="text" placeholder="Enter smth here" onChange={enterNewTask} onKeyUp={keyBoardHandler} value={newTask}/>
            </div>
        </FooterStyledComponent>
    );
}

export default FooterComponent;
