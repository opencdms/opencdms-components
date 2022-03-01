import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CUSTOM_ELEMENTS } from './components/components.module';

/** All custom elements should be included here */
export const CUSTOM_ELEMENTS_PREFIX = 'opencdms';

/** Handle registering as custom element */
export function registerWebComponents(injector: Injector) {
  for (const component of CUSTOM_ELEMENTS) {
    const name = component.componentName;
    const selector = `${CUSTOM_ELEMENTS_PREFIX}-${name}`;
    // Only register if name defined and not already registered
    // Include catch block in case of attempts to register in parallel
    if (name && !customElements.get(selector)) {
      const el = createCustomElement(component, { injector });
      try {
        customElements.define(selector, el);
      } catch (error) {
        console.error(error);
        // likely duplicate registration - ignore for now
      }
    }
  }
}
