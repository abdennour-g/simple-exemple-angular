import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { UserJson, Users } from '../ent/User';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-supprimer',
  templateUrl: './supprimer.component.html',
  styleUrls: ['./supprimer.component.scss']
})
export class SupprimerComponent implements OnInit {
  @Input() userdel:Users[]=[]; 
  @Input() selected:number=-1;
  constructor(private httpClient: HttpClient,private tab:UserComponent) { }

  ngOnInit(): void {
 
 }
 
  remove(){
   if(confirm('vous voulez supprimer ?')) this.httpClient.delete(this.tab.url+this.selected).subscribe(
    data => {
      console.log('suppression avec succès !');
      this.tab.charger();
    },error =>{
      console.log('erroooor');
    }
  );
  
  }
}
