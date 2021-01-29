import { Component, Input, OnInit } from '@angular/core';
import { Task } from './../../models/task.models';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  @Input() inputTasks: Task[];

  taskFinish: boolean;
  constructor() {
    this.inputTasks = [];
    this.taskFinish = false;
  }

  ngOnInit(): void {
  }


  onClick(task: Task){

    task.complete = !task.complete;

  }

  onComplete(index: number){

    this.inputTasks[index].complete = true;

  }

  onIncomplete(index: number){
    this.inputTasks[index].complete = false;
  }

  onDelete($event: Task){
    console.log($event);

    this.remove($event);

    console.log('Tasks despues de eiliminar');
    console.log(this.inputTasks);
  }

  onDeleteV2(index: number){

    this.inputTasks.splice(index, 1); //splice(inicio, cuantos elemtnos borro)
    console.log('Tasks despues de eiliminar');
    console.log(this.inputTasks);
  }

  remove(delTask: Task){

    var index = this.inputTasks.indexOf(delTask);

    if(index >0){
      this.inputTasks.splice(index, 1);
    }

  }
}
