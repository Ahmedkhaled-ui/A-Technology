import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  // logic req

  req = req.clone({
    setHeaders: {
      // token: localStorage.getItem('userToken')!,
    },
  });
  return next(req); //logic res
};
