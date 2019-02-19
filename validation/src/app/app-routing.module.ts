import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 import {RegistrationFormComponent} from "./registration-form/registration-form.component";
const routes: Routes = [{path:"Registration", component:RegistrationFormComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
