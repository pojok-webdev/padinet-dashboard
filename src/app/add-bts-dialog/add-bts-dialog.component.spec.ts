import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBtsDialogComponent } from './add-bts-dialog.component';

describe('AddBtsDialogComponent', () => {
  let component: AddBtsDialogComponent;
  let fixture: ComponentFixture<AddBtsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBtsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBtsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
