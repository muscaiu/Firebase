import {Component} from '@angular/core';
import {ControlGroup} from '@angular/common';
import {FirebaseService} from './firebase.service';

@Component({
    selector:'firebase-list',
    template:`
<h2>list from firebase</h2>

<form (ngSubmit)="onSubmit(f)" #f="ngForm">
    <input type="text" ngControl="firstName">
    <input type="text" ngControl="lastName">
    <button type="submit">Submit</button>
</form>

<button (click)="onGetUser()" >Get User</button>
<div id="response">Response: {{ response }} </div>
    `,
    providers:[FirebaseService]
})

export class FirebaseListComponent{
    response : string;

    constructor(private _firebaseService: FirebaseService){}

    onSubmit(form: ControlGroup){
        this._firebaseService.setUser(form.value.firstName, form.value.lastName)
            .subscribe(
                user => this.response = JSON.stringify(user),
                error => console.log(error)
            );
    }

    onGetUser(){
        this._firebaseService.getUser()
            .subscribe(
                user => this.response = JSON.stringify(user),
                error => console.log(error)
            )
    }
}