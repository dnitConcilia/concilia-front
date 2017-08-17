import { Component } from '@angular/core';

declare var $: any;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	onDeactivate() {
		// $('body').animate({ scrollTop: 0 }, 'slow');
		document.body.scrollTop = 0;
	}
}
