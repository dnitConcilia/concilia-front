import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PushNotificationComponent } from './push-notification.component';

import { ComponentsModule } from '../../components/components.module';

import { ROUTES } from './push-notification.routes';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild(ROUTES),
		ComponentsModule
	],
	declarations: [PushNotificationComponent],
	providers: [
	]
})
export class PushNotificationModule { }
