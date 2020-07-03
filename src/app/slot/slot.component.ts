import { DndDropEvent } from 'ngx-drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.scss']
})
export class SlotComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onDragover(event:DragEvent) {

    console.log("dragover", JSON.stringify(event, null, 2));
  }

  onDrop(event:DndDropEvent) {

    console.log("dropped", JSON.stringify(event, null, 2));
  }
}
