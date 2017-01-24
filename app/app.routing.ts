 import { ModuleWithProviders } from '@angular/core';
 import { Routes, RouterModule} from '@angular/router';

import { HomeComponent }  from './components/home.component';
import { AboutComponent }  from './components/about.component';
import { GamesComponent }  from './components/games.component';
import { BlogComponent }  from './components/blog.component';
import { ContactComponent }  from './components/contact.component';
import { BlogitemComponent }  from './components/blogitem.component';


export const appRoutes : Routes =[
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'games',
        component:GamesComponent
    },
    {
        path:'blog',
        component:BlogComponent
    },
    {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'blogitem/:id',
        component:BlogitemComponent
    }
]

export const appRoutingProviders: any[] = [

];
export const AppRouting : ModuleWithProviders = RouterModule.forRoot(appRoutes);
