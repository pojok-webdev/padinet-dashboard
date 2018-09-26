import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TroubleshootsComponent } from './troubleshoots.component';

describe('TroubleshootsComponent', () => {
  let component: TroubleshootsComponent;
  let fixture: ComponentFixture<TroubleshootsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TroubleshootsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TroubleshootsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
