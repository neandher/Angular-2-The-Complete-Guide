import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'fa-event-databinding',
  template: `
    <button (click)="onClicked()">Click me!</button>
  `,
  styles: []
})
export class EventDatabindingComponent {

  @Output() clicked = new EventEmitter<string>();

  onClicked(){
    this.clicked.emit('It works!');
  }
}
