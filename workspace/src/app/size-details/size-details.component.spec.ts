import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeDetailsComponent } from './size-details.component';

describe('SizeDetailsComponent', () => {
  let component: SizeDetailsComponent;
  let fixture: ComponentFixture<SizeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
