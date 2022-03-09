import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CUSTOM_COMPONENTS } from './components/components.module';
import { CUSTOM_DIALOGS } from './dialogs/dialogs.module';

/** All custom elements should be included here */
export const CUSTOM_COMPONENTS_PREFIX = 'opencdms';

/** Handle registering as custom element */
export function registerWebComponents(injector: Injector) {
  const webcomponents = [...CUSTOM_COMPONENTS, ...CUSTOM_DIALOGS];
  for (const component of webcomponents) {
    const name = component.componentName;
    const selector = `${CUSTOM_COMPONENTS_PREFIX}-${name}`;
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
