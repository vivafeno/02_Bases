import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name : string = 'ironman';
  public age  : number = 35;
  public showChangeName: boolean = true;
  public showChangeAge: boolean = true;

   get capitalizedName(): string {
    return this.name.toUpperCase();    
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age} años`;
  }

  changeHero(): void {
    this.name = 'Spiderman'
    this.showChangeName = false;
  }

  changeAge(): void {
    this.age = 47;
    this.showChangeAge = false;
  } 
  resetForm(): void {
    this.name = 'ironman';
    this.age = 35;
    this.showChangeName = true;
    this.showChangeAge = true;
  }


}
