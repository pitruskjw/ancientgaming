import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Box, BoxEdge } from 'src/app/models/box';
import { OpenBoxInput } from 'src/app/models/open-box';
import { MutationOpenBoxService } from '../box-apollo/mutation-open-box.service';
import { QueryBoxDetailsService } from '../box-apollo/query-box-details.service';
import { QueryBoxesService } from '../box-apollo/query-boxes.service';

@Injectable({
  providedIn: 'root',
})
export class BoxService {
  constructor(
    private queryBoxesService: QueryBoxesService,
    private queryBoxDetailsService: QueryBoxDetailsService,
    private mutationOpenBoxService: MutationOpenBoxService
  ) {}

  public getBoxes$(): Observable<BoxEdge[]> {
    return this.queryBoxesService
      .watch()
      .valueChanges.pipe(map((x) => x?.data?.boxes?.edges));
  }

  public getBoxDetails$(id: string): Observable<Box> {
    return this.queryBoxDetailsService
      .fetch({ boxId: id })
      .pipe(map((x) => x?.data.box));
  }

  public openBox$(openBoxInput: OpenBoxInput) {
    return this.mutationOpenBoxService.mutate({ input: openBoxInput });
  }
}
