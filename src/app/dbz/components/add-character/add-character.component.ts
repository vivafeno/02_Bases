import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  standalone: false,
  
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class CharacterComponent {

  // Output es un decorador que permite emitir eventos
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter(): void {
    
    // Si el nombre del personaje es vacío, no se emite el evento
    if ( this.character.name.length === 0 ) return;
    
    // Emite el evento onNewCharacter con el valor de this.character
    this.onNewCharacter.emit(this.character);

    // Resetea el valor de this.character
    this.character = {name: '', power: 0};
  }
}
