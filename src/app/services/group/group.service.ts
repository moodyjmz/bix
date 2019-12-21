import { Injectable } from '@angular/core';
import { retry, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { MockData } from '../../../../mock-api-data/group';
import { Group } from '../../models/group/group';
@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor() { }

  public getData() {
    return this.makeApiRequest().pipe(
        retry(2),
        map(this.makeGroup)
    );
  }

  private makeGroup(data) {
      return new Group(data);
  }

  handleError(error) {
    console.error(error);
  }

  private makeApiRequest() {
    return of(MockData);
  }
}
