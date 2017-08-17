import { Component, OnInit } from '@angular/core';
import { EventTimeline } from './event-timeline.interface';

@Component({
	selector: 'cba-timeline',
	templateUrl: './timeline.component.html',
	styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

	public items: Array<EventTimeline> = [
		{id: 1, title: 'string', date: 'string', text: 'string', hasImage: false},
		{id: 2, title: 'string', date: 'string', text: 'string', hasImage: false}
	];

	constructor() {}

	ngOnInit() {
	}

}
