import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacorreoComponent } from './listacorreo.component';

describe('ListacorreoComponent', () => {
  let component: ListacorreoComponent;
  let fixture: ComponentFixture<ListacorreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListacorreoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListacorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
