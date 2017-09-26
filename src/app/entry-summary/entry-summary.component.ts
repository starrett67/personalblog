import { Component, OnInit, Input } from '@angular/core';
import { Entry } from '../../models/entry';
import { EntryService } from '../../services/entry-service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'entry-summary',
  templateUrl: './entry-summary.component.html',
  styleUrls: ['./entry-summary.component.css']
})
export class EntrySummaryComponent implements OnInit {
  public entryList: Entry[];
  private entryService: EntryService;

  constructor(entryService: EntryService) {
    entryService.getEntries()
      .subscribe(entries => {
        this.entryList = entries;
      });
    this.entryService = entryService;
  }

  ngOnInit() {
  }

  addEntry() {
    this.entryList = this.entryService.addEntries();
  }
}
