import { Component, OnInit } from '@angular/core';

declare var VCO: any;

@Component({
	selector: 'cba-communyts',
	templateUrl: './communyts.component.html',
	styleUrls: ['./communyts.component.css']
})
export class CommunytsComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		// const storymap_data = 'assets/js/storymap.json';
		// // certain settings must be passed within a separate options object
		// const storymap_options = {
		// 	map_type: 'osm',
		// 	zoom: 15,
		// };
		//
		// const storymap = new VCO.StoryMap('mapdiv', storymap_data, storymap_options);
		// window.onresize = function(event) {
		// 	storymap.updateDisplay(); // this isn't automatic
		// };
	}

}
