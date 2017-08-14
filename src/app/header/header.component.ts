import { Component, OnInit } from '@angular/core';

import { Community } from '../../interface/community.interface';

@Component({
	selector: 'cba-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	public communitys: Array<Community> = [
		{
			name: 'vila Bom Destino',
			url: 'vila-bom-destino',
			description: 'A comunidade Bom Destino pertence ao município de Santa Luzia, na Grande BH. É um dos bairros mais isolados do município, a cerca de 20 Km  do centro da cidade.'
		},
		{
			name: 'vila da Luz',
			url: 'vila-da-luz',
			description: 'A vila da Luz está localizada no final do Anel Rodoviário, que é uma das vias mais movimentadas de Belo Horizonte, entre as rodovias BR-262 e BR-381.'
		}
	];

	constructor() {}

	ngOnInit() {
	}

}
