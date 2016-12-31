import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { UpgradeModule } from '@angular/upgrade/static';
import { NameParser } from './admin/nameParser.service';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
  ],
  providers: [
    NameParser
  ]
})
export class AppModule {
  ngDoBootstrap() {}
}
