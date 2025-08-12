import { Routes } from '@angular/router';
import { ViewComponent } from './components/view/view.component';

export const routes: Routes = [
     { path: 'games', component: ViewComponent },
     { path: '', redirectTo: '/games', pathMatch: 'full' }
];
