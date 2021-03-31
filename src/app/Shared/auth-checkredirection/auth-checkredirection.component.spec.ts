import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthCheckredirectionComponent } from './auth-checkredirection.component';

describe('AuthCheckredirectionComponent', () => {
  let component: AuthCheckredirectionComponent;
  let fixture: ComponentFixture<AuthCheckredirectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthCheckredirectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthCheckredirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
