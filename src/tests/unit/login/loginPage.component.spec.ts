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

    it('should display error message when no username supplied', async(() => {
      const compiled = fixture.debugElement.query(By.css('#username'));
      compiled.nativeElement.value = 'test';
      compiled.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      const inEl =  fixture.debugElement.query(By.css('#username'));
      expect(inEl.nativeElement.value).toContain('test')
    }));
  });
});
