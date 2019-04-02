import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  signin="Sigin";
  email:any;
  pwd:any;
  ngOnInit() {
  }
  login(){
    console.log(this.email);
    console.log(this.pwd);
    
  }

}

