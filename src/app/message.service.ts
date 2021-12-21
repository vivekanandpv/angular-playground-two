import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, filter, map, Observable, of, tap } from 'rxjs';

@Injectable()
export class MessageService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.method === 'POST' || req.method === 'post') {
      return next.handle(req);
    }

    return next.handle(
      req.clone({
        setHeaders: {
          'X-Custom-Token': 'ABCD12345',
        },
      })
    );
  }
}
