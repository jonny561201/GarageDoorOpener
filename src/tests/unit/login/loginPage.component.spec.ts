import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { LoginPageComponent } from '../../../app/login/loginPage/loginPage.component';
import {FormsModule} from "@angular/forms";

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
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
      expect(compiled.querySelector('input#username')).toBeTruthy();
      expect(compiled.querySelector('input#password')).toBeTruthy();
    });

    it('should have a submit button to transmit login credentials', () => {
      const fixture = TestBed.createComponent(LoginPageComponent);
      fixture.detectChanges();

      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('button#submit')).toBeTruthy();
    });

    it('should display error message when no username supplied', fakeAsync(() => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const initialParagraph = compiled.querySelector('p');
      expect(initialParagraph).toBeFalsy();

      let userName = compiled.querySelector('#username');
      userName.value = 'test';
      // userName.touched = true;
      userName.dispatchEvent(new Event('input'));
      // userName.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      tick();

      userName = compiled.querySelector('#username');

      debugger;
      expect(userName.value).toEqual('test');
      const updatedParagraph = compiled.querySelector('p');
      expect(updatedParagraph.textContent).toContain('Username is required')
    }));
  });
});
