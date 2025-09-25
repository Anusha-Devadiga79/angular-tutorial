import { Routes } from '@angular/router';
import { Master } from './components/roles/master/master';
import { ClientComponent } from './components/client/client';
import { Employee } from './components/employee/employee';
import { ClientProject } from './components/client-project/client-project';
import { Login } from './components/login/login';
import { Layout } from './components/layout/layout';
import { authGuard } from './guard/auth-guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: '',
        component: Layout,
        canActivate: [authGuard],
        children: [
            {
                path: 'master',
                component: Master
            },
            {
                path: 'employee',
                component: Employee
            },
            {
                path: 'client',
                component: ClientComponent
            },
            {
                path: 'client-project',
                component: ClientProject
            }
        ]
    }
];
