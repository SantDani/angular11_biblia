import { Task } from './../../models/task.models';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  newTask: Task;



  @Output() outputEventNewTask: EventEmitter<Task>;

  constructor() {
    this.newTask = new Task();
    this.outputEventNewTask = new EventEmitter();

  }

  ngOnInit(): void {
  }

  sendNewTask(){
    this.outputEventNewTask.emit(this.newTask);
    this.newTask = new Task();
    console.log('Nueva task enviada ' + this.newTask.title);

  }

}
