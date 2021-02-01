export class Task{
  title: string;
  description: string;
  complete: boolean;

  constructor(title = '', description = ''){
    this.title = title;
    this.description = description;
    this.complete = false;
    //to-do
  }
}
