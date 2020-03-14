import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatIconModule, MatButtonModule, MatSidenavModule, MatToolbarModule,
  MatExpansionModule,
  MatListModule,
  MatTableModule
} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import { AboutComponent } from './pages/about/about.component';
import {HttpClientModule} from '@angular/common/http';
import { SliderModule } from 'angular-image-slider';
import { SubregionalOrganizationComponent } from './pages/subregional-organization/subregional-organization.component';
import { CompetitionsComponent } from './pages/competitions/competitions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SubregionalOrganizationComponent,
    CompetitionsComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatListModule,
    MatTableModule,
    MatTabsModule,
    HttpClientModule,
    SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
