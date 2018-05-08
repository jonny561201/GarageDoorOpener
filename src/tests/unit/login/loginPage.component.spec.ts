import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from '../../../app/login/loginPage/loginPage.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('LoginForm', () => {
    it('should have username and password login inputs', () => {
      const fixture = TestBed.createComponent(LoginPageComponent);
      fixture.detectChanges();

      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('#username')).toBeTruthy();
      expect(compiled.querySelector('#password')).toBeTruthy();
    });
  });
});
