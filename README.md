# opencdms-components

⭐ Reusable W3C web components, used by opencdms-app and other applications.

## Using Components

See [examples](examples)

## Develop Locally

Prerequites:

- [node 16+](https://nodejs.org/en/download/)
- [yarn 2+](https://yarnpkg.com/getting-started/install)

Serve project

```
yarn start
```

Changes within the `src` folder will be live-reloaded

### Create New Component

Use angular cli to scaffold out a new component

```
yarn ng g component components/my-example --skip-import --view-encapsulation Emulated
```

or for a dialog

```
yarn ng g component dialogs/my-example --type dialog --skip-import --view-encapsulation Emulated
```

Provide a static `componentName` property - this will be used when importing as a webcomponent

```
export class MyExampleComponent implements OnInit {
    public static componentName = 'my-example';
}
```

_my-example.component.ts_

Register as webcomponent

```
import { MyExampleComponent } from './components/my-example/my-example.component';

export const CUSTOM_COMPONENTS = [MyExampleComponent, ... ];
```

_src\app\components\components.module.ts_

This will handle the process of registering as a custom webcomponent using the name specified.
The component can now be included in the src `index.html` or any other html file as `<opencdms-my-example></opencdms-my-example>`

### Build Components

All components can be compiled and consumed by 3rd party projects via the script

```
yarn build:components
```

This will create a single [components/index.js](components/index.js) file which can be imported and then used to allow custom-elements called directly

### Serve Examples

The examples folder contains demonstrations of custom-elements being used within basic html pages. Files can be opened in any web-browser, or served via `yarn start:examples`

## Known Issues

- All components are generated as a single export and so do not support tree-shaking/individual load. This is due to the fact by default all components need to package the main angular build and polyfills, leading to significant duplication bloat across multiple components. There exists some 3rd party tooling such as [ngx-build-plus](https://github.com/manfredsteyer/ngx-build-plus#ngx-build-plus-and-angular-elements) to work around this, however compatibility not currently supported for Angular 13 (see issue [314](https://github.com/manfredsteyer/ngx-build-plus/issues/314)).

- Browser support for custom elements has good, but not full coverage (see https://caniuse.com/custom-elementsv1). Additional support could be added with the inclusion of the webcomponents [custom-elements polyfill](https://github.com/webcomponents/polyfills/tree/master/packages/custom-elements).

- CoreUI is still in alpha for angular and not all styles directives apply correctly. As such, most components use emulated view encapsulation instead of shadow-dom, to allow for easier class-based inheritence

- The fetch api tool used only supports response in form application/json, which makes handling filebuffer responses very tricky (converted to binary string which becomes easily corrupted when trying to convert back). As a result most api methods have the option to either return base64 encoded data or links to file for direct download, but in the future a different rest client may want to be considered.

## Links and Resources

https://fireship.io/lessons/angular-elements-quick-start-guide/
https://coreui.io/angular/docs/4.0
