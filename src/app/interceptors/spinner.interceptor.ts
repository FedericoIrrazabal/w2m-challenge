import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { SpinnerService } from '../services/spinner/spinner.service';
import { Injectable } from '@angular/core';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(private _spinnerService: SpinnerService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this._spinnerService.show();
    return next.handle(req).pipe(
      finalize(() => {
        setTimeout(() => { // simulate a delay
        this._spinnerService.hide();
        }, 1000);
      })
    );
  }
}
