import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'cba-button-block',
	templateUrl: './button-block.component.html',
	styleUrls: ['./button-block.component.css']
})
export class ButtonBlockComponent {

	@Input() public btnIcon;

}
