
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateTaskInput {
    title: string;
    content: string;
    done: boolean;
    dueDate: string;
}

export interface IQuery {
    tasks(dueDate?: Nullable<string>): Nullable<Task>[] | Promise<Nullable<Task>[]>;
}

export interface IMutation {
    setTaskDone(taskId: string): Nullable<SetTaskDonePayload> | Promise<Nullable<SetTaskDonePayload>>;
    createTask(input?: Nullable<CreateTaskInput>): Nullable<Task> | Promise<Nullable<Task>>;
}

export interface SetTaskDonePayload {
    success?: Nullable<boolean>;
    task: Task;
}

export interface Task {
    id: string;
    title: string;
    content: string;
    done: boolean;
    dueDate: string;
    subTasks: SubTask[];
}

export interface SubTask {
    id: string;
    title: string;
    content: string;
    done: boolean;
    dueDate: string;
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
