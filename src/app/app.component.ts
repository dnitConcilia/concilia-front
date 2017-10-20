import { Component } from '@angular/core';
import { TokenService } from './services/token.service';

declare var $: any;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(private tokenService: TokenService) {
		this.tokenService.login();
	}

	onDeactivate() {
		window.scrollTo(0, 0);
	}
}
