import { Routes } from '@angular/router';

export const routes: Routes = [
  
    {
    path: '',
    loadComponent: () =>
      import('./features/auth/home/home')
        .then(c => c.Home)
  },
    {
    path: 'login',
    loadComponent: () =>
        import('./features/auth/login/login')
            .then(c => c.Login)
}
];
