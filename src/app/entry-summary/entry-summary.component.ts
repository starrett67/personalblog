import { Component, OnInit, Input } from '@angular/core';
import { Entry } from '../../models/entry';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'entry-summary',
  templateUrl: './entry-summary.component.html',
  styleUrls: ['./entry-summary.component.css']
})
export class EntrySummaryComponent implements OnInit {
  @Input() public entry: Entry;

  constructor() { }

  ngOnInit() {
  }

}
