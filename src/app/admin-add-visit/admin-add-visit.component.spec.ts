import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddVisitComponent } from './admin-add-visit.component';

describe('AdminAddVisitComponent', () => {
  let component: AdminAddVisitComponent;
  let fixture: ComponentFixture<AdminAddVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
