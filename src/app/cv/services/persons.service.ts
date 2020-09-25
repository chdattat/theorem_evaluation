import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Person } from '../models/person';
import { Contact } from '../models/contact';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root',
})
export class PersonsService {
  private readonly personDetailsUrl =
    'assets/persons-details/persons-details.json';

  private readonly cotactDetailsUrl = 'services/rest/personalize/savecontact';

  constructor(private http: HttpClient) {}

  getPersonsDetails(): Observable<Person[]> {
    return this.http.get<Person[]>(this.personDetailsUrl);
  }

  saveContactDetails(details: Contact): Observable<boolean> {
    // Needs to call real rest to store contact details
    // return this.http.post<boolean>(this.cotactDetailsUrl, details);
    return of(true);
  }
}
