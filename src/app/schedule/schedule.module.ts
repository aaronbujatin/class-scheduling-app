import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SchedulePageRoutingModule } from './schedule-routing.module';
import { SchedulePage } from './schedule.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TimeFormatPipe } from '../time-format.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxDatatableModule,
    SchedulePageRoutingModule,

  ],
  declarations: [SchedulePage, TimeFormatPipe]
})
export class SchedulePageModule { }
