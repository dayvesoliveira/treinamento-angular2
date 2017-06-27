import { Routes, RouterModule } from '@angular/router';
import { DribbbleAppComponent } from './dribbble-app/core/dribbble-app';

export const DRIBBBLE_APP_ROUTES: Routes = [
    {path: '', component: DribbbleAppComponent},
    {path: ':id', component: DribbbleAppComponent},
    {path: 'shots/:typeShots', component: DribbbleAppComponent},
    {path: 'images/:typeImages', component: DribbbleAppComponent},
    {path: 'likes/:id/likes', component: DribbbleAppComponent},
    { path: '**', redirectTo: ''}
];

export const ROUTER_MODULE = RouterModule.forRoot( DRIBBBLE_APP_ROUTES );