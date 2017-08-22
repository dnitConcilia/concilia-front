import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
	selector: 'cba-button-block',
	templateUrl: './button-block.component.html',
	styleUrls: ['./button-block.component.css']
})
export class ButtonBlockComponent {

	@Input() public btnIcon;

	constructor(private router: Router) {}

	public goToNews() {
		this.router.navigate(['/noticias']);
	}

	public goToMedia() {
		this.router.navigate(['/acervo']);
	}
}
