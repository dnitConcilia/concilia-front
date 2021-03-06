import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { ROUTES } from './medias.routes';
import { MediasComponent } from './medias.component';
import { GalleryService } from '../../services/gallery.service';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(ROUTES),
	],
	declarations: [MediasComponent],
	providers: [
		GalleryService
	]
})
export class MediasModule { }
