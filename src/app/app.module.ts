import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebcomponentWrapper } from './components/webcomponentWrapper';

@NgModule({
  declarations: [AppComponent, WebcomponentWrapper],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
