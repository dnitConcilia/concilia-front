import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { GalleryDetailComponent } from './gallery-detail.component';
import { ROUTES } from './gallery-detail.routes';
import { GalleryService } from '../../services/gallery.service';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(ROUTES),
	],
	declarations: [
		GalleryDetailComponent
	],
	providers: [
		GalleryService
	]
})
export class GalleryDetailModule { }
