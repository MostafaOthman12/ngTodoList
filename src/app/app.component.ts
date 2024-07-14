import { Component } from '@angular/core';
import { user } from './user/users.model';
import { DUMMY_USERS } from './users-data';
@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  SelectedUser!: user | null;
  onSelectUser(id: string) {
    this.SelectedUser = this.users.find((user) => user.id === id)!;
  }
}
