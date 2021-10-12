import { Injectable } from '@angular/core';
import { gql, Query } from 'apollo-angular';
import { BoxDetails } from 'src/app/models/box';

@Injectable({
  providedIn: 'root',
})
export class QueryBoxDetailsService extends Query<BoxDetails> {
  document = gql`
    query BoxDetails($boxId: ID) {
      box(id: $boxId) {
        id
        name
        cost
        iconUrl
      }
    }
  `;
}
