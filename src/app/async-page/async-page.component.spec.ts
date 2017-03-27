import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncPageComponent } from './async-page.component';

describe('AsyncPageComponent', () => {
  let component: AsyncPageComponent;
  let fixture: ComponentFixture<AsyncPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
