import { Component, Injector, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { registerWebComponents } from '../register-webcomponents';

@Component({
  selector: 'webcomponent-wrapper',
  template: `<div *ngIf="innerHtml" [innerHtml]="innerHtml"></div>`,
})
/**
 * By default webcomponents are only rendered via angular tags when running locally
 * Provide a wrapper for registering and rendering as webcomponent html, for use
 * in testing or storybook
 */
export class WebcomponentWrapper {
  innerHtml?: SafeHtml;
  constructor(private sanitizer: DomSanitizer, private injector: Injector) {
    registerWebComponents(this.injector);
  }

  @Input() set html(html: string) {
    this.innerHtml = this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
