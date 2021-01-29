import { Task } from './../models/task.models';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'To-Do';
  tasks: Task[];

  constructor(){
    this.tasks = [new Task('Title test', 'Desc. test')];
  }

  lisenNewTask($event:any){
    console.log("ROOT esucha " +$event);
    this.tasks.push($event);
  }

}

