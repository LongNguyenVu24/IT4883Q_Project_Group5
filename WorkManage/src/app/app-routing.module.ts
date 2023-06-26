import { NotiComponent } from './components/noti/noti.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProcessComponent } from './components/process/process.component';
import { TodayComponent } from './components/today/today.component';
import { ImportantComponent } from './components/important/important.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { CompletedComponent } from './components/completed/completed.component';
import { UserComponent } from './components/user/user.component';
import { LoginHungComponent } from './components/login-hung/login-hung.component';
import { LoginComponent } from './components/login-hung/login/login.component';
import { SignUpComponent } from './components/login-hung/sign-up/sign-up.component';


const routes: Routes = [
  {path:'',component:HomepageComponent,
   children:[
    { path: '', redirectTo: 'today', pathMatch: 'full' },
    {path:'today',component:TodayComponent},
    {path:'important',component:ImportantComponent},
    {path:'process',component:ProcessComponent},
    {path:'upcoming',component:UpcomingComponent},
    {path:'completed',component:CompletedComponent},
    {path:'user',component:UserComponent},
    {path:'noti',component:NotiComponent},
   ]
  },
  
  {path:'login', component:LoginHungComponent,
  children:[
    { path: '', redirectTo: 'loginc', pathMatch: 'full' },
    {path:'loginc', component:LoginComponent},
    {path:'signup', component:SignUpComponent},
  ]  
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
