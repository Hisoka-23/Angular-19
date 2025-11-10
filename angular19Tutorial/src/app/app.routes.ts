import { Routes } from '@angular/router';
import { Admin } from './pages/admin/admin';
import { User } from './pages/user/user';
import { DataBinding } from './pages/data-binding/data-binding';
import { NgClass } from '@angular/common';
import { ControlStatement } from './pages/control-statement/control-statement';
import { linkedSignal } from '@angular/core';
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

export const routes: Routes = [

    {
        path : '',
        redirectTo: 'dataBinding',
        pathMatch: 'full'
    },
    {
        path:'admin',
        component: Admin
    },
    {
        path: 'user',
        component: User
    },
    {
        path: 'dataBinding',
        component: DataBinding
    },
    {
        path: 'ng-class',
        component: NgClass
    },
    {
        path: 'control-statement',
        component: ControlStatement
    },
    {
        path: 'linked-signal',
        component: LinkedSignal
    },
    {
        path: 'ng-for',
        component: NgFor
    },
    {
        path: 'ng-if',
        component: NgIf
    },
    {
        path: 'ng-style',
        component: NgStyle
    },
    {
        path: 'ng-signal',
        component: Signal
    },
     {
        path: 'templateForm',
        component: TemplateForm
    },
    {
        path: 'reactiveForm',
        component: ReactiveForm
    },
    {
        path: 'getApi',
        component: GetApi
    },
    {
        path: 'postApi',
        component: PostApi
    },
    {
        path: 'resourceApi',
        component: ResourceApi
    },
    {
        path: 'customer',
        component: Customer
    },
    {
        path: 'lifeCycle',
        component: LifeCycle
    },

];
