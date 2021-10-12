import { Injectable } from '@angular/core';
import { gql, Mutation } from 'apollo-angular';
import { BoxOpeningResult } from 'src/app/models/open-box';

@Injectable({
  providedIn: 'root',
})
export class MutationOpenBoxService extends Mutation<BoxOpeningResult> {
  document = gql`
    mutation OpenBox($input: OpenBoxInput!) {
      openBox(input: $input) {
        boxOpenings {
          id
          itemVariant {
            id
            name
            value
          }
        }
      }
    }
  `;
}
