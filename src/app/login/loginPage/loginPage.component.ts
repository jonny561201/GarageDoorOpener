import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login-page',
  templateUrl: './loginPage.component.html',
  styleUrls: ['./loginPage.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  public onSubmit(form: NgForm) {
    console.log(form);
  }
}
