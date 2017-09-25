import { Component, OnInit } from '@angular/core';
// import {Router, ActivatedRoute, Params} from '@angular/router';
import { BASE_URL } from '../../config';
import { Gallery } from '../../../interface/gallery';
import { DataService } from '../../services/data.service';

declare var jquery: any;
declare var $: any;
declare var MaterialPhotoGallery: any;

@Component({
	selector: 'cba-gallery-detail',
	templateUrl: './gallery-detail.component.html',
	styleUrls: ['./gallery-detail.component.css']
})
export class GalleryDetailComponent implements OnInit {

	public gallery: Gallery;

	constructor(
		private dataService: DataService,
	) {}

	ngOnInit() {
		$(document).ready(function() {
			$('.popup-gallery').magnificPopup({
				delegate: 'a',
				type: 'image',
				tLoading: 'Loading image #%curr%...',
				mainClass: 'mfp-img-mobile',
				gallery: {
					enabled: true,
					navigateByImgClick: true,
					preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
				},
				image: {
					tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
					titleSrc: function(item) {
						return item.el.attr('title') + '<small>' + item.el.attr('description') + '</small>';
					}
				}
			});
			$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
				disableOn: 700,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,

				fixedContentPos: false
			});
		});
		// $('.gallery-link').magnificPopup({
		// 	type: 'image',
		// 	closeOnContentClick: true,
		// 	closeBtnInside: false,
		// 	mainClass: 'mfp-with-zoom mfp-img-mobile',
		// 	image: {
		// 		verticalFit: true,
		// 		titleSrc: function(item) {
		// 			return item.el.find('figcaption').text() || item.el.attr('title');
		// 		}
		// 	},
		// 	zoom: {
		// 		enabled: true
		// 	},
		// 	gallery: {
		// 		enabled: true,
		// 		navigateByImgClick: false,
		// 		tCounter: ''
		// 	},
		// 	disableOn: function() {
		// 		if ($(window).width() < 640) {
		// 			return false;
		// 		}
		// 		return true;
		// 	}
		// });
	}

}
