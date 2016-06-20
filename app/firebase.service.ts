import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService{
    
    constructor(private _http: Http){}
    
    setUser(firstName: string, lastName: string){
        const body = JSON.stringify({
            firstName: firstName, 
            lastName: lastName
        })
        return this._http.put('https://project-4491128562559039101.firebaseio.com/user.json', body)
            .map(response => response.json());
    }

    getUser(){
        return this._http.get('https://project-4491128562559039101.firebaseio.com/user.json')
            .map(response => response.json());
    }
}