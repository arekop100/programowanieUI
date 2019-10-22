import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class RegisterComponent {
  registerForm = new FormGroup { {
  loginName: new FormControl(''),
  password: new FromControl(''),
  });
  }

  ngOnInit() {
  }

}
