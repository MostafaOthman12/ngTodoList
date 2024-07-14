import {
  Component,
  computed,
  EventEmitter,
  input,
  Output,
  Input,
} from '@angular/core';
import { user } from './users.model';
@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  user = input.required<user>();
  imagePath = computed(() => 'assets/users/' + this.user().avatar);
  @Output() select = new EventEmitter();
  @Input() selectedUser!: user | null;

  onClick(id: string) {
    this.select.emit(id);
  }
}
