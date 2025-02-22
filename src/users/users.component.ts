import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDto, UserService } from './user.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h1>Users</h1>
      <small>name:</small>
      <input (change)="filter($event)">
      <ul>
        <li *ngFor="let user of users">
          <span (click)="getUser(user?.id)">
            {{ user?.id }} | {{ user?.name }} | {{ user?.email }}
          </span>
          <span (click)="deleteUser(user?.id)">✖</span>
        </li>
      </ul>
      <button (click)="getUsers()">Get Users</button>
      <button (click)="addUser()">Add User</button>
      <button *ngIf="users?.length" (click)="updateUser()">Update User</button>
      <br />
      <br />
      <br />
      <br />
      <p *ngIf="user$ | async as selectedUser">
        <span *ngIf="users?.length">
          selected User: {{ selectedUser.name }} | {{ selectedUser.email }}
        </span>
      </p>
    </div>
  `,
})
export class UsersComponent {
  private userService = inject(UserService);
  users: UserDto[] = [];
  user$?: Observable<UserDto> | null = null;
  userCount$?: Observable<number> | null = null;

  constructor() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((data) => (this.users = data));
  }

  filter(e:any) {
    this.userService.filterUser(e?.target?.value).subscribe((data) => (this.users = data));
  }

  getUser(id: any) {
    this.user$ = this.userService.getUser(id);
  }

  addUser() {
    this.userService
      .createUser({ name: 'New User', email: 'newuser@example.com' })
      .subscribe((user) => {
        const newUsers = [...this.users];
        newUsers.push(user);
        this.users = newUsers;
      });
  }

  updateUser() {
    const id: number = 123;
    this.userService
      .updateUser({
        id,
        name: 'David Doe',
        email: 'David@example.com',
      })
      .subscribe((user) => {
        this.users = this.users.map((u) => (u.id == user.id ? user : u));
      });
  }

  deleteUser(id: any) {
    this.userService.deleteUser(id).subscribe((user) => {
      if (user) this.users = this.users.filter((u) => u.id !== user.id);
    });
  }
}
