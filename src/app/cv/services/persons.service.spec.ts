import { TestBed } from "@angular/core/testing";
import {
  HttpTestingController,
  HttpClientTestingModule,
} from "@angular/common/http/testing";
import { PersonsService } from "./persons.service";
import { HttpErrorResponse } from "@angular/common/http";

const personDetails = [
  {
    id: 2,
    name: "Dattu",
    role: "Software Engineer",
    description: "Your profile description tells potential clients what you do",
    email: "rahul@gmail.com",
    phone: 2133235666,
  },
];

describe("PersonsService", () => {
  let httpTestingController: HttpTestingController;
  let service: PersonsService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(PersonsService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should call getPersonsDetails", () => {
    service.getPersonsDetails().subscribe((data) => {
      console.log(data);
      expect(data.length).toBe(1);
    });

    const req = httpTestingController.expectOne(
      "assets/persons-details/persons-details.json"
    );

    expect(req.request.method).toEqual("GET");
    req.flush(personDetails);
  });

  it("should throw error in case technical issue for the getPersonsDetails service", () => {
    service.getPersonsDetails().subscribe(
      () => fail("Service failed"),
      (error: HttpErrorResponse) => {
        expect(error.status).toBe(500);
      }
    );

    const req = httpTestingController.expectOne(
      "assets/persons-details/persons-details.json"
    );

    expect(req.request.method).toEqual("GET");
    req.flush("Service failed due to internal error", {
      status: 500,
      statusText: "Internal Server Error",
    });
  });
});
