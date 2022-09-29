import React, {FC} from 'react';
import {IColumn, IDragDrop, ITaskMin} from "../types/types";
import {TaskOwner, TaskStyled} from "../styles/BoardStyled";

interface ITaskProps extends IDragDrop {
    task: ITaskMin,
    column: IColumn,
    currentTask: ITaskMin,
    currentColumn: IColumn,
}

const Task: FC<ITaskProps> = ({
                                  task,
                                  column,
                                  currentTask,
                                  currentColumn,
                                  dragOverHandler,
                                  dragLeaveHandler,
                                  dragStartHandler,
                                  dragEndHandler,
                                  dropHandler
                              }) => {

    return (
        <TaskStyled
            id={"task"}
            draggable={true}
            onDragOver={dragOverHandler}
            onDragLeave={dragLeaveHandler}
            onDragStart={event => dragStartHandler(event, column, task)}
            onDragEnd={dragEndHandler}
            onDrop={event => dropHandler(event, column, task, currentTask, currentColumn)}
        >
            {task.name}
            <TaskOwner>
                {task.owner}
            </TaskOwner>
        </TaskStyled>
    );
};

export default Task;

