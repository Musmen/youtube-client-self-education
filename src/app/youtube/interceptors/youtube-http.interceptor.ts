import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { BASE_URL, YOUTUBE_KEY } from '@common/constants';

@Injectable()
export class YouTubeHttpInterceptor implements HttpInterceptor {

  constructor() {}

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(
      request.clone(
        {
          url: `${BASE_URL}${request.url}`,
          setParams: {
            key: YOUTUBE_KEY,
          }
        },
      )
    );
  }
}
