import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './mainComponent/navbar/navbar.component';
import { FooterComponent } from './mainComponent/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InterceptorInterceptor } from './auth/interceptor.interceptor';
import { CucinaComponent } from './pages/dashboard/cucina/cucina.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    CucinaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
