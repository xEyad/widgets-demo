import { Widget } from './../widget.d';
import { WidgetMapperService } from './../widget-mapper.service';
import { DndDropEvent } from 'ngx-drag-drop';
import { Component, OnInit, ViewChild, Input, ComponentFactoryResolver } from '@angular/core';
import { WidgetType } from '../widget-mapper.service';
import { WidgetSlotDirective } from '../widgetSlot.directive';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.scss']
})
export class SlotComponent implements OnInit {

  @Input() widgetType : WidgetType;
  haveChild = false;
  @ViewChild(WidgetSlotDirective,{static:true}) slot:WidgetSlotDirective;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private widgetMapper:WidgetMapperService
    ) { }

  ngOnInit() {
  }
  onDragover(event:DragEvent) {

    console.log("dragover", JSON.stringify(event, null, 2));
  }

  onDrop(event:DndDropEvent) {
    console.log("dropped", JSON.stringify(event, null, 2));
    this.widgetType = WidgetType.pie;
    this.haveChild = true;
    this.loadComponent();
  }
  loadComponent() {
    const component = this.widgetMapper.getComponent(this.widgetType);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

    const viewContainerRef = this.slot.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<Widget>componentRef.instance); //manipulate it through interface
  }
}
