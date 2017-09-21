import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Entry } from '../../models/entry';
import { EntrySummaryComponent } from './entry-summary.component';
import { SideWidgetsComponent } from '../side-widgets/side-widgets.component';
import { RouterTestingModule } from '@angular/router/testing';
import { EntryService } from '../../services/entry-service';

describe('EntrySummaryComponent', () => {
  let component: EntrySummaryComponent;
  let fixture: ComponentFixture<EntrySummaryComponent>;
  const testEntry = Entry.generate();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [EntrySummaryComponent, SideWidgetsComponent],
      providers: [EntryService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrySummaryComponent);
    component = fixture.componentInstance;
    component.entryList = [testEntry];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render elements', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('img[src="' + testEntry.headingImage + '"]')).toBeTruthy();
    expect(compiled.querySelector('div[class="card-footer text-muted"]').textContent).toContain(testEntry.author);
    expect(compiled.querySelector('div[class="card-footer text-muted"]').textContent).toContain(testEntry.lastEditDate.getFullYear());
    expect(compiled.querySelector('h2[class="card-title"]').textContent).toContain(testEntry.title);
    expect(compiled.querySelector('p[class="card-text"]').textContent).toContain(testEntry.description);
  });
});
