import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidenComponent } from './guiden.component';

describe('GuidenComponent', () => {
  let component: GuidenComponent;
  let fixture: ComponentFixture<GuidenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
