import 'rxjs/add/observable/throw';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export function extractData(res: Response): any {
  const body = res.json();

  return body && body.value ? body.value : {};
}

export function handleError(res: Response) {
  const error = res.json();

  const errorMessage = error.message ? error.message :
    res.status ? `${res.status} - ${res.statusText}` : 'Server error';

  return Observable.throw(errorMessage);
}
