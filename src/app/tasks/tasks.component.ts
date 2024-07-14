import { Component, Input, Output } from '@angular/core';
import { user } from '../user/users.model';
import { Task } from './task.model';
import { TasksService } from './tasksSevice';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) user!: user;
  constructor(private tasksService: TasksService) {}
  isAddingTask = false;

  get getTasks(): Task[] {
    return this.tasksService.getUserTask(this.user.id);
  }
  onPressAdd() {
    this.isAddingTask = true;
  }

  onCancelAdd() {
    this.isAddingTask = false;
  }
}
