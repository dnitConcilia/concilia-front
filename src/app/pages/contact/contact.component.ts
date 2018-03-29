import { Component, OnInit } from '@angular/core';
import { Contact } from '../../../interface/contact';
import { ContactService } from '../../services/contact.service';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'cba-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	public success: boolean = false;
	public error: boolean = false;
	public contact: Contact = {
		id: 0,
		name: '',
		lastName: '',
		email: '',
		subject: '',
		message: ''
	};

	constructor(
		private contactService: ContactService
	) { }

	ngOnInit() {
	}

	public onSubmit(form: NgForm): void {
		this.contactService.create(this.contact)
			.then((response) => {
				this.success = true;
				form.resetForm();
			})
			.catch((err) => {
				this.error = true;
			});

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
