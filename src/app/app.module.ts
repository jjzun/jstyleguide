import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { PageContentComponent } from './layout/page-content/page-content.component';
import { TopbarComponent } from './layout/topbar/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PageContentComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
