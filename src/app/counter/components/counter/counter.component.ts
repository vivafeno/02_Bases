import { Component } from '@angular/core';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css' ,
  standalone: false,
})
export class CounterComponent {
  
  public title: string = 'Mi primera App Angular';
  public counter: number = 10;

  increaseBy(value: number = 1): void {
    this.counter +=value;
  }

  decreaseBy(value: number = 1): void {
    this.counter -= value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
