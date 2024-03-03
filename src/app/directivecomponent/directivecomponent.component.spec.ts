import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivecomponentComponent } from './directivecomponent.component';

describe('DirectivecomponentComponent', () => {
  let component: DirectivecomponentComponent;
  let fixture: ComponentFixture<DirectivecomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectivecomponentComponent]
    });
    fixture = TestBed.createComponent(DirectivecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
