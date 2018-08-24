import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isFormSubmmited = false;
  userObj = {
    email: 'test@mailinator.com',
    password: '1234'
  };
  constructor( private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    console.log('on click----1');
    this.router.navigate(['/dashboard']);
  }

}
