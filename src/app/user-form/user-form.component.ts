import { Component, OnInit } from '@angular/core';
import {User} from '../user-class/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  newUser=new User("")
  constructor() { }

  ngOnInit() {
  }

}
