import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../services/document.service';
import { STATIC_URL } from '../../config';

@Component({
	selector: 'cba-executive-council',
	templateUrl: './executive-council.component.html',
	styleUrls: ['./executive-council.component.css']
})
export class ExecutiveCouncilComponent implements OnInit {

	public docExecCouncil: string;

	constructor(private docService: DocumentService) { }

	ngOnInit() {
		this.docService.getById(1)
			.then((response) => {
				this.docExecCouncil = response.document;
			})
			.catch((error) => {
				console.log(error);
			});
	}

}
