import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { STATIC_URL } from '../../config';
import { News } from '../news/news';
import { NewsService } from '../../services/news.service';

declare var jquery: any;
declare var $: any;

@Component({
	selector: 'cba-news-detail',
	templateUrl: './news-detail.component.html',
	styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

	public news: News;
	private apiUrl: string = STATIC_URL;

	constructor(
		private newsService: NewsService,
		private activatedRoute: ActivatedRoute
	) {}

	ngOnInit() {
		this.newsService.getBySlug(this.activatedRoute.snapshot.params['slug'])
			.then((response) => {
				response.image = this.apiUrl + response.image;
				this.news = response;
				console.log(response);
			});
		$('#show-modal-concilia').hover(function() {
			$('.modal').modal('show');
		});
	}

}
