
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SlotComponent } from './slot/slot.component';
import { DndModule } from 'ngx-drag-drop';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WidgetSlotDirective } from './widgetSlot.directive';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PolarRadarComponent } from './polar-radar/polar-radar.component';
import { TreeMapComponent } from './tree-map/tree-map.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    SlotComponent,
    PieChartComponent,
    WidgetSlotDirective,
    LineChartComponent,
    BarChartComponent,
    PolarRadarComponent,
    TreeMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DndModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents:[PieChartComponent,LineChartComponent,BarChartComponent,PolarRadarComponent,TreeMapComponent],
  bootstrap: [AppComponent]

})
export class AppModule { }
