import { Model } from "./base.model";
import { Task as TaskType } from "../graphql";
import { randomUUID } from 'crypto'

type TaskProps = {
  id: string;
  title: string;
  content: string;
  done: boolean;
  dueDate: Date;
  userId: string;
}

export class Task extends Model {

  title: string;
  content: string;
  done: boolean;
  dueDate: Date;
  userId: string;
  private constructor(props: TaskProps, isNew:boolean){
    super(props.id, isNew, false);

    this.title = props.title;
    this.content = props.content;
    this.done = props.done;
    this.dueDate = props.dueDate;
    this.userId = props.userId;
  }

  setAsDone(){
    this.done = true;
  }

  serialize(): TaskType{
    return {
      content: this.content,
      done: this.done,
      id: this.id,
      title: this.title,
      dueDate: this.dueDate?.toISOString() ?? null,
      subTasks: []
    }
  }

  static createExisting(props: TaskProps){
    return new Task(props, false)
  }

  static createNew(props: Omit<TaskProps, 'id'>){
    
    const id = randomUUID();

    return new Task({id,... props}, true)
  }
}

