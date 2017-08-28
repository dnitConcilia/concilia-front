import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { BASE_URL } from '../config';
import { ResponseResult } from '../../interface/response-result';
import { Token } from '../../interface/token';

@Injectable()
export class TokenService {

	private username = 'concilia-front';
	private password = 'consumir-dados';
	private headers: Headers;

	constructor(private http: Http) {
		this.headers = new Headers (
			{'Content-Type': 'application/json'}
		);
		this.login();
	}

	login(): void {
		const url = BASE_URL + '/login/';
		const body = {
			'username': this.username,
			'password': this.password
		};
		this.http.post(url, JSON.stringify(body), {headers: this.headers})
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
