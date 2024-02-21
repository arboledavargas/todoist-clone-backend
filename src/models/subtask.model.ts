import { Model } from "./base.model";
import { SubTask as SubTaskType } from "../graphql";
import { randomUUID } from "crypto";

type SubTaskProps = {
  id: string;
  title: string;
  content: string;
  done: boolean;
  dueDate: Date;
}

export type SubtasksBatch = {
  task: {
    id: string;
  };
  
  subTasks: SubTask[];
}

export class SubTask extends Model {
  title: string;
  content: string;
  done: boolean;
  dueDate: Date;

  private constructor(props: SubTaskProps, isNew:boolean){
    super(props.id, isNew, false);
    
    this.title = props.title;
    this.content = props.content;
    this.done = props.done;
    this.dueDate = props.dueDate;
  }

  public serialize():SubTaskType {
    return {
      content: this.content,
      done: this.done,
      id: this.id,
      title: this.title,
      dueDate: this.dueDate.toISOString()
    }
  }

  static createExisting(props: SubTaskProps){
    return new SubTask(props, false)
  }

  static createNew(props: Omit<SubTaskProps, 'id'>){
    
    const id = randomUUID();

    return new SubTask({id,... props}, true)
  }
}