import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../services/document.service';

@Component({
	selector: 'cba-action-plan',
	templateUrl: './action-plan.component.html',
	styleUrls: ['./action-plan.component.css']
})
export class ActionPlanComponent implements OnInit {
	public actionPlan: string;
	constructor(private docService: DocumentService) { }

	ngOnInit() {
		this.docService.getById(3)
			.then((response) => {
				this.actionPlan = response.document;
			})
			.catch((error) => {
				console.log(error);
			});
	}

}
