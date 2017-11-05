import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotationBoxComponent } from './annotation-box.component';

describe('AnnotationBoxComponent', () => {
  let component: AnnotationBoxComponent;
  let fixture: ComponentFixture<AnnotationBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnotationBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnotationBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
