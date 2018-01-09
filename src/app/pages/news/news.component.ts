import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';

import { BASE_URL } from '../../config';

import { NewsService } from '../../services/news.service';
import { News } from './news';

@Component({
	selector: 'cba-news',
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

	public news: Array<News>;
	public basePathImage = BASE_URL;
	
	constructor(
		private newsService: NewsService,
		private activatedRoute: ActivatedRoute,
		private router: Router,
	) {
		router.events.subscribe((val) => {
			if (val instanceof NavigationEnd) {
				const category_id = this.activatedRoute.snapshot.params['id'];
				if (category_id === undefined) {
					this.newsService.getAll()
					.then((response) => {
						this.news = response;
					});
				} else {
					this.newsService.getByCategoryId(category_id)
						.then((response) => {
							this.news = response;
						});
				}
			}
		});
	}

	ngOnInit() {
		const category_id = this.activatedRoute.snapshot.params['id'];
		if (category_id === undefined) {
			this.newsService.getAll()
			.then((response) => {
				this.news = response;
			});
		} else {
			this.newsService.getByCategoryId(category_id)
				.then((response) => {
					this.news = response;
				});
		}
	}

}
