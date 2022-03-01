import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { StationSelectComponent } from './components/station-select/station-select.component';
import { TestComponent } from './components/test/test.component';

/** All custom elements should be included here */
const CUSTOM_ELEMENTS_PREFIX = 'opencdms';

/** All custom elements should be included here */
export const CUSTOM_ELEMENTS = [TestComponent, StationSelectComponent];

/** Handle registering as custom element */
export function registerWebComponents(injector: Injector) {
  for (const component of CUSTOM_ELEMENTS) {
    const name = component.componentName;
    // Only register if name defined and not already registered
    // Include catch block in case of attempts to register in parallel
    if (name && !customElements.get(name)) {
      const el = createCustomElement(component, { injector });
      try {
        customElements.define(`${CUSTOM_ELEMENTS_PREFIX}-${name}`, el);
      } catch (error) {
        // likely duplicate registration - ignore for now
      }
    }
  }
}
