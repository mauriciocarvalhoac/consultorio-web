import { HttpInterceptorFn } from '@angular/common/http';

export const interceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const username = 'f588139';
  const password = 'f588139';

  const credentials = btoa(`${username}:${password}`);

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Basic ${credentials}`
    }
  });
  console.log('Request URL: ' + authReq.url);
  return next(authReq);
};
