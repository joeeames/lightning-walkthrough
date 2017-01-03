import { downgradeInjectable, downgradeComponent, UpgradeModule } from '@angular/upgrade/static';
import { NameParser } from './admin/nameParser.service';
import { ProfileComponent } from './profile/profile.component'

declare var angular: angular.IAngularStatic;

export function upgradeAndDowngrade() {

  angular.module('app').directive('profile', downgradeComponent({component: ProfileComponent}));
  angular.module('app').factory('nameParser', downgradeInjectable(NameParser));
  
}