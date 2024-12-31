import { Injectable } from '@angular/core';

import { Character } from '../interfaces/character.interface';

import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 15000,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 14000,
    },
    {
      id: uuid(),
      name: 'Trunks',
      power: 13000,
    },
    {
      id: uuid(),
      name: 'Gohan',
      power: 12000,
    },
    {
      id: uuid(),
      name: 'Piccolo',
      power: 11000,
    },
    {
      id: uuid(),
      name: 'Krillin',
      power: 10000,
    },
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = { ...character, id: uuid() };
    console.log(newCharacter);
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById(id: string): void {
    console.log(id)
    // Devuelve todos los caracteres excepto el que tiene el id que se pasa como argumento
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
