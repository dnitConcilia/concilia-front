import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../services/document.service';

@Component({
	selector: 'cba-after-living',
	templateUrl: './after-living.component.html',
	styleUrls: ['./after-living.component.css']
})
export class AfterLivingComponent implements OnInit {
	public afterLiving: string;
	constructor(private docService: DocumentService) { }

	ngOnInit() {
		this.docService.getById(3)
			.then((response) => {
				this.afterLiving = response.document;
			})
			.catch((error) => {
				console.log(error);
			});
	}

}
