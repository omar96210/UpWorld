import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainsvgComponent } from './mainsvg.component';

describe('MainsvgComponent', () => {
  let component: MainsvgComponent;
  let fixture: ComponentFixture<MainsvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainsvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainsvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
