import { Component, OnInit} from '@angular/core';
import { TodoDataService } from '../todoDataService';
import { UserDataService } from '../userDataService';
import { Todo } from '../todo';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  private userService : UserDataService = new UserDataService()
  private todoService : TodoDataService = new TodoDataService()
  users : User[];
  userTodos : Todo[];

  constructor(
  ) { }
  
  ngOnInit(): void {
   this.loadUsers();
  }  

  loadUsers(): void {
    this.userService.fetchUserdata();
    this.users = this.userService.Users;
  }

  loadUserTodos(userId:string): void {
    this.todoService.fetchTodoData(userId)
    this.userTodos = this.todoService.Todos; 
  }  

  onChangeUsername(userId:string) {    
    this.loadUserTodos(userId);
  }  
}    