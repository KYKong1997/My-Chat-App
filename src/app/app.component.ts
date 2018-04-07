import { Component } from '@angular/core';
import { AngularFirestore,AngularFirestoreModule } from 'angularfire2/firestore';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 
export class AppComponent {

  //Variable declaration
  title = 'my chat app';
  testing = 'This is a cheat hahahahahahhahahahhahah';

  messages:Observable<any[]>;


name:string;
message:string;

constructor(public db:AngularFirestore){
 
  this.messages=this.db.collection('Chat').valueChanges();
  
  

}
  sendMessage(){
    //alert('my name is '+this.name+" and the message is "+this.message);
    //create new object
    const message={
      name:this.name,
      message:this.message,
      createdOn:new Date()
    };
    //add item to firebase
    this.db.collection('Chat').add(message);
    //this.messages.push(message);

  }
}
