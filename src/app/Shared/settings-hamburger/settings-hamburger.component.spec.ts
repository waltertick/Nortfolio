import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsHamburgerComponent } from './settings-hamburger.component';

describe('SettingsHamburgerComponent', () => {
  let component: SettingsHamburgerComponent;
  let fixture: ComponentFixture<SettingsHamburgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsHamburgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsHamburgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
