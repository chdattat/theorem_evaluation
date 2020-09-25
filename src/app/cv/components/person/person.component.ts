import { Component, OnInit, Input } from "@angular/core";
import { Person } from "../../models/person";
import { Router } from "@angular/router";

@Component({
  selector: "app-person",
  templateUrl: "./person.component.html",
  styleUrls: ["./person.component.scss"],
})
export class PersonComponent implements OnInit {
  @Input() person: Person;
  constructor(private router: Router) {}

  ngOnInit() {}

  viewPersonCv() {
    this.router.navigate(["/personalize/person-cv", this.person.id]);
  }
}
