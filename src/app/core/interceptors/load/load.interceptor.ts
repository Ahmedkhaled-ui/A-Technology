import { HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs';

export const loadInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(finalize(() => {}));
};
