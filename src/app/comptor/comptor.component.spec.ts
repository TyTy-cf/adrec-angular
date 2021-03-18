import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptorComponent } from './comptor.component';

describe('ComptorComponent', () => {
  let component: ComptorComponent;
  let fixture: ComponentFixture<ComptorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComptorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
