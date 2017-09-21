import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../services/document.service';

@Component({
	selector: 'cba-visual-identity',
	templateUrl: './visual-identity.component.html',
	styleUrls: ['./visual-identity.component.css']
})
export class VisualIdentityComponent implements OnInit {

	public docVisualIdentity: string;

	constructor(private docService: DocumentService) { }

	ngOnInit() {
		this.docService.getById(2)
			.then((response) => {
				console.log(response);
				this.docVisualIdentity = response.document;
			})
			.catch((error) => {
				console.log(error);
			});
	}

}
