import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Push from 'push.js';

@Component({
	selector: 'cba-push-notification',
	templateUrl: './push-notification.component.html',
	styleUrls: ['./push-notification.component.css']
})
export class PushNotificationComponent implements OnInit {
	public error = false;
	public notification = {
		body: '',
		icon: 'assets/images/concilia_without_text.png',
		timeout: 4000,
		token: ''
	};

	ngOnInit() {
	}

	public onSubmit(form: NgForm): void {
		console.log(this.notification);
		const token = this.notification.token;
		delete this.notification['token'];
		console.log(token);
		if (token === 'Dnit@123Root') {
			Push.create('Concilia BR-381', this.notification);
		} else {
			this.error = true;
		}
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
