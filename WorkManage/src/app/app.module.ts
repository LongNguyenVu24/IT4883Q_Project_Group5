import { LandingviewComponent } from './components/landingview/landingview.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
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
import { NotiComponent } from './components/noti/noti.component';
import { MatBadgeModule } from '@angular/material/badge';
import { LoginHungComponent } from './components/login-hung/login-hung.component';
import { SignUpComponent } from './components/login-hung/sign-up/sign-up.component';
import { LoginComponent } from './components/login-hung/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DialogModalContentComponent } from './components/dialog-modal-content/dialog-modal-content.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { SettingDialogComponent } from './components/setting-dialog/setting-dialog.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EditdialogComponent } from './components/editdialog/editdialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SidebarComponent,
    TodayComponent,
    //ImportantComponent,
    UpcomingComponent,
    CompletedComponent,
    ListComponent,
    UserComponent,
    NotiComponent,
    LoginHungComponent,
    SignUpComponent,
    LoginComponent,
    // DialogModalContentComponent,
    LandingviewComponent,
    SettingDialogComponent,
    EditdialogComponent
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
    MatBadgeModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatCheckboxModule,
    // DialogModalContentComponent
    MatFormFieldModule
  ],
  providers: [
    {provide:MatDialogRef , useValue:{DialogModalContentComponent} },
    DialogModalContentComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
