import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PersonCvComponent } from "./person-cv.component";
import { CoreModule } from "src/app/core/components/core.module";
import { ActivatedRoute } from "@angular/router";
import { of } from "rxjs/internal/observable/of";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { PersonsService } from "../../services/persons.service";

class MockActivatedRoute extends ActivatedRoute {
  constructor() {
    super();
    this.params = of({ id: 2 });
  }
}

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

describe("PersonCvComponent", () => {
  let component: PersonCvComponent;
  let fixture: ComponentFixture<PersonCvComponent>;
  let personsService: PersonsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PersonCvComponent],
      imports: [HttpClientTestingModule, CoreModule],
      providers: [
        PersonsService,
        { provide: ActivatedRoute, useClass: MockActivatedRoute },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonCvComponent);
    component = fixture.componentInstance;
    personsService = TestBed.get(PersonsService);
    spyOn(personsService, "getPersonsDetails").and.returnValue(
      of(personDetails)
    );
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
    expect(personsService.getPersonsDetails).toHaveBeenCalled();
    component.personDetails$.subscribe((data) => {
      expect(data.length).toBe(1);
    });
  });
});
