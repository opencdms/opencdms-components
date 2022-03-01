import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebcomponentWrapper } from './components/webcomponentWrapper';

import { CUSTOM_ELEMENTS, registerWebComponents } from './register-webcomponents';

@NgModule({
  declarations: [...CUSTOM_ELEMENTS, AppComponent, WebcomponentWrapper],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(injector: Injector) {
    registerWebComponents(injector);
  }
}
