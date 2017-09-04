import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { BASE_URL } from '../../config';

import { Community } from '../../../interface/community';
import { CommunityService } from '../../services/community.service';

@Component({
	selector: 'cba-community-detail',
	templateUrl: './community-detail.component.html',
	styleUrls: ['./community-detail.component.css']
})
export class CommunityDetailComponent implements OnInit {

	public community: Community;
	private apiUrl: string = BASE_URL;

	constructor(
		private communityService: CommunityService,
		private activatedRoute: ActivatedRoute
	) {}

	ngOnInit() {
		this.communityService.getBySlug(this.activatedRoute.snapshot.params['slug'])
			.then((response) => {
				response.image = this.apiUrl + response.image;
				this.community = response;
			})
			.catch((error) => {
				console.log(error);
			});
	}

}
