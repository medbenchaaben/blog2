import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Blog2SharedModule } from 'app/shared/shared.module';
import { Blog2CoreModule } from 'app/core/core.module';
import { Blog2AppRoutingModule } from './app-routing.module';
import { Blog2HomeModule } from './home/home.module';
import { Blog2EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Blog2SharedModule,
    Blog2CoreModule,
    Blog2HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Blog2EntityModule,
    Blog2AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class Blog2AppModule {}
