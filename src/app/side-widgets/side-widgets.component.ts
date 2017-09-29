import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntryService } from '../../services/entry-service';

@Component({
  selector: 'side-widgets',
  templateUrl: './side-widgets.component.html',
  styleUrls: ['./side-widgets.component.css']
})
export class SideWidgetsComponent implements OnInit {

  constructor(public entryService: EntryService, private router: Router) { }

  ngOnInit() {
  }

  search() {
    this.router.navigate(['home']);
  }
}
