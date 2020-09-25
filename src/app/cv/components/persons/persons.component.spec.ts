import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PersonsComponent } from "./persons.component";
import { PersonComponent } from "../person/person.component";
import { CoreModule } from "src/app/core/components/core.module";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { PersonsService } from "../../services/persons.service";
import { of } from "rxjs/internal/observable/of";
import { Router } from "@angular/router";

const personDetails = [
  {
    id: 2,
    name: "Rahul",
    role: "Software Engineer",
    description: "Your profile description tells potential clients what you do",
    email: "rahul@gmail.com",
    phone: 2133235666,
  },
];

const routeStub = {
  navigate: jasmine
    .createSpy("navigate")
    .and.returnValue("/personalize/person-cv"),
};

describe("PersonsComponent", () => {
  let component: PersonsComponent;
  let fixture: ComponentFixture<PersonsComponent>;
  let personsService: PersonsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PersonsComponent, PersonComponent],
      imports: [CoreModule, HttpClientTestingModule],
      providers: [PersonsService, { provide: Router, useValue: routeStub }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonsComponent);
    component = fixture.componentInstance;
    personsService = TestBed.get(PersonsService);
    spyOn(personsService, "getPersonsDetails").and.returnValue(
      of(personDetails)
    );
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
    component.persons$.subscribe((data) => {
      expect(data.length).toBe(1);
    });
    component.totalCV$.subscribe((total) => {
      expect(total).toBe(1);
    });
  });
});
