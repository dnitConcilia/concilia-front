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
	}

	getToken(): Promise<Token> {
		const url = BASE_URL + 'login/';
		const body = {
			'username': this.username,
			'password': this.password
		};
		return this.http.post(url, JSON.stringify(body), {headers: this.headers})
				.toPromise()
				.then((response: Response) => response.json() as Token)
				.catch(this.handleError);
	}

	private handleError(error: any): Promise<ResponseResult> {
		const responseResult = new ResponseResult();
		responseResult.success = false;

		const result = JSON.parse(error._body);
		responseResult.message = result.message[ 0 ];

		return Promise.reject(responseResult);
	}
}
