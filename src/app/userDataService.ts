import { User } from './user';

export class UserDataService {
    Users: User[] = [];

    async fetchUserdata(): Promise<void> {  
       this.Users = new Array();
       let users = await this.getUserData();
       
       users.forEach((user:(any)) => {
            this.Users.push(user);
        });        
    }  

    async getUserData(){
        let url = 'https://jsonplaceholder.typicode.com/users';
        try {
            let res = await fetch(url);
            return await res.json();
        } catch (error) {
            console.log(error);
        }
    }
}