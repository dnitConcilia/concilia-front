import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';

import { BASE_URL } from '../../config';

import { Community } from '../../../interface/community';
import { CommunityService } from '../../services/community.service';

declare var jquery: any;
declare var $: any;

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
		private router: Router,
		private activatedRoute: ActivatedRoute
	) {
		router.events.subscribe((val) => {
			if (val instanceof NavigationEnd) {
				this.communityService.getBySlug(this.activatedRoute.snapshot.params['slug'])
					.then((response) => {
						response.image = this.apiUrl + response.image;
						this.community = response;
						$('.popup-gallery').magnificPopup({
							delegate: 'a',
							type: 'image',
							tLoading: 'Carregando imagem #%curr%...',
							mainClass: 'mfp-img-mobile',
							gallery: {
								enabled: true,
								navigateByImgClick: true,
								preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
							},
							image: {
								tError: '<a href="%url%">The image #%curr%</a> A imagem não pode ser carregada.',
								titleSrc: function(item) {
									return item.el.attr('title') + '<small>' + item.el.attr('description') + '</small>';
								}
							}
						});
					})
					.catch((error) => {
						console.log(error);
					});
			}
		});
	}

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
