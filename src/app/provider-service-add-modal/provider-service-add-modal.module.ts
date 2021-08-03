import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderServiceAddModalRoutingModule } from './provider-service-add-modal-routing.module';
import { ProviderServiceAddModalComponent } from './provider-service-add-modal.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [ProviderServiceAddModalComponent],
  imports: [
    CommonModule,
    ProviderServiceAddModalRoutingModule,
    MatDialogModule
  ]
})
export class ProviderServiceAddModalModule { }
