import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { LandingviewComponent } from './components/landingview/landingview.component';
import { ProcessComponent } from './components/process/process.component';
import { TodayComponent } from './components/today/today.component';
import { ImportantComponent } from './components/important/important.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { CompletedComponent } from './components/completed/completed.component';

const routes: Routes = [
  {path:'',component:HomepageComponent,
   children:[
    { path: '', redirectTo: 'today', pathMatch: 'full' },
    {path:'today',component:TodayComponent},
    {path:'important',component:ImportantComponent},
    {path:'process',component:ProcessComponent},
    {path:'upcoming',component:UpcomingComponent},
    {path:'completed',component:CompletedComponent},
   ]
  },
  
  {path:'login', component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
