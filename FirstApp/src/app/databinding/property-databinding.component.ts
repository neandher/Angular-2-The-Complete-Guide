import {Component, Input} from '@angular/core';

@Component({
  selector: 'fa-property-databinding',
  template: `
      {{result}}  
  `,
  styles: []
})
export class PropertyDatabindingComponent {
  @Input() result: number = 0;
}
