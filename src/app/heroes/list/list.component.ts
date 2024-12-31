import { Component } from '@angular/core';
import { SequenceError } from 'rxjs';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['ironman', 'spiderman', 'thor', 'hulk', 'capitan america']; 
  public deletedHero?: string;

  borrarUltimoHeroe(): void {
    this.deletedHero = this.heroNames.pop();
  }


}
