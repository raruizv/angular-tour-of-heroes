import { Component, OnInit } from '@angular/core';
import { Character } from '../character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

	saladino: Character = {
		id: 1,
		name: 'Saladino',
		description: 'Uno de los mas reconocidos lideres militares del medioevo. Monarca de la dinastia de los Ayubies y conquistador musulman en Oriente Medio',
		militarGrade: 'Sultan de Egipto y Siria',
		makings: 'Estrategia eficaz, diplomacia, generosidad, entre otras',
		battle: 'Cuernos de Hattin'		
	};
	
	rommel: Character = {
		id: 2,
		name: 'Erwin Rommel',
		description: 'Apodado el \'zorro del desierto\' por la tropas aliadas. Hizo del frente africano un terreno de combate prolongado y desgastante. Acusado de conspirar contra el régimen nazi',
		militarGrade: 'Mariscal de campo Ejercito Alemán',
		makings: 'Liderazgo, formacion y criterio; decisiones sorpresa',
		battle: 'El Alamein'		
	};
	
	constructor(){ }
	ngOnInit(){ }
}
