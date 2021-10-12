import { Component, Input } from '@angular/core';
import { ItemVariant } from 'src/app/models/open-box';

@Component({
  selector: 'ag-box-opening-item',
  templateUrl: './box-opening-item.component.html',
  styleUrls: ['./box-opening-item.component.scss'],
})
export class BoxOpeningItemComponent {
  @Input()
  public item!: ItemVariant;
}
