import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { API_URL } from '../config';
import { DaoInterface } from '../../interface/dao-interface';
import { ResponseResult } from '../../interface/response-result';
import { Document } from '../../interface/document';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DocumentService implements DaoInterface<Document> {

	// private headers: Headers;
	private options: RequestOptions;

	constructor(
		private http: Http
	) {
		let headers: Headers = new Headers (
			{
				'Content-Type': 'application/json',
				'Authorization': 'token ' + localStorage.getItem('token')
			}
		);
		this.options = new RequestOptions({ headers: headers, withCredentials: true });
	}

	getAll(): Promise<Array<Document>> {
		const url = API_URL + 'documents/';

		return this.http.get(url, this.options)
				.toPromise()
				.then(response => response.json() as Array<Document>)
				.catch(this.handleError);
	}

	getById(id: number): Promise<Document> {
		const url = API_URL + 'documents/' + id + '/';
		return this.http.get(url, this.options)
				.toPromise()
				.then(response => response.json() as Document)
				.catch(this.handleError);
	}

	create(object: Document): Promise<Document> {
		const url = API_URL + 'documents/';
		return this.http.post(url, JSON.stringify(object), this.options)
				.toPromise()
				.then((response: Response) => response.json() as Document)
				.catch(this.handleError);
	}

	update(object: Document): Promise<Document> {
		const url = API_URL + 'documents/' + object.id + '/';
		return this.http.put(url, JSON.stringify(object), this.options)
				.toPromise()
				.then((response: Response) => response.json() as Document)
				.catch(this.handleError);
	}

	delete(id: number): Promise<Document> {
		const url = API_URL + 'documents/' + id + '/';
		return this.http.delete(url, this.options)
				.toPromise()
				.then(response => response.json() as Document)
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
