import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../../services/persons.service';
import { Person } from '../../models/person';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss'],
})
export class PersonsComponent implements OnInit {
  persons$: Observable<Person[]>;
  totalCV$: Observable<number>;
  constructor(private personsService: PersonsService) {}

  ngOnInit() {
    this.persons$ = this.personsService.getPersonsDetails();
    this.totalCV$ = this.personsService
      .getPersonsDetails()
      .pipe(map((persons) => persons.length));
  }
}
