import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { extractData, handleError } from '../shared/http-helper';
import { HttpService } from '../shared/http.service';
import { User } from './user.model';

@Injectable()
export class HomeService {
  url = 'https://graph.microsoft.com/v1.0';
  file = 'demo.xlsx';
  table = 'Table1';

  constructor(
    private http: Http,
    private httpService: HttpService) {
  }

  getUsers(): Observable<User[]> {
    return this.http
      .get(`${this.url}/me/contacts?$select=displayName,emailAddresses`, this.httpService.getAuthRequestOptions())
      .map(extractData)
      .catch(handleError);
  }

  addContactToExcel(users: User[]) {
    const contacts = [];

    users.forEach(user => {
      contacts.push([user.displayName, user.emailAddresses[0].address]);
    });

    const contact = {
      index: null,
      values: contacts
    };

    const body = JSON.stringify(contact);

    return this.http
      .post(
        `${this.url}/me/drive/root:/${this.file}:/workbook/tables/${this.table}/rows/add`,
        body,
        this.httpService.getAuthRequestOptions()
      )
      .map(extractData)
      .catch(handleError);
  }
}
