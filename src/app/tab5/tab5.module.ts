import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab5PageRoutingModule } from './tab5-routing.module';
import { CalModalPageModule } from '../pages/cal-modal/cal-modal.module';
import { NgCalendarModule } from 'ionic2-calendar';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { Tab5Page } from './tab5.page';
registerLocaleData(localePt);

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab5Page }]),
    Tab5PageRoutingModule,
    NgCalendarModule,
    CalModalPageModule
  ],
  declarations: [Tab5Page],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-PT' }
  ]
})
export class Tab5PageModule {}
