import { Component } from '@angular/core'

@Component({
  selector: 'lightning-app',
  template: `
    <div class="ng-view"></div>
  `
  //<router-outlet></router-outlet>
})
export class LightningAppComponent {
  constructor() {}

  ngOnInit() {

  }
  
}