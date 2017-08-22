import { Component, OnInit } from '@angular/core';
import { Timeline } from '../../../../interface/timeline';
import { TimelineService } from '../../../services/timeline.service';
import { STATIC_URL } from '../../../config';
import { Utils } from '../../../utils/utils';

@Component({
	selector: 'cba-timeline',
	templateUrl: './timeline.component.html',
	styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

	public events: Array<Timeline> = [];
	public n_events: Array<number>;
	private utils: Utils;
	public basePathImage = STATIC_URL;

	constructor(
		private timelineService: TimelineService
	) {
		this.utils = new Utils();
	}

	ngOnInit() {
		this.timelineService.getAll()
			.then((response) => {
				this.events = response;
				const decimal = (response.length / 4) % 1;
				if (decimal === 0) {
					this.n_events = this.utils.range(1, response.length / 4);
				} else {
					this.n_events = this.utils.range(1, (response.length / 4) + 1);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}

}
