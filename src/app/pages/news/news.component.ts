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
		private newsService: NewsService
	) { }

	ngOnInit() {
		this.newsService.getAll()
			.then((response) => {
				this.news = response;
			});
	}

}
