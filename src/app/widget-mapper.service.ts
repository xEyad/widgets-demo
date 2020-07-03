import { PieChartComponent } from './pie-chart/pie-chart.component';
import { Injectable, Component } from '@angular/core';
import { Type } from '@angular/core';
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
    }
  }
}

export enum WidgetType{
  pie,
  line,
  bar
}
