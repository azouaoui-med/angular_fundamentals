import { IUser } from './user.model';
import { Injectable } from "@angular/core";


@Injectable()
export class AuthService {
    currentUser: IUser
    loginUser(userName: string, password: string){
        this.currentUser = {
            id: 1,
            firstName:'Jhon',
            lastName:'Papa',
            userName:userName
        }
    }

    isAuthenticated (){
        return !!this.currentUser;
    }

    updateCurrentUser(firstName: string, lastName: string){
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }   
}