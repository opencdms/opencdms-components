import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { INavData } from '@coreui/angular';
import { CUSTOM_ELEMENTS } from 'src/app/components/components.module';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  size = 'show' as any;
  customElements: any[] = [];
  navItems: INavData[] = [];

  public activeElement: any = {};

  constructor(private router: Router, private route: ActivatedRoute) {
    this.customElements = CUSTOM_ELEMENTS.map((element) => {
      return { componentName: element.componentName };
    });
    this.navItems = this.customElements.map(({ componentName }) => ({
      name: componentName,
      url: `/home`,
      linkProps: { queryParams: { componentName } },
    }));
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const componentName = params.get('componentName');
      this.activeElement =
        this.customElements.find((el) => el.componentName === componentName) || this.customElements[0];
    });
  }

  handleItemSelected(e: any) {
    console.log('item selected', e);
  }
}
