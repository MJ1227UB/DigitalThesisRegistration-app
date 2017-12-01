import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Group} from './group.model';

const url = environment.RestAPI + '/groups';

@Injectable()
export class GroupService {
  constructor(private http: HttpClient) { }

  get(id: number): Observable<Group> {
    return this.http.get<Group>(url + '/' + id);
  }

  create(email: string): Observable<Group> {
  return this.http.post<Group>(url, {contactEmail: email});
  }

  update(group: Group): Observable<Group> {
    return this.http.put<Group>(url + '/' + group.id, group);
  }

}
