import {Component} from '@angular/core';
import {FirebaseListComponent} from './firebase-list.component';

@Component({
    selector: 'my-app',
    template: `
    <h2>main app;</h2>
    <firebase-list></firebase-list>
    `,
    directives: [FirebaseListComponent]
})

export class AppComponent{

}