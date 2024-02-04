import { Model } from "./base.model";

type SubTaskProps = {
  id: string;
  title: string;
  content: string;
  done: boolean;
  dueDate?: Date;
}

export class SubTask extends Model {
  title: string;
  content: string;
  done: boolean;
  dueDate?: Date;

  constructor(props: SubTaskProps){
    super(props.id)
    
    this.title = props.title;
    this.content = props.content;
    this.done = props.done;
    this.dueDate = props.dueDate;
  }
}