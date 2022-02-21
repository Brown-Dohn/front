import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichesignalComponent } from './fichesignal.component';

describe('FichesignalComponent', () => {
  let component: FichesignalComponent;
  let fixture: ComponentFixture<FichesignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichesignalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichesignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
