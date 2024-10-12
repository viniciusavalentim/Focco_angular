import { provideRouter, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './services/auth-guard.service';
import { HomeComponent } from './pages/home/home.component';
import { CalculadorasComponent } from './pages/calculadoras/calculadoras.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, /* canActivate: [AuthGuard] */ },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: 'home', component: HomeComponent, /* canActivate: [AuthGuard] */
        children: [
            {
                path: 'dashboard', 
                component: DashboardComponent
            },
            {
                path: 'calculadoras', 
                component: CalculadorasComponent
            },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ]

    },
];
