import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { NewsService } from '../../services/news.service';
import { News } from './news';

@Component({
	selector: 'cba-news',
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

	public news: Array<News>;
	constructor(
		private newsService: NewsService,
		private activatedRoute: ActivatedRoute
	) { }

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
