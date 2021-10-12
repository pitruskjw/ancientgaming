import { Injectable } from '@angular/core';
import { gql, Query } from 'apollo-angular';
import { Boxes } from 'src/app/models/box';

@Injectable({
  providedIn: 'root',
})
export class QueryBoxesService extends Query<Boxes> {
  document = gql`
    {
      boxes(free: false, purchasable: true, openable: true, first: 180) {
        edges {
          node {
            id
            name
            iconUrl
            cost
          }
        }
      }
    }
  `;
}
