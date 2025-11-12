import { Routes } from '@angular/router';
import { Admin } from './pages/admin/admin';
import { User } from './pages/user/user';
import { DataBinding } from './pages/data-binding/data-binding';
import { NgClass } from './pages/ng-class/ng-class';
import { ControlStatement } from './pages/control-statement/control-statement';
import { LinkedSignal } from './pages/linked-signal/linked-signal';
import { NgFor } from './pages/ng-for/ng-for';
import { NgIf } from './pages/ng-if/ng-if';
import { NgStyle } from './pages/ng-style/ng-style';
import { Signal } from './pages/signal/signal';
import { TemplateForm } from './pages/template-form/template-form';
import { ReactiveForm } from './pages/reactive-form/reactive-form';
import { GetApi } from './pages/get-api/get-api';
import { PostApi } from './pages/post-api/post-api';
import { ResourceApi } from './pages/resource-api/resource-api';
import { Customer } from './pages/customer/customer';
import { LifeCycle } from './pages/life-cycle/life-cycle';
import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout';
// import { authGuard } from './guard/auth-guard'; // Uncomment if used

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },

    { path: 'login', component: Login },

    {
        path: '',
        component: Layout,
        // canActivate: [authGuard],
        children: [
            { path: 'admin', component: Admin },
            { path: 'user', component: User },
            { path: 'data-binding', component: DataBinding },
            { path: 'ng-class', component: NgClass },
            { path: 'control-statement', component: ControlStatement },
            { path: 'linked-signal', component: LinkedSignal },
            { path: 'ng-for', component: NgFor },
            { path: 'ng-if', component: NgIf },
            { path: 'ng-style', component: NgStyle },
            { path: 'ng-signal', component: Signal },
            { path: 'template-form', component: TemplateForm },
            { path: 'reactive-form', component: ReactiveForm },
            { path: 'get-api', component: GetApi },
            { path: 'post-api', component: PostApi },
            { path: 'resource-api', component: ResourceApi },
            { path: 'customer', component: Customer },
            { path: 'life-cycle', component: LifeCycle },
        ]
    }
];
