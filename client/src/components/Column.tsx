import React, {Dispatch, FC, SetStateAction} from 'react';
import {IColumn, ITaskMin} from "../types/types";
import {ColumnName, ColumnStyled} from "../styles/BoardStyled";
import Task from "./Task";
import {Button, Input} from "../styles/components";

interface IColumnProps {
    column: IColumn,
    columns: IColumn[],
    setColumns: Dispatch<SetStateAction<IColumn[]>>,
    currentColumn: IColumn,
    setCurrentColumn: Dispatch<SetStateAction<IColumn>>,
    currentTask:  ITaskMin,
    setCurrentTask: Dispatch<SetStateAction<ITaskMin>>
}

const Column: FC<IColumnProps> = ({
                                      column,
                                      columns,
                                      setColumns,
                                      currentColumn,
                                      setCurrentColumn,
                                      currentTask,
                                      setCurrentTask
                                  }) => {

    function dragOverHandler(event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault()
        let target = event.target as HTMLDivElement
        if (target.id === "task") {
            target.style.boxShadow = "4px 2px 0 0 rgb(0, 0, 0)"
        }
    }

    function dragLeaveHandler(event: React.DragEvent<HTMLDivElement>) {
        (event.target as HTMLDivElement).style.boxShadow = "none"
    }

    function dragStartHandler(event: React.DragEvent<HTMLDivElement>, column: IColumn, task: ITaskMin) {
        setCurrentColumn(column)
        setCurrentTask(task)
    }

    function dragEndHandler(event: React.DragEvent<HTMLDivElement>) {
        (event.target as HTMLDivElement).style.boxShadow = "none"
    }

    function dropHandler(event: React.DragEvent<HTMLDivElement>,
                         column: IColumn,
                         task: ITaskMin,
                         currentTask: ITaskMin,
                         currentColumn: IColumn) {
        event.preventDefault()
        event.stopPropagation();
        (event.target as HTMLDivElement).style.boxShadow = 'none'
        const currentIndex = currentColumn.tasks.indexOf(currentTask)
        currentColumn.tasks.splice(currentIndex, 1)
        const dropIndex = column.tasks.indexOf(task)
        column.tasks.splice(dropIndex + 1, 0, currentTask)
        setColumns(columns.map(col => {
            if (col.id === column.id) {
                return column
            }
            if (col.id === currentColumn?.id) {
                return currentColumn
            }
            return col
        }))
    }

    function dropColumnHandler(event: React.DragEvent<HTMLDivElement>,
                               column: IColumn,
                               currentTask: ITaskMin,
                               currentColumn: IColumn) {
        event.preventDefault()
        column.tasks.push(currentTask)
        const currentIndex = currentColumn.tasks.indexOf(currentTask)
        currentColumn.tasks.splice(currentIndex, 1)
        setColumns(columns.map(col => {
            if (col.id === column.id) {
                return column
            }
            if (col.id === currentColumn?.id) {
                return currentColumn
            }
            return col
        }))
    }

    return (
        <ColumnStyled
            // draggable={true}
            onDragOver={dragOverHandler}
            onDrop={event => dropColumnHandler(event, column, currentTask, currentColumn)}
            id="col"
        >
            <ColumnName>{column.name}</ColumnName>
            {column.tasks.map(task =>
                <Task
                    key={task.id}
                    task={task}
                    column={column}
                    dragOverHandler={dragOverHandler}
                    dragLeaveHandler={dragLeaveHandler}
                    dragStartHandler={dragStartHandler}
                    dragEndHandler={dragEndHandler}
                    dropHandler={dropHandler}
                    currentColumn={currentColumn}
                    currentTask={currentTask}
                />)}
            <Input padding={"8px"} placeholder={"Добавить карточку"} onChange={e => {
                let columnTemp: IColumn = columns.filter(col => column.id === col.id)[0]
                let colIndex = columns.indexOf(columnTemp);
                // columnTemp.tasks.push({id: getId("task"), name: (e.target as HTMLInputElement).value, owner: "22343", group: "2342"})
                // columns.splice(colIndex,1, columnTemp)
                // let columnsTemp = columns
                // setColumns(columnsTemp);
                (e.target as HTMLInputElement).value = ""
            }}/>
            <Button />

        </ColumnStyled>
    );
};

export default Column;

