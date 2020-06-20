import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipesPage } from './recipes.page';
import { RecipeRoutingModule } from './recipe-routing.module';
import { DetailServiceService } from './detail-service.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeRoutingModule
  ],
  declarations: [RecipesPage]
})
export class RecipesPageModule {}
