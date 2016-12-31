//import upgradeAdapter from './upgradeAdapter';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppModule } from './app.module';

import { upgradeAndDowngrade } from './up-down-grades';

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  upgradeAndDowngrade();

  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.documentElement, ['app']);
  console.log('hybrid app bootstrapped');
});
