import { NgModule } from '@angular/core';
// Required services for navigation
import { Routes, RouterModule } from '@angular/router';

// Import all the components for which navigation service has to be activated 
//import { AuthGuard } from "../../shared/guard/auth.guard";
import { SignInComponent } from '../../components/sign-in/sigm-in.component'


const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }