import { Component, OnInit } from '@angular/core';
import { TASK } from 'src/app/monk-task';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASK;

  constructor() { }

  ngOnInit(): void {
  }

}
