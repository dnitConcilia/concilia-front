import { Component, OnInit } from '@angular/core';
import { TestimonyService } from '../../../services/testimony.service';
import { Testimony } from '../../../../interface/testimony';
import { BASE_URL } from '../../../config';

declare var jquery: any;
declare var $: any;

@Component({
	selector: 'cba-testimony',
	templateUrl: './testimony.component.html',
	styleUrls: ['./testimony.component.css']
})
export class TestimonyComponent implements OnInit {

	public testimonys: Array<Testimony>;
	public basePathImage = BASE_URL;

	constructor(private testimonyService: TestimonyService) { }

	ngOnInit() {
		this.testimonyService.getAll()
			.then((response) => {
				this.testimonys = response;
			/*	try {
				} catch (e) { }*/
			})
			.catch(err => console.log(err));
	}

}
