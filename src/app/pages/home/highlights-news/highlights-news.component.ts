import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../services/news.service';
import { News } from '../../news/news';
import { BASE_URL } from '../../../config';

declare var jquery: any;
declare var $: any;

@Component({
	selector: 'cba-highlights-news',
	templateUrl: './highlights-news.component.html',
	styleUrls: ['./highlights-news.component.css']
})
export class HighlightsNewsComponent implements OnInit {

	public news: Array<News>
	public basePathImage = BASE_URL;

	constructor(private newsService: NewsService) { }

	ngOnInit() {
		this.newsService.lastSix()
			.then((response) => {
				this.news = response;
			})
			.catch(err => console.log(err));
		try {
			$('.tile').show();
			$('#portfoliowork').mixItUp({
				selectors: {
					target: '.tile',
					filter: '.filter',
					sort: '.sort-btn'
				},
				animation: {
					animateResizeContainer: false,
					effects: 'fade scale'
				}

			});
		}catch (e) {}
	}

}
