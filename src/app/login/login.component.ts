import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatFormField } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userObj: any;
  loginForm: FormGroup;
  isFormSubmmited = false;

  constructor( private router: Router) { }

  ngOnInit() {
  }

  onLogin(user) {
    console.log('on click----');
  }

}
