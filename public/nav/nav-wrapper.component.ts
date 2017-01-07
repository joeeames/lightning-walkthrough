import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
@Directive({
  selector: 'nav-wrapper'
})
export class NavWrapperComponent extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('nav-wrapper', elementRef, injector);
  }
}
