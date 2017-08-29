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

	public events: Array<{item1: Timeline, item2: Timeline, item3: Timeline, item4: Timeline}> = [];
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
				// this.events = response;
				const timelineVoid: Timeline = {
					id: 0,
					title: '',
					date: '',
					text: '',
					image: '',
					legend_image: ''
				};
				console.log(response.length);
				const decimal = (response.length / 4) % 1;
				if (decimal === 0) {
					this.n_events = this.utils.range(0, (response.length / 4) - 1);
				} else {
					this.n_events = this.utils.range(0, (response.length / 4));
				}
				for (let i = 0; i < response.length; i += 4) {
					this.events.push(
						{
							item1: response[i] || timelineVoid,
							item2: response[i + 1] || timelineVoid,
							item3: response[i + 2] || timelineVoid,
							item4: response[i + 3] || timelineVoid
						}
					);
				}
				console.log(this.events);
			})
			.catch((error) => {
				console.log(error);
			});
	}

}
