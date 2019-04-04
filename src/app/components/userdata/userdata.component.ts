import { Component, OnInit } from '@angular/core';
import { DataservicesService } from 'src/app/services/dataservices.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css'],
  providers:[DataservicesService]
})
export class UserdataComponent implements OnInit {

  constructor(public DataservicesService:DataservicesService) { }
  users:any;
  ngOnInit() {
    this.DataservicesService.getdata().subscribe(data=>{
      this.users =data;
      console.log(this.users);
    });
  }

}
