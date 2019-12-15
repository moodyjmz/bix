import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Alert } from '../../models/alert/alert';
import { MockAlertData } from '../../../../mock-api-data/alerts';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  count = 3;

  constructor(private http: HttpClient) {
  }

  /**
   * Fetch array of members
   * @param [count] Members to fetch
   */
  public getAlerts(count = this.count) {
    return this.makeApiRequest(count).pipe(
        retry(2),
        map(this.makeAlerts)
    );
  }

  private makeAlerts(data) {
    return data.data.map(alert => {
      return new Alert(alert);
    });
  }

  handleError(error) {
    console.error(error);
  }

  private makeApiRequest(count: number) {
    return of(MockAlertData);
  }
}
