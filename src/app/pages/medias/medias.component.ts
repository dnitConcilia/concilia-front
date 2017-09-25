import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gallery } from '../../../interface/gallery';
import { GalleryService } from '../../services/gallery.service';
import { DataService } from '../../services/data.service';


@Component({
	selector: 'cba-medias',
	templateUrl: './medias.component.html',
	styleUrls: ['./medias.component.css']
})
export class MediasComponent implements OnInit {

	public galleries: Array<Gallery>;

	constructor(
		private router: Router,
		private dataService: DataService,
		private galleryService: GalleryService
	) { }

	ngOnInit() {
		this.galleryService.getAll()
			.then((response) => {
				this.galleries = response;
			})
			.catch((err) => {
				console.log(err);
			});
	}

	public goGallery(object: Gallery) {
		this.dataService.clean();
		this.dataService.set(object);
		this.router.navigate(['/acervo', object.slug]);
	}

}
