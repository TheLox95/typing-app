import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphListComponent } from './paragraph-list.component';

describe('ParagraphListComponent', () => {
  let component: ParagraphListComponent;
  let fixture: ComponentFixture<ParagraphListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParagraphListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParagraphListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
