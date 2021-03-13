import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserJson, Users } from '../ent/User';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.scss']
})
export class UpdateuserComponent implements OnInit {

  @Input() selected:number=-1;
  @Input()  userup:Users[]=[]; 
  constructor(private httpClient: HttpClient,private tab:UserComponent) { }

  ngOnInit(): void {
   }  
 
  update(form:NgForm){
    this.httpClient.put(this.tab.url+this.selected, form.value).subscribe(
      data => {
        console.log('mise à jour avec succes !');
        this.tab.charger();
      },error =>{
        console.log('erroooor')
      }
    );
  }
  getUser(id:number) :Users{
    const us = this.userup.find(
      function (appSrch) {
        return appSrch.id == id;
      }
    );
    return us as Users;
  }
  
}
