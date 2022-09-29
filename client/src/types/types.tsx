import React from "react";

export interface IRoute {
    path: string
    Component: React.ReactNode
}

export interface ISubject {
    id: string | number
    name: string
}

export interface IGroup {
    id: string | number
    name: string
}

export interface ITaskMin {
    id: string | number,
    name: string,
    owner: string,
    group: string,
}

export interface ITaskFull {
    id: string | number,
    name: string,
    owner: string,
    description: string | null,
    files: any[] | null,
    deadline: string,
    score: number,
    ownerGroup: string,
}

export interface IColumn {
    id: string | number,
    name: string,
    tasks: ITaskMin[],
}

export interface IBoard {
    id: string | number,
    name: string,
    group: string,
    columns: IColumn[],
}

export interface IBoardMin {
    id: string | number,
    name: string,
    group?: string,
}

export interface IDragDrop {
    dragOverHandler: (e: React.DragEvent<HTMLDivElement>) => void
    dragLeaveHandler: (e: React.DragEvent<HTMLDivElement>) => void
    dragStartHandler: (e: React.DragEvent<HTMLDivElement>, column: IColumn, task: ITaskMin) => void
    dragEndHandler: (e: React.DragEvent<HTMLDivElement>) => void
    dropHandler: (e: React.DragEvent<HTMLDivElement>,
                  column: IColumn,
                  task: ITaskMin,
                  currentTask: ITaskMin,
                  currentColumn: IColumn) => void
}
