import { Component, OnInit } from '@angular/core';
import { Character } from '../character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

	character: Character = {
		id: 1,
		name: 'Saladino',
		militarGrade: 'Sultan de Egipto y Siria' 
	};
	constructor(){ }
	ngOnInit(){ }
}
