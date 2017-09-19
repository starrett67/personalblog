import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EntryComponent } from './entry.component';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { EntryService } from '../../services/entry-service';
import { Entry } from '../../models/entry';

describe('EntryComponent', () => {
  let component: EntryComponent;
  let fixture: ComponentFixture<EntryComponent>;
  const testEntry = Entry.generate();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EntryComponent],
      providers: [
        { provide: EntryService, useValue: { GetEntry: () => testEntry } },
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () => 1 } } } }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
