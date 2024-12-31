import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [];

  // Output es un decorador que permite emitir eventos
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  // Método que elimina un personaje de la lista
  onDeleteCharacter(id?: string): void {   
    if (!id) return;
    this.onDelete.emit(id);
  }
}
