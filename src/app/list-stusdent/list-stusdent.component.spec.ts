import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStusdentComponent } from './list-stusdent.component';

describe('ListStusdentComponent', () => {
  let component: ListStusdentComponent;
  let fixture: ComponentFixture<ListStusdentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStusdentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStusdentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
