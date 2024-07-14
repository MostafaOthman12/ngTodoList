import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TasksService } from '../tasksSevice';
@Component({
  selector: 'app-create-task',
  standalone: false,
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css',
})
export class CreateTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() closeDialog = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummery = '';
  enteredDate = '';
  private taskService = inject(TasksService);
  onCancel() {
    this.closeDialog.emit();
  }
  onSubmit() {
    this.taskService.AddTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummery,
        date: this.enteredDate,
      },
      this.userId
    );
    this.closeDialog.emit();
  }
}
