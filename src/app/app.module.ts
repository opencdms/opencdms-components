import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebcomponentWrapper } from './components/webcomponentWrapper';

import { CUSTOM_ELEMENTS, registerWebComponents } from './register-webcomponents';

@NgModule({
  declarations: [...CUSTOM_ELEMENTS, WebcomponentWrapper],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [], // skip typical app-root bootratp
})
export class AppModule implements DoBootstrap {
  constructor(injector: Injector) {
    registerWebComponents(injector);
  }

  // Make explicit call to bootstrap as no components provided to bootstrap array
  ngDoBootstrap() {}
}
