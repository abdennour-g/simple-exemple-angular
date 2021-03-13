import { Component, Injectable, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserJson, Users } from '../ent/User';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  url:string='http://localhost:8050/users';
@Input() users:Users[]=[];
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
   this. charger();
  }
charger(){
  this.httpClient.get(this.url).subscribe(
    data => {
    let userJson:UserJson=data as UserJson;
    this.users=  userJson._embedded.users;
   
    },error =>{
      console.log('erroooor')
    }
  );
}
}
