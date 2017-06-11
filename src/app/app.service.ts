import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Headers, Http, Response, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import { Budget } from './budget';
import { Category } from './category';


@Injectable()
export class AppService {

  private jsonServerAPI = 'http://localhost:3000';
  error: Error;

  constructor(private http: Http) { }

  saveBudget(budget: Budget): Promise<Budget> {
    let headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    let url = `${this.jsonServerAPI}/budget`;

    return this.http
      .post(url, JSON.stringify(budget), options)
      .toPromise()
      .then(response => response.json())
      .catch(error => this.error = error);
  }

  getAllBudgets(): Promise<Budget[]> {
    let headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    let url = `${this.jsonServerAPI}/budget`;

    return this.http
      .get(url, options)
      .toPromise()
      .then(response => response.json() as Budget[])
      .catch(error => this.error = error);
  }

  resetBudget(id: number): Promise<Budget[]> {
    let headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    let url = `${this.jsonServerAPI}/budget/` + id;

    return this.http
      .delete(url, options)
      .toPromise()
      .then(response => response.json() as Budget[])
      .catch(error => this.error = error);
  }

  getCategories(): Promise<Category[]> {
    let headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    let url = `${this.jsonServerAPI}/category`;

    return this.http
      .get(url, options)
      .toPromise()
      .then(response => response.json() as Category[])
      .catch(error => this.error = error);
  }

}
