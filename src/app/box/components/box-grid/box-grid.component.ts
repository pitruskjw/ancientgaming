import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BoxEdge } from 'src/app/models/box';
import { RoutingUrlConst } from 'src/app/shared/routing-url-const';
import { BoxService } from '../../services/box/box.service';

@Component({
  selector: 'ag-box-grid',
  templateUrl: './box-grid.component.html',
  styleUrls: ['./box-grid.component.scss'],
})
export class BoxGridComponent implements OnInit {
  public boxes$: Observable<BoxEdge[]> | undefined;
  constructor(private boxService: BoxService, private router: Router) {}

  ngOnInit(): void {
    this.boxes$ = this.boxService.getBoxes$();
  }

  public viewBox(boxId: string) {
    this.router.navigate([`${RoutingUrlConst.boxGrid}/${boxId}`]);
  }
}
