import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { TestComponent } from './components/test/test.component';

/** All custom elements should be included here */
const CUSTOM_ELEMENTS = [TestComponent];
const CUSTOM_ELEMENTS_PREFIX = 'opencdms';

@NgModule({
  declarations: [...CUSTOM_ELEMENTS],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [], // skip typical app-root bootratp
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    for (const component of CUSTOM_ELEMENTS) {
      const name = component.componentName;
      if (name) {
        const el = createCustomElement(component, { injector: this.injector });
        customElements.define(`${CUSTOM_ELEMENTS_PREFIX}-${name}`, el);
      } else {
        console.warn(
          'Could not register component as static componentName not defined',
          component.name
        );
      }
    }
  }

  // Make explicit call to bootstrap as no components provided to bootstrap array
  ngDoBootstrap() {}
}
