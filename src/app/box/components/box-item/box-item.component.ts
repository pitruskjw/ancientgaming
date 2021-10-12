import { Component, Input } from '@angular/core';
import { Box } from 'src/app/models/box';

@Component({
  selector: 'ag-box-item',
  templateUrl: './box-item.component.html',
  styleUrls: ['./box-item.component.scss'],
})
export class BoxItemComponent {
  @Input()
  public box!: Box;
}
