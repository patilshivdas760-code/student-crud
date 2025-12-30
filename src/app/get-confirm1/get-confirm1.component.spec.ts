import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetConfirm1Component } from './get-confirm1.component';

describe('GetConfirm1Component', () => {
  let component: GetConfirm1Component;
  let fixture: ComponentFixture<GetConfirm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetConfirm1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetConfirm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
