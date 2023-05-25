import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './home/shared/sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent
  ],
  imports: [
    SidebarComponent,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
