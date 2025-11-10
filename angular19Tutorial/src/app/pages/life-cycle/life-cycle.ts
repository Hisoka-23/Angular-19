import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle.html',
  styleUrl: './life-cycle.css',
})
export class LifeCycle implements OnInit, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy {

  firstName: string;

  constructor() {
    console.log("constructor");
    // init vaiable
    this.firstName = '';
  }

  ngOnInit(): void {
    //api call
    console.log("ngOnit");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("After View Init", performance.now());
    //viewChild, gitting refrence of element// thir part library
  }

  ngAfterViewChecked(): void {
    console.log("After View Checked");

  }

  ngOnDestroy(): void {
    alert("you are leaving page");
    console.log("ngOnDestroy");
  }

}
