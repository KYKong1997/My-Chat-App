import { Component } from '@angular/core';
import { AngularFirestore,AngularFirestoreModule } from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 
export class AppComponent {
  title = 'my chat app';
  testing = 'This is a cheat hahahahahahhahahahhahah';

  messages=[];

name:string;
message:string;

constructor(public db:AngularFirestore){

}
  sendMessage(){
    //alert('my name is '+this.name+" and the message is "+this.message);
    const message={
      name:this.name,
      message:this.message
    };
    this.db.collection('Chat').add(message);
    //this.messages.push(message);

  }
}
