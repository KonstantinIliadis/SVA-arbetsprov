import { Todo } from "./todo";
  
export class TodoDataService {
  Todos: Todo[] = [];

  async fetchTodoData(id:string): Promise<void> {  
     this.Todos = new Array();
     let todos = await this.getTodos();
     todos.forEach((todo:(any)) => {
         if(todo.userId == id)
         {
            todo.state = todo.completed ? "Avklarad" : " ";
            this.Todos.push(todo);
         }
      });     
  }  

  async getTodos(){
      let url = 'https://jsonplaceholder.typicode.com/todos';
      try {
          let res = await fetch(url);
          return await res.json();
      } catch (error) {
          console.log(error);
      }
  }
}