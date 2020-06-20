import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailServiceService } from '../detail-service.service';
import { Recipe } from '../recipe.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  detail:Recipe;
  constructor(private activatedRoute:ActivatedRoute,
    private detailService:DetailServiceService,
    private router: Router,
    private alerCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(data => {
      if(!data.has('recipeId')){
        return;
      }
      const recipeId = data.get('recipeId');
      this.detail= this.detailService.getDetail(recipeId);
    })
  }

  onDelete(){
    this.alerCtrl.create({
      header:'Are you sure?',
      message:'Do you really want to delete ' + this.detail.title +" ?",
      buttons:[
        {
          text:'No',
          role:'cancel'
        },
        {
          text:'Delete',
          handler:() => {
            this.detailService.removeDetail(this.detail.id);
            this.router.navigate(['/recipes']);
          }
        }
      ]
    }).then(alertEl =>{
      alertEl.present();
    })
    
  }

}
