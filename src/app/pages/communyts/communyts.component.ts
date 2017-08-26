import { Component, OnInit, AfterViewInit } from '@angular/core';
import { mapJson } from './storymap';

declare var VCO: any;

@Component({
	selector: 'cba-communyts',
	templateUrl: './communyts.component.html',
	styleUrls: ['./communyts.component.css']
})
export class CommunytsComponent implements OnInit {

	public storymap: any;

	constructor() { }

	ngOnInit() {
		const storymap_data = mapJson;
		// // certain settings must be passed within a separate options object
		const storymap_options = {
			map_type: 'osm',
			zoom: 15,
		};

		this.storymap = new VCO.StoryMap('mapdiv', storymap_data, storymap_options);

	}

	onResize(event) {
		this.storymap.updateDisplay();
	}

}
