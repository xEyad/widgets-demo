import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[widget-slot]',
})
export class WidgetSlotDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}


