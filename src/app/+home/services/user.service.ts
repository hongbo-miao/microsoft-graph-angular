import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { extractData, handleError } from '../../shared/lib/';
import { AuthHttpService } from '../../shared/services/';
import { User } from '../models/';

@Injectable()
export class UserService {
  url = 'https://graph.microsoft.com/beta';

  constructor(
    private http: Http,
    private authHttpService: AuthHttpService) {
  }

  getUsers(): Observable<User[]> {
    return this.http
      .get(`${this.url}/me/contacts`, this.authHttpService.getAuthRequestOptions())
      .map(extractData);
    // .catch(handleError);
  }
}
