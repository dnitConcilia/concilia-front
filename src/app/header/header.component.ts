import { Component, OnInit } from '@angular/core';
import { Community } from '../../interface/community';


@Component({
	selector: 'cba-header',
	templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

	public communities: Array<Community> = [
		{
			id: 1,
			title: 'vila Bom Destino',
			text: '',
			lat: '',
			lng: '',
			slug: 'vila-bom-destino'
		},
		{
			id: 2,
			title: 'vila da Luz',
			text: '',
			lat: '',
			lng: '',
			slug: 'vila-da-luz'
		}
	];

	constructor() {}

	ngOnInit() {
	}

}
