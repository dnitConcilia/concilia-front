import { Component, OnInit } from '@angular/core';

import { BASE_URL } from '../../config';
import { Notice } from '../../../interface/notice';
import { NoticeService } from '../../services/notice.service';

@Component({
	selector: 'cba-notice',
	templateUrl: './notice.component.html',
	styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {

	public notices: Array<Notice>;
	public noticesConcorrencia: Array<Notice> = [];

	constructor(
		private noticeService: NoticeService
	) { }

	ngOnInit() {
		this.noticeService.getAll()
			.then((response) => {
				this.notices = response;
				for (let i = 0; i < response.length; i++) {
					if (response[i].noticeType.name === 'Concorrência pública') {
						this.noticesConcorrencia.push(response[i]);
					}
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}

}
