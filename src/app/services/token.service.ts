import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Http, Headers, Response, RequestOptions } from '@angular/http';

=======
import { Http, Headers, Response } from '@angular/http';
import {CookieService} from 'angular2-cookie/core';
>>>>>>> 56414caa236a83755bada8a55142d4f73c107074
import { BASE_URL } from '../config';
import { ResponseResult } from '../../interface/response-result';
import { Token } from '../../interface/token';

@Injectable()
export class TokenService {

	private username = 'concilia-front';
	private password = 'consumir-dados';
	// private headers: Headers;
	private options: RequestOptions;

	constructor(
		private http: Http,
		private _cookieService: CookieService
	) {
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
				const resp = response.json();
				localStorage.setItem('token', resp.token);
			})
			.catch((error: Response) => {
				if (error.status === 401 && this._cookieService.get('wasReload') === undefined) {
					this._cookieService.put('wasReload', '1');
					location.reload();

				} else {
					console.log({
						'data': null,
						'message': error,
						'success': false
						// 'token': localStorage.getItem('token')
					});
				}
			});
	}

	// private handleError(error: any): Promise<object> {
	// 	return Promise.reject();
	// }
}
