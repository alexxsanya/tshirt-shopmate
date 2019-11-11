import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbuttonComponent } from './cbutton.component';

describe('CbuttonComponent', () => {
  let component: CbuttonComponent;
  let fixture: ComponentFixture<CbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
