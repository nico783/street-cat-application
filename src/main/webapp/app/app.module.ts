import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { StreetcatSharedModule } from 'app/shared/shared.module';
import { StreetcatCoreModule } from 'app/core/core.module';
import { StreetcatAppRoutingModule } from './app-routing.module';
import { StreetcatHomeModule } from './home/home.module';
import { StreetcatEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    StreetcatSharedModule,
    StreetcatCoreModule,
    StreetcatHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    StreetcatEntityModule,
    StreetcatAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class StreetcatAppModule {}
