import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INavData } from '@coreui/angular';
import { Subscription } from 'rxjs';
import { CUSTOM_COMPONENTS } from 'src/app/components/components.module';
import { CUSTOM_DIALOGS } from 'src/app/dialogs/dialogs.module';

import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CUSTOM_COMPONENTS_PREFIX } from 'src/app/register-webcomponents';

interface IElementMeta extends INavData {
  name: string;
  url?: string;
  linkProps?: { queryParams: { componentName: string } };
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  size = 'show' as any;
  navItems: IElementMeta[] = [];

  public activeElement: IElementMeta = {} as any;

  public activeElementHtml?: SafeHtml;

  private routeParams$: Subscription | undefined;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.navItems = this.generateNavItems();
  }

  ngOnInit(): void {
    this.routeParams$ = this.route.queryParamMap.subscribe((params) => {
      const componentName = params.get('componentName');
      this.activeElement = this.navItems.find((el) => el.name === componentName) || this.navItems[1];
      this.injectActiveElementAsWebcomponent(this.activeElement.name as string);
      console.log({ componentName, activeElement: this.activeElement });
    });
  }

  ngOnDestroy() {
    this.routeParams$?.unsubscribe();
  }

  /** When an component has been selected dynamically inject code to render as a webcomponent */
  private injectActiveElementAsWebcomponent(componentName: string) {
    const tagName = `${CUSTOM_COMPONENTS_PREFIX}-${componentName}`;
    console.log('injecting element', tagName);
    this.activeElementHtml = this.sanitizer.bypassSecurityTrustHtml(`<${tagName}></${tagName}>`);
  }

  /** Generate a list of entries for sidebar nav and component lookup */
  private generateNavItems(): IElementMeta[] {
    const components = CUSTOM_COMPONENTS.map((element) => {
      return { componentName: element.componentName };
    });
    const dialogs = CUSTOM_DIALOGS.map((element) => {
      return { componentName: element.componentName };
    });
    return [
      { title: true, name: 'Dialogs' },
      ...dialogs.map((d) => this.createComponentNavItem(d.componentName)),
      { title: true, name: 'Components' },
      ...components.map((d) => this.createComponentNavItem(d.componentName)),
    ];
  }

  private createComponentNavItem(componentName: string): IElementMeta {
    return {
      name: componentName,
      url: `/home`,
      linkProps: { queryParams: { componentName } },
    };
  }

  handleItemSelected(e: any) {
    console.log('item selected', e);
  }
}
