import { Component, inject, Input } from '@angular/core';
import { Task } from '../task.model';
import { TasksService } from '../tasksSevice';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  private taskService = inject(TasksService);

  OnComplete(id: string) {
    this.taskService.removeTask(this.task.id);
  }
}
