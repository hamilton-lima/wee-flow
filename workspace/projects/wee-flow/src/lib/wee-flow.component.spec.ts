import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeFlowComponent } from './wee-flow.component';

describe('WeeFlowComponent', () => {
  let component: WeeFlowComponent;
  let fixture: ComponentFixture<WeeFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
