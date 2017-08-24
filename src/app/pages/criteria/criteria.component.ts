import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../services/document.service';

@Component({
	selector: 'cba-criteria',
	templateUrl: './criteria.component.html',
	styleUrls: ['./criteria.component.css']
})
export class CriteriaComponent implements OnInit {

	public criteriaRules: string;

	constructor(private docService: DocumentService) { }

	ngOnInit() {
		this.docService.getById(4)
			.then((response) => {
				this.criteriaRules = response.document;
			})
			.catch((error) => {
				console.log(error);
			});
	}

}
