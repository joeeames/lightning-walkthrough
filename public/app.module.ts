import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UpgradeModule } from '@angular/upgrade/static';
import { NameParser } from './admin/nameParser.service';
import { ProfileComponent } from './profile/profile.component';
import { NavComponent } from './nav/nav.component';

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
    NavComponent
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
    }
  ]
})
export class AppModule {
  ngDoBootstrap() {}
}
