import { Component, OnInit } from '@angular/core';

declare var jquery: any;
declare var $: any;

@Component({
	selector: 'cba-highlights-news',
	templateUrl: './highlights-news.component.html',
	styleUrls: ['./highlights-news.component.css']
})
export class HighlightsNewsComponent implements OnInit {

	constructor() { }

	ngOnInit() {
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
