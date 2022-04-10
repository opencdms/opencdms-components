import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_COMPONENTS_PREFIX } from '../register-webcomponents';
import { CUSTOM_COMPONENTS } from './components.module';
import { WebcomponentWrapper } from './webcomponentWrapper';

const TIMEOUT = 1000 * 60 * 6;

/**
 * When testing webcomponents all testing must be carried out in a single run as angular
 * appears to have issue re-registering/re-evaluating webcomponents.
 *
 * So just carry out a simple test to ensure all render with child nodes
 *
 * TODO CC 2022-03-11
 * Injecting all the services is not working very well (injector errors)
 * Likely will need to rethink approach and either use home page to check
 * each webcomponent registered or e2e test outside angular testbed
 * with compiled components
 */
describe('WebcomponentWrapper', () => {
  let component: WebcomponentWrapper;
  let fixture: ComponentFixture<WebcomponentWrapper>;

  // beforeAll(async () => {
  //   jasmine.DEFAULT_TIMEOUT_INTERVAL = TIMEOUT;
  //   await TestBed.configureTestingModule({
  //     declarations: [WebcomponentWrapper],
  //     providers: [FormBuilder, ReactiveFormsModule, FormsModule],
  //   }).compileComponents();
  //   fixture = TestBed.createComponent(WebcomponentWrapper);
  //   component = fixture.componentInstance;
  //   // render all components via their webcomponent tags
  //   const testHtml = CUSTOM_COMPONENTS.map((element) => {
  //     const { componentName } = element;
  //     const tagname = `${CUSTOM_COMPONENTS_PREFIX}-${componentName}`;
  //     return `<${tagname}></${tagname}>`;
  //   }).join('\n');
  //   component.html = testHtml;
  //   fixture.detectChanges();
  // });

  // describe('Webcomponents', () => {
  //   const errors: any[] = [];
  //   it('renders all components as webcomponents', async () => {
  //     for (const element of CUSTOM_COMPONENTS) {
  //       const error = testWebcomponentErrors(element);
  //       if (error) errors.push(error);
  //     }
  //     // Allow time after fail to inspect if required
  //     if (errors.length > 0) {
  //       console.error('Webcomponent spec errors', errors);
  //       await _wait(5000);
  //     }
  //     expect(errors.length).toEqual(0);
  //   });
  // });

  // function testWebcomponentErrors(element: any) {
  //   const { componentName } = element;
  //   if (!componentName) return { el: element.name, err: 'No componentName specified' };
  //   const tagname = `${CUSTOM_COMPONENTS_PREFIX}-${componentName}`;
  //   const webcomponentEl: Element = fixture.debugElement.nativeElement.querySelector(tagname);
  //   if (!webcomponentEl) return { tagname, err: 'Fail to render' };
  //   const nodes = webcomponentEl?.childNodes;
  //   if (!nodes || nodes?.length === 0) return { tagname, err: 'Fail to render child nodes' };

  //   return;
  // }
});

function _wait(ms: number) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(true);
    }, ms)
  );
}
