import { CanActivateFn } from '@angular/router';

export function authGuard(): CanActivateFn {
  return () => {
    const token = localStorage.getItem('token');
    return !!token;
  };
}
