import {
  HttpErrorResponse,
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

    return next
      .handle(
        req.clone({
          setHeaders: {
            'X-Custom-Token': 'ABCD12345',
          },
        })
      )
      .pipe(
        //  This action of map may not be recommended
        //  Rather questionable approach
        //  But possible nonetheless
        map((r) => {
          if (r instanceof HttpResponse) {
            console.log('Response', r);
            const res = r as HttpResponse<any>;

            return res.clone({
              body: res.body.data, //  this is the problem (assuming body has data)
            }) as HttpEvent<any>;
          }

          return r;
        }),
        //  Error handler
        //  catchError must return the proper Observable in any case
        catchError((err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status >= 400 && err.status < 500) {
              alert('Server Not OK!');
            }
          }

          //  We need to return the new empty response
          //  even when we don't have one (because of error in communication)
          return new Observable<HttpEvent<any>>();
        })
      );
  }
}
