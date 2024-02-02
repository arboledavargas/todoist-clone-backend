
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface IQuery {
    tasks(dueDate?: Nullable<string>): Nullable<Task>[] | Promise<Nullable<Task>[]>;
}

export interface IMutation {
    setTaskDone(taskId: number): Nullable<SetTaskDonePayload> | Promise<Nullable<SetTaskDonePayload>>;
}

export interface SetTaskDonePayload {
    success?: Nullable<boolean>;
    task?: Nullable<Task>;
}

export interface Task {
    id: string;
    title: string;
    content: string;
    done: boolean;
    dueDate?: Nullable<string>;
    subTasks: SubTask[];
}

export interface SubTask {
    id: string;
    title: string;
    content: string;
    done: boolean;
    dueDate?: Nullable<string>;
}

export interface Project {
    id: string;
    name: string;
    color: string;
    workspaceId: string;
    isfavorite: boolean;
    layout: string;
    order: number;
    archived: boolean;
    Tasks: Nullable<Task>[];
}

type Nullable<T> = T | null;
