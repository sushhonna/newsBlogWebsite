import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenewsComponent } from './createnews.component';

describe('CreatenewsComponent', () => {
  let component: CreatenewsComponent;
  let fixture: ComponentFixture<CreatenewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatenewsComponent]
    });
    fixture = TestBed.createComponent(CreatenewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
