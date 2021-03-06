import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { RegisterPage } from './register.page';

// new 

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: RegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule],
  exports: [RouterModule],
})
export class RegisterPageRoutingModule {}
