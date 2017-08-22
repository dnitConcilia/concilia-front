import { Component, OnInit } from '@angular/core';
import { Timeline } from '../../../../interface/timeline';
import { TimelineService } from '../../../services/timeline.service';
import { STATIC_URL } from '../../../config';

@Component({
	selector: 'cba-timeline',
	templateUrl: './timeline.component.html',
	styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

	public events: Array<Timeline> = [];
	public basePathImage = STATIC_URL;

	constructor(
		private timelineService: TimelineService
	) {}

	ngOnInit() {
		this.timelineService.getAll()
			.then((response) => {
				console.log(response);
				this.events = response;
			})
			.catch((error) => {
				console.log(error);
			});
	}

}
