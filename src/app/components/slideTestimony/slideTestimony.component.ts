import { Component, OnInit, Input } from '@angular/core';
import { Testimony } from '../../../interface/testimony';
import { BASE_URL } from '../../config';
import { TestimonyService } from '../../services/testimony.service';

@Component({
	selector: 'cba-slide-testimony',
	templateUrl: './slideTestimony.component.html',
	styleUrls: ['./slideTestimony.component.css'],
})
export class SlideTestimonyComponent implements OnInit {
	public basePathImage = BASE_URL;
	public testimonys: Array<Testimony>;
	constructor(private testimonyService: TestimonyService) { }

	ngOnInit() {
		this.testimonyService.lastFive()
			.then((response) => {
				this.testimonys = response;
				console.log(this.testimonys);
			})
			.catch(err => console.log(err));
	}

}
