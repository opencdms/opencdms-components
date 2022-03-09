import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from './components/components.module';
import { DialogsModule } from './dialogs/dialogs.module';

import { registerWebComponents } from './register-webcomponents';

/**
 * The webcompoments app module replaces the original app module when building for the webcomponent configuration.
 * It differs from the initial app module by not including routing (and ignoring any lazy-loaded route modules),
 * and omitting the default app-component (only want to export webcompoments, not app)
 */
@NgModule({
  declarations: [],
  imports: [BrowserModule, ComponentsModule, DialogsModule],
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
