import { Observable, of, throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { delay, mergeMap, retryWhen } from 'rxjs/operators';

const getErrorMessage = (maxRetry: number) => `Tried to load Resource over XHR for ${maxRetry} time without success. Giving up.`

const DEFAULT_MAX_RETIES = 5;

export function delayedRetry(delayMs: number, maxRetry = DEFAULT_MAX_RETIES) {
    let retries = maxRetry;

    return (src: Observable<any>) =>
    src.pipe(
        retryWhen((errors: Observable<any>) => errors.pipe(
            delay(delayMs),
            mergeMap(error => retries-- > 0 ? of(error) : throwError(getErrorMessage(maxRetry)))
        ))
    );
}

export abstract class BaseService {
    public getUser(): string {
        return localStorage.getItem('user');
    }

    public getToken(){
      debugger;
      var userStorage = this.getUser();
      if(userStorage != null){
        var user = JSON.parse(userStorage);
        if(user != null){
          return user.token;
        }
      }

      return null;
    }

    protected extractData(response: any) {
        return response || {};
    }

    protected serviceError(error: Response | any) {
        return throwError(error.error);
    }
}
