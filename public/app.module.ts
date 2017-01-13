import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UpgradeModule } from '@angular/upgrade/static';
import { RouterModule } from '@angular/router';
import { NameParser } from './admin/nameParser.service';
import { ProfileComponent } from './profile/profile.component';
import { NavWrapperComponent } from './nav/nav-wrapper.component';
import { UrlHandlingStrategy } from '@angular/router';
import { LightningAppComponent } from './lightning-app.component';
import { ProfileModule } from './profile/profile.module';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    FormsModule,
    // RouterModule.forRoot([
    // //   // { path: 'profile2', component: ProfileComponent }
    // ], {useHash: true, initialNavigation: false })
  ],
  entryComponents: [
    ProfileComponent
  ],
  declarations: [
    ProfileComponent,
    NavWrapperComponent,
    LightningAppComponent
  ],
  providers: [
    NameParser,
    {
      provide: 'location',
      useFactory: (i: any) => i.get('$location'),
      deps: ['$injector']
    },
    {
      provide: 'toastr',
      useFactory: (i: any) => i.get('toastr'),
      deps: ['$injector']
    },{
      provide: 'currentIdentity',
      useFactory: (i: any) => i.get('currentIdentity'),
      deps: ['$injector']
    },
    { provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy }
  ],
  bootstrap: [LightningAppComponent]
})
export class AppModule {
  ngDoBootstrap() {}
}

class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url) { return url.toString().startsWith("/profile2"); }
  extract(url) { return url; }
  merge(url, whole) { return url; }
}
