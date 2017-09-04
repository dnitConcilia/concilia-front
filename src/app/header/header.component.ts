import { Component, OnInit } from '@angular/core';
import { Community } from '../../interface/community';
import { CommunityService } from '../services/community.service';


@Component({
	selector: 'cba-header',
	templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

	public communities: Array<Community> = [];

	constructor(private communityService: CommunityService) {}

	ngOnInit() {
		this.communityService.getAll()
			.then((response) => {
				this.communities = response;
			});
	}

}
