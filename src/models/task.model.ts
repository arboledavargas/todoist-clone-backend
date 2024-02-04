import { SubTask } from './subtask.model'
import { Model } from "./base.model";

type TaskProps = {
  id: string;
  title: string;
  content: string;
  done: boolean;
  dueDate?: Date;
  subTasks: SubTask[];
}

export class Task extends Model {
  title: string;
  content: string;
  done: boolean;
  dueDate?: Date;
  subTasks: SubTask[];

  constructor(props: TaskProps){
    super(props.id)
    this.title = props.title;
    this.content = props.content;
    this.done = props.done;
    this.dueDate = props.dueDate;
    this.subTasks = props.subTasks;
  }
}

