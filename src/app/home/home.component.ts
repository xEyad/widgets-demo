import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { SlotComponent } from '../slot/slot.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChildren(SlotComponent) slots:Array<SlotComponent>;
  constructor() { }

  ngOnInit() {
  }

  reset()
  {
    this.slots.forEach(element => {
      element.clear();
    });
  }
}
