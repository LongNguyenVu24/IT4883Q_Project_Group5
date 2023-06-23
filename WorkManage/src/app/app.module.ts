import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDivider, MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TodayComponent } from './components/today/today.component';
import { ImportantComponent } from './components/important/important.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { CompletedComponent } from './components/completed/completed.component';
import { ListComponent } from './components/list/list.component';
import { TaskComponent } from './components/task/task.component';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { UserComponent } from './components/user/user.component';
import { NotiComponent } from './components/noti/noti.component'
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    LoginComponent,
    SidebarComponent,
    TodayComponent,
    ImportantComponent,
    UpcomingComponent,
    CompletedComponent,
    ListComponent,
    UserComponent,
    NotiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatCardModule,
    MatInputModule,
    TaskComponent,
    GanttModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
