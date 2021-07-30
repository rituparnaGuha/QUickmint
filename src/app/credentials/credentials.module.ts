import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CredentialsRoutingModule } from './credentials-routing.module';
import {CredentialsComponent } from './credentials.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
//import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CKEditorModule } from 'ckeditor4-angular';


@NgModule({
  declarations: [CredentialsComponent],
  imports: [
    CommonModule,
    CredentialsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule
  ]
})
export class CredentialsModule { }
