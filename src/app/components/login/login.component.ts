import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { }
  signin:any;
  // name:any;
  // pwd:any;
  ngOnInit() {
    this.signin="Sigin";
  }
  // profileForm = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl('')
  // });

  data: any = {};

  onSubmit(f) {
    console.log(f.name);
    console.log(f.pass);
if(f.name=="admin"&&f.pass=="admin"){
  console.log("true");
  this.router.navigate(['Home']);
}
  }
}

  // login(){
  //   // console.log(this.profileForm);
  //   // console.log(this.pwd);
    
  // }



