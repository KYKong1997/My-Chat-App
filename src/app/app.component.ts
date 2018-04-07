import { Component } from '@angular/core';
import { AngularFirestore,AngularFirestoreModule } from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 
export class AppComponent {

  //Variable declaration
  title = 'my chat app';
  testing = 'This is a cheat hahahahahahhahahahhahah';

  messages=[];


name:string;
message:string;

constructor(public db:AngularFirestore){
  console.log('line 1');
  const observer=this.db.collection('Chat').valueChanges();
  console.log('line 2');
  observer.subscribe(function(data){
    console.log(data);
    console.log('line 3');
  });
  console.log('line 4');
  

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
