import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent implements OnInit {
  public ckeditorContent: string;
  public title: string;
  public description: string;
  public imageUrl: string;

  constructor() { }

  ngOnInit() {
  }

  save() {
    console.log(event);
    console.log(this.ckeditorContent);
  }

}
