import { Component, OnInit } from '@angular/core';

import { MeetingService } from '../../services/meeting.service';

import { Meeting } from '../../../interface/meeting';

import { BASE_URL } from '../../config';

@Component({
	selector: 'cba-notice',
	templateUrl: './notice.component.html',
	styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {

	public notices: Array<Meeting>;

	constructor(
		private meetingService: MeetingService
	) { }

	ngOnInit() {
		this.meetingService.getByCategory('edital')
			.then((response) => {
				this.notices = response;
			})
			.catch((error) => {
				console.log(error);
			});
	}

}
