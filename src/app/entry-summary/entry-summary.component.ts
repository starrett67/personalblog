import { Component, OnInit, Input } from '@angular/core';
import { Entry } from '../../models/entry';

@Component({
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
