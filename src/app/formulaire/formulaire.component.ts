import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SupprimerComponent } from '../supprimer/supprimer.component';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  constructor(private httpClient: HttpClient,private tab:UserComponent) { }

  ngOnInit(): void {
  }
  save(form:NgForm){
    this.httpClient.post(this.tab.url, form.value).subscribe(
      data => {
        console.log('enregistrement avec succes !');
        this.tab.charger();
     },error =>{
        console.log('erroooor')
      }
    );
  }
}
