import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPage } from './detail.page';
import { DetailRoutingModule } from './detail-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailRoutingModule
  ],
  declarations: [DetailPage]
})
export class DetailPageModule {}
