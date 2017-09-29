import { Component, OnInit } from '@angular/core';
import { Entry } from '../../models/entry';
import { EntryService } from '../../services/entry-service';
import { Router, ActivatedRoute } from '@angular/router';
import * as shortid from 'shortid';

@Component({
  selector: 'new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent implements OnInit {

  public entry: Entry = new Entry();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private entryService: EntryService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.entry = this.entryService.getEntry(id);
    }
  }

  save(): void {
    this.entry.author = 'Josh Starrett';
    this.entry.lastEditDate = new Date();
    this.entry.publishedDate = new Date();
    if (!this.entry._id) {
      this.entry._id = this.entry.title.replace(' ', '_').substring(0, 12) + '_' + shortid.generate();
    }
    this.entryService.saveEntry(this.entry)
      .subscribe(() => {
        this.router.navigate(['/entry/' + this.entry._id]);
      });

  }

}
