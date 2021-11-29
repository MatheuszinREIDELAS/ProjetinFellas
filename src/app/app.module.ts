import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MenuPositionExampleComponent } from './menu-position-example/menu-position-example.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { BMWComponent } from './bmw/bmw.component';
import { ChevroletComponent } from './chevrolet/chevrolet.component';
import { NissanComponent } from './nissan/nissan.component';
import { VolkswagenComponent } from './volkswagen/volkswagen.component';
import { FiatComponent } from './fiat/fiat.component';
import { HyundaiComponent } from './hyundai/hyundai.component';
import { KiaComponent } from './kia/kia.component';
import { SuzukiComponent } from './suzuki/suzuki.component';
import { FordComponent } from './ford/ford.component';
import { PorsheComponent } from './porshe/porshe.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuPositionExampleComponent,
    BMWComponent,
    ChevroletComponent,
    NissanComponent,
    VolkswagenComponent,
    FiatComponent,
    HyundaiComponent,
    KiaComponent,
    SuzukiComponent,
    FordComponent,
    PorsheComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSliderModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
