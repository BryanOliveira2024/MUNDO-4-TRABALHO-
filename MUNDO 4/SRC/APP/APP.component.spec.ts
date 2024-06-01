/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { APPComponent } from './APP.component';

describe('APPComponent', () => {
  let component: APPComponent;
  let fixture: ComponentFixture<APPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
