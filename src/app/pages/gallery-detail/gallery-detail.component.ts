import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';

import { BASE_URL } from '../../config';
import { Gallery } from '../../../interface/gallery';
import { GalleryService } from '../../services/gallery.service';

declare var jquery: any;
declare var $: any;
// declare var MaterialPhotoGallery: any;

@Component({
	selector: 'cba-gallery-detail',
	templateUrl: './gallery-detail.component.html',
	styleUrls: ['./gallery-detail.component.css']
})
export class GalleryDetailComponent implements OnInit {

	public gallery: Gallery;

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private galleryService: GalleryService,
	) {
		router.events.subscribe((val) => {
			if (val instanceof NavigationEnd) {
				this.galleryService.getBySlug(this.activatedRoute.snapshot.params['slug'])
					.then((response) => {
						this.gallery = response;
					})
					.catch((error) => {
						console.log(error);
					});
			}
		});
	}

	ngOnInit() {
		this.galleryService.getBySlug(this.activatedRoute.snapshot.params['slug'])
			.then((response) => {
				console.log(response);
				this.gallery = response;
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
			.catch((err) => console.log(err));
	}

}
