import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorsheComponent } from './porshe.component';

describe('PorsheComponent', () => {
  let component: PorsheComponent;
  let fixture: ComponentFixture<PorsheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorsheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorsheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
