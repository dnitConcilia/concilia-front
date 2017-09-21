import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {CookieService} from 'angular2-cookie/core';

import { API_URL } from '../config';
import { DaoInterface } from '../../interface/dao-interface';
import { ResponseResult } from '../../interface/response-result';
import { Contact } from '../../interface/contact';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContactService implements DaoInterface<Contact> {

	// private headers: Headers;
	private options: RequestOptions;

	constructor(
		private http: Http,
		private _cookieService: CookieService
	) {
		const headers: Headers = new Headers (
			{
				'Content-Type': 'application/json',
				'Authorization': 'token ' + localStorage.getItem('token')
			}
		);
		this.options = new RequestOptions({ headers: headers, withCredentials: true });
	}

	getAll(): Promise<Array<Contact>> {
		const url = API_URL + 'contact/';

		return this.http.get(url, this.options)
				.toPromise()
				.then(response => response.json() as Array<Contact>)
				.catch(this.handleError);
	}

	getById(id: number): Promise<Contact> {
		const url = API_URL + 'contact/' + id + '/';
		return this.http.get(url, this.options)
				.toPromise()
				.then(response => response.json() as Contact)
				.catch(this.handleError);
	}
	create(object: Contact): Promise<Contact> {
		const url = API_URL + 'contact/';
		object['csrftoken'] = this._cookieService.get('csrftoken');

		return this.http.post(url, JSON.stringify(object), this.options)
				.toPromise()
				.then((response: Response) => response.json() as Contact)
				.catch(this.handleError);
	}
	update(object: Contact): Promise<Contact> {
		const url = API_URL + 'contact/' + object.id + '/';
		object['csrftoken'] = this._cookieService.get('csrftoken');
		return this.http.put(url, JSON.stringify(object), this.options)
				.toPromise()
				.then((response: Response) => response.json() as Contact)
				.catch(this.handleError);
	}
	delete(id: number): Promise<Contact> {
		const url = API_URL + 'contact/' + id + '/';
		return this.http.delete(url, this.options)
				.toPromise()
				.then(response => response.json() as Contact)
				.catch(this.handleError);
	}

	private handleError(error: any): Promise<object> {
		return Promise.reject({
			'data': null,
			'message': JSON.parse(JSON.stringify(error._body)),
			'success': false
			// 'token': localStorage.getItem('token')
		});
	}

}
