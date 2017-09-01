import { Component, OnInit } from '@angular/core';
import { Contact } from '../../../interface/contact';


@Component({
	selector: 'cba-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	public contact: Contact = {
		name: '',
		lastName: '',
		email: '',
		subject: '',
		message: ''
	};

	constructor() { }

	ngOnInit() {
	}

	public onSubmit(): void {
		console.log(this.contact);
	}
	public getFormGroupClass(isValid: boolean, isPristine: boolean): Object {
		return {
			'form-group': true,
			'has-danger': (!isValid && !isPristine),
			'has-success': (isValid && !isPristine),
		};
	}
	public getFormControlClass(isValid: boolean, isPristine: boolean): Object {
		return {
			'form-control': true,
			'form-control-danger': (!isValid && !isPristine),
			'form-control-success': (isValid && !isPristine),
		};
	}
}
