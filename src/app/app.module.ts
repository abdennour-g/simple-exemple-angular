import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, NgControlStatus } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { SupprimerComponent } from './supprimer/supprimer.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';

/*import {MatFormFieldModule} from '@angular/material/form-field';//npm install --save @angular/material ; npm install ngx-mat-select-search
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
*/
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    FormulaireComponent,
    SupprimerComponent,
    UpdateuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
   HttpClientModule,
    FormsModule,
  /*  MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    NgControlStatus*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
