import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  ngOnInit(): void {
    
  }
  profileForm = new FormGroup({
    firstName: new FormControl('')
  });

  todoArray: string[] = [];

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.todoArray.push(this.profileForm.value);
    console.log(this.profileForm.value);
    
  }
  onDeleteItem(index) {
    this.todoArray.splice(index, 1);
  }


}