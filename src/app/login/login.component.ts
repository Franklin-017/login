import { users } from '../Users';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  name: string = ''
  password: string = ''

  loginForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private router:Router) {}

  ngOnInit() {

  }

onSubmit() {
    this.name = this.loginForm.value.name
    this.password = this.loginForm.value.password

    const user = users.filter((u => u.name === this.name))

    if( user.length && user[0].password === this.password){
      console.log('Logged In!')
      this.loginForm.reset()
      localStorage.setItem("role", user[0].role )
      this.router.navigate(['/dashboard'])
    }

    else {
      console.log("Invalid Credientials!")
    }
  }
}
