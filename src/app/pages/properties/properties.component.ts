import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
declare var $: any;

@Component({
	selector: 'cba-properties',
	templateUrl: './properties.component.html',
	styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		(function($){
			$('.gallery').each(function() { // the containers for all your galleries
				$(this).magnificPopup({
					delegate: 'a', // the selector for gallery item
					type: 'image',
					gallery: {
						enabled: true
					}
				});
			});
		})(jQuery);
	}

}
