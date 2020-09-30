import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StorageComponent } from './storage/storage.component';

export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'storage', component: StorageComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];