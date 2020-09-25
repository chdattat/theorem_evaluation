import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonsService } from '../../services/persons.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { Person } from '../../models/person';

@Component({
  selector: 'app-person-cv',
  templateUrl: './person-cv.component.html',
  styleUrls: ['./person-cv.component.scss'],
})
export class PersonCvComponent implements OnInit {
  personDetails$: Observable<Person[]>;
  constructor(
    private route: ActivatedRoute,
    private personsService: PersonsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((data) =>
      this.getPersonData(parseInt(data.id, 10))
    );
  }

  private getPersonData(id: number) {
    this.personDetails$ = this.personsService
      .getPersonsDetails()
      .pipe(map((persons) => persons.filter((person) => person.id === id)));
  }
}
