import { ActivatedRouteSnapshot, CanMatchFn, ResolveFn, Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { authGuard } from './core/pipes/guards/auth.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const isAdmin: CanMatchFn = (route) => {
    return false
}
const isUser: CanMatchFn = (route) => {
    return true
}

const userResolve: ResolveFn<any> = (route: ActivatedRouteSnapshot) => {
    const id = route.paramMap.get('id')
    const http = inject(HttpClient)
    const url = 'https://dummyjson.com/users/' + id
    return http.get(url)

}

export const routes: Routes = [
    {
        path: 'dashboard',
        component: AdminDashboardComponent,
        canMatch: [isAdmin]
    },
    {
        path: 'dashboard/:id',
        component: UserDashboardComponent,
        resolve: {
            data: userResolve
        }
    },

];
