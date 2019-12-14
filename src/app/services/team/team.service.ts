import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, map } from 'rxjs/operators';
import { TeamMember } from '../../models/team-member/team-member';

@Injectable({
    providedIn: 'root'
})
export class TeamService {
    private url = environment.teamMembersApi;
    count = 3;

    constructor(private http: HttpClient) {
    }

    /**
     * Fetch array of members
     * @param [count] Members to fetch
     */
    public getMembers(count = this.count) {
        return this.makeApiRequest(count).pipe(
            retry(2),
            map(this.mockMembers)
        );
    }

    private mockMembers(data) {
        return data.results.map(member => {
            return new TeamMember(member);
        });
    }

    handleError(error) {
        console.error(error);
    }

    private makeApiRequest(count: number) {
        return this.http.get(`${this.url}?results=${count}`);
    }

}
