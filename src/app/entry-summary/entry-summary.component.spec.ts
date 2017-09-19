import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Entry } from '../../models/entry';
import { EntrySummaryComponent } from './entry-summary.component';
import { RouterTestingModule } from '@angular/router/testing';
import { EntryService } from '../../services/entry-service';

describe('EntrySummaryComponent', () => {
  let component: EntrySummaryComponent;
  let fixture: ComponentFixture<EntrySummaryComponent>;
  const testEntry = Entry.generate();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [EntrySummaryComponent],
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
    expect(compiled.querySelector('img[src="' + testEntry.authorImage + '"]')).toBeTruthy();
    expect(compiled.querySelector('img[src="' + testEntry.headingImage + '"]')).toBeTruthy();
    expect(compiled.querySelector('p[class="author-name"]').textContent).toContain(testEntry.author);
    expect(compiled.querySelector('p[class="date"]').textContent).toContain(testEntry.lastEditDate.getFullYear());
    expect(compiled.querySelector('h2[class="entry-title"]').textContent).toContain(testEntry.title);
    expect(compiled.querySelector('h3[class="entry-description"]').textContent).toContain(testEntry.description);
  });
});
