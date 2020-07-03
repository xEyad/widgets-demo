import { WidgetType } from './../widget-mapper.service';
import { Component, OnInit, Input } from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() widgets = [
    {
      name: "Pie",
      img: "assets/pie.png",
      type: WidgetType.pie,
    },
    {
      name: "Line",
      img: "assets/line.png",
      type: WidgetType.line,
    },
    {
      name: "Bar",
      img: "assets/bar.png",
      type: WidgetType.bar,
    },
    {
      name: "Polar",
      img: "assets/polar.png",
      type: WidgetType.polar,
    },
    {
      name: "Tree",
      img: "assets/tree.png",
      type: WidgetType.tree,
    }
  ];
  draggable= {
    effectAllowed: "all",
      disable: false,
      handle: false
  }
  constructor() { }

  ngOnInit() {
  }


  onDragStart(event: DragEvent) {
    // this.draggable.data = <any>widget;
    console.log("drag started", JSON.stringify(event, null, 2));
  }

  onDragEnd(event: DragEvent) {

    console.log("drag ended", JSON.stringify(event, null, 2));
  }

  onDraggableCopied(event: DragEvent) {

    console.log("draggable copied", JSON.stringify(event, null, 2));
  }

  onDraggableLinked(event: DragEvent) {

    console.log("draggable linked", JSON.stringify(event, null, 2));
  }

  onDraggableMoved(event: DragEvent) {

    console.log("draggable moved", JSON.stringify(event, null, 2));
  }

  onDragCanceled(event: DragEvent) {

    console.log("drag cancelled", JSON.stringify(event, null, 2));
  }

  onDragover(event: DragEvent) {

    console.log("dragover", JSON.stringify(event, null, 2));
  }

  onDrop(event: DndDropEvent) {

    console.log("dropped from sidebar", JSON.stringify(event, null, 2));
  }

}
