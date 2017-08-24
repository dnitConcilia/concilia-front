import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../services/document.service';


@Component({
	selector: 'cba-measures',
	templateUrl: './measures.component.html',
	styleUrls: ['./measures.component.css']
})
export class MeasuresComponent implements OnInit {

	public actionPlan: string;
	public criteriaRules: string;
	constructor(private docService: DocumentService) { }

	ngOnInit() {
		this.docService.getById(3)
			.then((response) => {
				this.actionPlan = response.document;
			})
			.catch((error) => {
				console.log(error);
			});
		this.docService.getById(4)
			.then((response) => {
				this.criteriaRules = response.document;
			})
			.catch((error) => {
				console.log(error);
			});
	}

}
