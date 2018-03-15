import { Component, OnInit } from '@angular/core';
import { TestimonyService } from '../../../services/testimony.service';
import { Testimony } from '../../../../interface/testimony';
import { BASE_URL } from '../../../config';

declare var jQuery: any;
declare var $: any;

@Component({
	selector: 'cba-testimony',
	templateUrl: './testimony.component.html',
	styleUrls: ['./testimony.component.css']
})
export class TestimonyComponent {
	constructor() {
	}

}
