import { Component, OnInit } from '@angular/core';

import { DocumentService } from '../../services/document.service';
import { MeetingService } from '../../services/meeting.service';

import { Meeting } from '../../../interface/meeting';

import { BASE_URL } from '../../config';

@Component({
	selector: 'cba-executive-council',
	templateUrl: './executive-council.component.html',
	styleUrls: ['./executive-council.component.css']
})
export class ExecutiveCouncilComponent implements OnInit {

	public docExecCouncil: string;
	public meetings: Array<Meeting>;

	constructor(
		private docService: DocumentService,
		private meetingService: MeetingService
	) { }

	ngOnInit() {
		this.docService.getById(1)
			.then((response) => {
				this.docExecCouncil = response.document;
				this.meetingService.getByCategory('conselho-executivo')
					.then((responseMeeting) => {
						this.meetings = responseMeeting;
					})
					.catch((error) => {
						console.log(error);
					});
			})
			.catch((error) => {
				console.log(error);
			});
	}

}
