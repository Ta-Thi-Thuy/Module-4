import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PettComponent } from './pett.component';

describe('PettComponent', () => {
  let component: PettComponent;
  let fixture: ComponentFixture<PettComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PettComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PettComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
