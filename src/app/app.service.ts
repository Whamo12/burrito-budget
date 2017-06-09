import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Headers, Http, Response, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import { Budget } from './budget';

@Injectable()
export class AppService {

  private jsonServerAPI = 'http://localhost:3000';
  error: Error;

  constructor(private http: Http) {}

  saveBudget(budget: Budget): Promise<Budget> {
    let headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: headers});

    let url = `${this.jsonServerAPI}/budget`;

    return this.http
      .post(url, JSON.stringify(budget), options)
      .toPromise()
      .then(response => response.json())
      .catch(error => this.error = error);
  }

  // Observable string sources
  private showTable = new Subject<boolean>();
  private row = new Subject<boolean>();

  // Observable string streams
  showTable$ = this.showTable.asObservable();
  addRow$ = this.row.asObservable();

  // Service message commands
  activateTable() {
    this.showTable.next(true);
  }

  deactivateTable() {
    this.showTable.next(false);
  }

  addRow() {
    this.row.next(true);
  }

}
