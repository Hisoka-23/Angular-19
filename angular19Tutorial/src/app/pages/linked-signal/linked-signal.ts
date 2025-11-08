import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  standalone: true,
  imports: [],
  templateUrl: './linked-signal.html',
  styleUrl: './linked-signal.css',
})
export class LinkedSignal {

  firstName = signal('prakash');
  lastName = signal('chaurasiya');

  fullName = linkedSignal({
    source: this.firstName,
    computation: (newVal, prevVal) => {
      const fullName = newVal + ' ' + this.lastName();
      return fullName;
    }
  });

  user = signal({id: 101, name: 'prakash'});

  email = linkedSignal({
    source: this.user,
    computation: user => `${user.name+user.id}@gmail.com`,
    equal: (a: any, b: any) => a.id !== b.id,
  });

  changeName(){
    this.firstName.set('john');
  }

  changeId(){
    this.user.set({id: 123, name: 'doe'});
  }

}
