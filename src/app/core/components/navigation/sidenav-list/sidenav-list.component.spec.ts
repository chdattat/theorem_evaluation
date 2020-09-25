import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SidenavListComponent } from "./sidenav-list.component";
import { CoreModule } from "../../core.module";

describe("SidenavListComponent", () => {
  let component: SidenavListComponent;
  let fixture: ComponentFixture<SidenavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
