import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UpgradeModule } from '@angular/upgrade/static';
import { NameParser } from './admin/nameParser.service';
import { ProfileComponent } from './profile/profile.component';
import { NavWrapperComponent } from './nav/nav-wrapper.component';
import { RouterUpgradeInitializer, setUpLocationSync } from '@angular/router/upgrade';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    FormsModule
  ],
  entryComponents: [
    ProfileComponent
  ],
  declarations: [
    ProfileComponent,
    NavWrapperComponent
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
    RouterUpgradeInitializer
  ]
})
export class AppModule {
  ngDoBootstrap() {}
}
