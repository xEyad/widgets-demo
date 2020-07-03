import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { Injectable, Component } from '@angular/core';
import { Type } from '@angular/core';
import { PolarRadarComponent } from './polar-radar/polar-radar.component';
import { TreeMapComponent } from './tree-map/tree-map.component';
@Injectable({
  providedIn: 'root'
})
export class WidgetMapperService {

  constructor() { }

  getComponent(type:WidgetType) : Type<any>
  {
    switch(type)
    {
      case WidgetType.pie:
        return PieChartComponent;
      case WidgetType.line:
        return LineChartComponent;
      case WidgetType.bar:
        return BarChartComponent;
      case WidgetType.polar:
        return PolarRadarComponent;
      case WidgetType.tree:
        return TreeMapComponent;
    }
  }
}

export enum WidgetType{
  pie,
  line,
  bar,
  polar,
  tree
}
