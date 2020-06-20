import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { DetailServiceService } from './detail-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
 recipes:Recipe[];
  constructor(private detailService:DetailServiceService) { 
    
   }

  ngOnInit() {
    this.detailService.getAll()
     this.detailService.currentMessageData.subscribe(
      data=>{
        if(data){
          console.log(data);
          
          this.recipes = data
        }
      }
    )
  }

}
