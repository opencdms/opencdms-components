import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebcomponentWrapper } from './components/webcomponentWrapper';
import { registerWebComponents } from './register-webcomponents';

@NgModule({
  declarations: [AppComponent, WebcomponentWrapper],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(injector: Injector) {
    registerWebComponents(injector);
  }
}
