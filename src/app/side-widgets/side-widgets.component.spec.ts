import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideWidgetsComponent } from './side-widgets.component';

describe('SideWidgetsComponent', () => {
  let component: SideWidgetsComponent;
  let fixture: ComponentFixture<SideWidgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideWidgetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
