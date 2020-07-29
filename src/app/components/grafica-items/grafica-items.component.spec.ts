import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaItemsComponent } from './grafica-items.component';

describe('GraficaItemsComponent', () => {
  let component: GraficaItemsComponent;
  let fixture: ComponentFixture<GraficaItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
