import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { DaoInterface } from '../../../interface/dao-interface';
import { API_URL, WEBTOKEN } from '../../config';
import { ResponseResult } from '../../../interface/response-result';
import { News } from '../news/news';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class NewsDetailService {

	private headers: Headers;

	constructor(private http: Http) {
		this.headers = new Headers (
			{
				'Content-Type': 'application/json',
				'Authorization': WEBTOKEN
			}
		);
	}

	getBySlug(slug: number): Promise<News> {
		let url = API_URL + 'news-slug/' + slug + '/';
		return this.http.get(url, {headers: this.headers})
				.toPromise()
				.then(response => {
					console.log(response);
					return response.json() as News}
				)
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
