import React from "react";
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckSquare, faSquare, faTrashAlt} from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";

const LiComponent = styled.li`
    padding: 14px 0px;
    display: flex;
    justify-content: space-around;
    &:not(:last-child){
        border-bottom: 1px solid ${props => props.borderBottomTaskDivColor};
    }
    &:last-child{
        padding-bottom: 0px;
    }
    .task__text{
        flex: 1;
        margin: 0px 4px;
    }
    &:not(.removed),&:not(.removed),&:not(.removed){
        .fa,.far,.fas{
            cursor: pointer;
        }
    }
    &.removed{
        .fa,.far,.fas{
            opacity: 0;
        }
        .task__text{
            text-decoration: line-through;
            color: ${props => props.removeTaskTextColor};
            font-weight: 100;
        }
    }
    &.done{
        .fa.fa-check-square,.far.fa-check-square,.fas.fa-check-square{
            opacity: .5;
            cursor: default;
        }
        .task__text{
            color: ${props => props.doneTaskTextColor};
            font-weight: 100;
        }
    }
`;

const TaskElementComponent = ({
    cssClass,
    el,
    changeTaskStatus,
    changeTaskStatusDelete,
    borderBottomTaskDivColor,
    removeTaskTextColor,
    doneTaskTextColor,
}) => (
    <LiComponent
        className={cssClass}
        key={el.id}
        borderBottomTaskDivColor={borderBottomTaskDivColor}
        removeTaskTextColor={removeTaskTextColor}
        doneTaskTextColor={doneTaskTextColor}
    >
        <FontAwesomeIcon className='fa' icon={el.done ? faCheckSquare : faSquare} onClick={() => changeTaskStatus(el)} />
        <span className="task__text">{el.title}</span>
        <FontAwesomeIcon className='fa' icon={faTrashAlt} onClick={() => changeTaskStatusDelete(el)} />
    </LiComponent>
);

TaskElementComponent.propTypes = {
    cssClass: PropTypes.string.isRequired,
    el: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired,
        delete: PropTypes.bool.isRequired,
    }).isRequired,
    changeTaskStatus: PropTypes.func.isRequired,
    changeTaskStatusDelete: PropTypes.func.isRequired,
    borderBottomTaskDivColor: PropTypes.string.isRequired,
    removeTaskTextColor: PropTypes.string.isRequired,
    doneTaskTextColor: PropTypes.string.isRequired,
};

export default TaskElementComponent;
