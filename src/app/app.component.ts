import { Component } from '@angular/core';
import { EntrySummaryComponent } from './entry-summary/entry-summary.component';
import { Entry } from '../models/entry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'My Dumb Blog';
  public entryList: Entry[] = [];

  constructor() {
    for (let i = 0; i < 5; i ++) {
      this.entryList.push(Entry.generate());
    }
  }

  addEntry() {
    this.entryList.push(Entry.generate());
  }
}
