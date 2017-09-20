import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { BASE_URL } from '../config';
import { ResponseResult } from '../../interface/response-result';
import { Token } from '../../interface/token';

@Injectable()
export class TokenService {

	private username = 'concilia-front';
	private password = 'consumir-dados';
	// private headers: Headers;
	private options: RequestOptions;

	constructor(private http: Http) {
		let headers: Headers = new Headers (
			{
				'Content-Type': 'application/json'
			}
		);
		this.options = new RequestOptions({ headers: headers, withCredentials: true });
		this.login();
	}

	login(): void {
		const url = BASE_URL + '/login/';
		const body = {
			'username': this.username,
			'password': this.password
		};
		this.http.post(url, JSON.stringify(body), this.options)
			.toPromise()
			.then((response: Response) => {
				let resp = response.json();
				localStorage.setItem('token', resp.token);
			})
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<object> {
		return Promise.reject({
			'data': null,
			'message': JSON.parse(error._body),
			'success': false,
			'token': localStorage.getItem('token')
		});
	}
}
