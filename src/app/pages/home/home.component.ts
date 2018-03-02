import { Component, OnInit } from '@angular/core';
import Push from 'push.js';


@Component({
	selector: 'cba-home',
	templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		// window.location.reload();
		if (!Push.Permission.has()) {
			Push.Permission.request(this.onGranted, this.onDenied);
		}
	}

	onGranted() {
		Push.create('Concilia BR-381', {
			body: 'Agora você será avisado sempre que tivermos novidade',
			icon: 'assets/images/concilia_without_text.png',
			timeout: 4000
		});
	}

	onDenied () {
		return null;
	}

}
