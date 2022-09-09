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