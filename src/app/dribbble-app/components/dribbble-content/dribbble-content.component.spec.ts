import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DribbbleContentComponent } from './dribbble-content.component';

describe('DribbbleContentComponent', () => {
  let component: DribbbleContentComponent;
  let fixture: ComponentFixture<DribbbleContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DribbbleContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DribbbleContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
