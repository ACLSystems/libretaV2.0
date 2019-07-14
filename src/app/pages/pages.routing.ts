import { Routes } from '@angular/router';

import { HomeComponent } from  './home/home.component';
import { RegisterComponent } from './register/register.component';
import { PricingComponent } from './pricing/pricing.component';
import { LockComponent } from './lock/lock.component';
import { LoginComponent } from './login/login.component';

export const PagesRoutes: Routes = [
		{
			path: '',
			redirectTo: 'home',
      pathMatch: 'full',
		},
    {
        path: '',
        children: [
					{
	            path: 'home',
	            component: HomeComponent
	        },
					{
	            path: 'login',
	            component: LoginComponent
	        }, {
	            path: 'lock',
	            component: LockComponent
	        }, {
	            path: 'register',
	            component: RegisterComponent
	        }, {
	            path: 'pricing',
	            component: PricingComponent
	        }
				]
    }
];
