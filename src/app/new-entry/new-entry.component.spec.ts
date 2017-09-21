import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewEntryComponent } from './new-entry.component';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';

describe('NewEntryComponent', () => {
  let component: NewEntryComponent;
  let fixture: ComponentFixture<NewEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewEntryComponent],
      imports: [FormsModule, CKEditorModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
