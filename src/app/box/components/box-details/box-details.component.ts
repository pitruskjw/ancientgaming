import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { Box } from 'src/app/models/box';
import { BoxOpening, OpenBoxInput } from 'src/app/models/open-box';
import { BoxService } from '../../services/box/box.service';

@Component({
  selector: 'ag-box-details',
  templateUrl: './box-details.component.html',
  styleUrls: ['./box-details.component.scss'],
})
export class BoxDetailsComponent implements OnInit {
  public boxDetails$: Observable<Box> | undefined;
  public openingBoxResult: BoxOpening[] | undefined;
  public boxOpeningError = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private boxService: BoxService
  ) {}
  ngOnInit(): void {
    this.boxDetails$ = this.activatedRoute.data.pipe(
      map((data) => data?.boxDetails)
    );
  }

  public openBox(boxId: string) {
    this.boxOpeningError = '';
    this.openingBoxResult = undefined;
    const openBoxInput = {
      amount: 1,
      boxId,
    } as OpenBoxInput;
    this.boxService
      .openBox$(openBoxInput)
      .pipe(first())
      .subscribe(
        (result) => {
          if (Boolean(result.data?.openBox)) {
            this.openingBoxResult = result.data?.openBox.boxOpenings;
          }
        },
        (err) => {
          this.boxOpeningError = err.message;
        }
      );
  }
}
