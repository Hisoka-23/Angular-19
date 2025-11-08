import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {
  firstName = signal('prakash');

  lastName = signal('chaurasiya');

  couresName: string = 'Angular';

  rollno = signal<number>(0);

  constructor() {
    const value = this.firstName();

    setTimeout(() => {
      this.couresName = 'React';
      this.firstName.set('John');
    }, 5000);
  }

  onIncrement(){
    this.rollno.update(n => n+1)
  }

}
