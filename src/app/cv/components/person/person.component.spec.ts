import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PersonComponent } from "./person.component";
import { CoreModule } from "src/app/core/components/core.module";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { Router } from "@angular/router";

const routeStub = {
  navigate: jasmine
    .createSpy("navigate")
    .and.returnValue("/personalize/person-cv"),
};

describe("PersonComponent", () => {
  let component: PersonComponent;
  let fixture: ComponentFixture<PersonComponent>;
  let route: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PersonComponent],
      imports: [
        CoreModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [{ provide: Router, useValue: routeStub }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonComponent);
    component = fixture.componentInstance;
    route = TestBed.get(Router);
    component.person = {
      id: 1,
      name: "test",
      role: "test",
      description: "nodesc",
      email: "test@gmail.com",
      phone: 34534545,
    };
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Should navigate", () => {
    component.viewPersonCv();
    expect(route.navigate).toHaveBeenCalled();
  });
});
