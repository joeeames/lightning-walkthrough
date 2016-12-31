import { downgradeInjectable } from '@angular/upgrade/static';
import { NameParser } from './admin/nameParser.service';

declare var angular: angular.IAngularStatic;

export function upgradeAndDowngrade() {

  angular.module('app').factory('nameParser', downgradeInjectable(NameParser));
  console.log('downgraded');
}