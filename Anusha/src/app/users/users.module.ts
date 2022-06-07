import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { MaterialModule } from '../material/material.module';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
    UsersComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
    UsersRoutingModule,
    // FormsModule,
    // ReactiveFormsModule
  ]
})
export class UsersModule { }
