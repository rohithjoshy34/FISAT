import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataservicesService {

  constructor(public httpclient:HttpClient) { }
abc:any;
  getdata(){
     return this.httpclient.get('https://reqres.in/api/users')
    console.log(this.abc);
  }
}

