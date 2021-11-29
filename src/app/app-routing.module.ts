import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BMWComponent } from './bmw/bmw.component';
import { ChevroletComponent } from './chevrolet/chevrolet.component';
import { FiatComponent } from './fiat/fiat.component';
import { FordComponent } from './ford/ford.component';
import { HyundaiComponent } from './hyundai/hyundai.component';
import { KiaComponent } from './kia/kia.component';
import { NissanComponent } from './nissan/nissan.component';
import { PorsheComponent } from './porshe/porshe.component';
import { SuzukiComponent } from './suzuki/suzuki.component';
import { VolkswagenComponent } from './volkswagen/volkswagen.component';

const routes: Routes = [
  {path:'BMW', component: BMWComponent},
  {path:'Chevrolet', component: ChevroletComponent},
  {path:'Nissan', component: NissanComponent},
  {path:'Volkswagen', component: VolkswagenComponent},
  {path:'Fiat', component: FiatComponent},
  {path:'Hyundai', component: HyundaiComponent},
  {path:'Kia', component: KiaComponent},
  {path:'Suzuki', component: SuzukiComponent},
  {path:'Ford', component: FordComponent},
  {path:'Porshe', component: PorsheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
