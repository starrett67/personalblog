import { Component, OnInit } from '@angular/core';
import { Entry } from '../../models/entry';
import { EntryService } from '../../services/entry-service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  public entry: Entry;
  constructor(
    private route: ActivatedRoute,
    private entryService: EntryService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.entry = this.entryService.getEntry(id);
  }
}
