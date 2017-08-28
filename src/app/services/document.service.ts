import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { API_URL } from '../config';
import { DaoInterface } from '../../interface/dao-interface';
import { ResponseResult } from '../../interface/response-result';
import { Document } from '../../interface/document';
import { TokenService } from './token.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DocumentService implements DaoInterface<Document> {

	private headers: Headers;

	constructor(
		private http: Http,
		private tokenService: TokenService
	) {
		this.tokenService.getToken()
			.then((response) => {
				this.headers = new Headers (
					{
						'Content-Type': 'application/json',
						'Authorization': 'token ' + response.token
					}
				);
			})
			.catch((err) => {
				console.log(err);
			});
	}
	getAll(): Promise<Array<Document>> {
		const url = API_URL + 'documents/';

		return this.http.get(url, {headers: this.headers})
				.toPromise()
				.then(response => response.json() as Array<Document>)
				.catch(this.handleError);
	}

	getById(id: number): Promise<Document> {
		const url = API_URL + 'documents/' + id + '/';
		return this.http.get(url, {headers: this.headers})
				.toPromise()
				.then(response => response.json() as Document)
				.catch(this.handleError);
	}

	create(object: Document): Promise<Document> {
		const url = API_URL + 'documents/';
		return this.http.post(url, JSON.stringify(object), {headers: this.headers})
				.toPromise()
				.then((response: Response) => response.json() as Document)
				.catch(this.handleError);
	}

	update(object: Document): Promise<Document> {
		const url = API_URL + 'documents/' + object.id + '/';
		return this.http.put(url, JSON.stringify(object), {headers: this.headers})
				.toPromise()
				.then((response: Response) => response.json() as Document)
				.catch(this.handleError);
	}

	delete(id: number): Promise<Document> {
		const url = API_URL + 'documents/' + id + '/';
		return this.http.delete(url, {headers: this.headers})
				.toPromise()
				.then(response => response.json() as Document)
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
