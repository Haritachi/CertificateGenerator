import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)
}, {
    path: 'home',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
}, {
    path: 'certificate',
    loadComponent: () => import('./components/certificate/certificate.component').then(m => m.CertificateComponent)
}];
