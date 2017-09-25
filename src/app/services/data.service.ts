import { Injectable } from '@angular/core';
// import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import {CookieService} from 'angular2-cookie/core';
// import { API_URL, BASE_URL } from '../config';
// import { DaoInterface } from '../../interface/dao-interface';
// import { ResponseResult } from '../../interface/response-result';
// import { Community } from '../../interface/community';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {

	private data: object;

	constructor() {
		this.data = {};
	}

	public get(): object {
		return this.data;
	}

	public set(data: object): void {
		this.data = data;
	}

	public apped(key: string, value: any): void {
		this.data[key] = value;
	}

	public remove(key: string): any {
		const data = this.data[key];
		delete this.data[key];
		return data;
	}

	public clean(): void {
		this.data = {};
	}

}
