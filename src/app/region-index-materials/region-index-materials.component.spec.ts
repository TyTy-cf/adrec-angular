import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionIndexMaterialsComponent } from './region-index-materials.component';

describe('RegionIndexMaterialsComponent', () => {
  let component: RegionIndexMaterialsComponent;
  let fixture: ComponentFixture<RegionIndexMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionIndexMaterialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionIndexMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
