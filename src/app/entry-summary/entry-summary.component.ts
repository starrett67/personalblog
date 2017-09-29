import { Component, OnInit, Input } from '@angular/core';
import { Entry } from '../../models/entry';
import { EntryService } from '../../services/entry-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'entry-summary',
  templateUrl: './entry-summary.component.html',
  styleUrls: ['./entry-summary.component.css']
})
export class EntrySummaryComponent implements OnInit {

  constructor(public entryService: EntryService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.entryService.getEntries();
  }
}
