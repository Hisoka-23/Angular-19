import { NgClass } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabs',
  imports: [NgClass],
  templateUrl: './tabs.html',
  styleUrl: './tabs.css',
})
export class Tabs {

  @Input() tubList: string[] = [];

  @Output() onTabClicked = new EventEmitter<String>();

  currentTab: string = '';

  constructor(){
    this.currentTab = this.tubList[0];
  }

  onTabChange(tabName: string){
    this.onTabClicked.emit(tabName);
  }

}
