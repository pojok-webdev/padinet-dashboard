import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddOfferComponent } from './admin-add-offer.component';

describe('AdminAddOfferComponent', () => {
  let component: AdminAddOfferComponent;
  let fixture: ComponentFixture<AdminAddOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
