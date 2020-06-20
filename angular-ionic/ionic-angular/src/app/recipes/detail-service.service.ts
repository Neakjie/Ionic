import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailServiceService {
  private recipes:Recipe[] = [
    {
      id:"1",
      title:"Pasha",
      imageUrl:'/assets/116224.jpg',
      ingredients:['P','a','s','h','a']
    },
    {
      id:"2",
      title:"Tara",
      imageUrl:'/assets/116476.jpg',
      ingredients:['T','a','r','a']
    },
    {
      id:"3",
      title:"Who",
      imageUrl:'/assets/Teresa-Clare-Wallpaper-claymore-anime-and-manga-28699362-1280-1024.jpg',
      ingredients:['W','h','o']
    }
  ]
  private messageDataSource = new BehaviorSubject<Recipe[]>(this.recipes);
  currentMessageData = this.messageDataSource.asObservable(); 
  constructor() { }

  getAll(){
    return [...this.recipes]
  }

  getDetail(id:string){
      return {...this.recipes.find(data => {
        return data.id === id;
      })
    };
  }

  removeDetail(id:string){
    this.recipes = this.recipes.filter(data => {
      return data.id !== id
    })
    this.messageDataSource.next(this.recipes)
  }

  getChangedMessage(){
    this.messageDataSource.next(this.recipes)
  }
}
