import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { ROUTES } from './medias.routes';
import { MediasComponent } from './medias.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(ROUTES),
	],
	declarations: [MediasComponent]
})
export class MediasModule { }
