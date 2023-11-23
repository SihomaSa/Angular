import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
@Component({
  selector:'app-dbz-main-page',
  templateUrl:'./main-page.component.html',
  styleUrls:['./main-page.component.css']

})

export class MainPageComponent{
  public characters: Character[]=[{
    name: 'Goku',
    power: 10
  },{
    name: 'Vegeta',
    power: 8
  },{
    name: 'Krilin',
    power: 9
  }
];
  onNewCharacter(character:Character):void{
    console.log('MainPage');
    console.log(character)
  }
}
