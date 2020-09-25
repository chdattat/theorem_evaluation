import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { PersonsService } from "../../services/persons.service";
import { SuccessComponent } from "src/app/shared/components/success/success.component";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent {
  contactForm: FormGroup;
  constructor(
    private _snackBar: MatSnackBar,
    private personsService: PersonsService
  ) {
    this.contactForm = new FormGroup({
      name: new FormControl("", Validators.required),
      lname: new FormControl(""),
      email: new FormControl("", [Validators.required, Validators.email]),
      phone: new FormControl("", [
        Validators.required,
        Validators.maxLength(10),
      ]),
    });
  }

  submitContactForm() {
    if (this.contactForm.valid) {
      this.personsService.saveContactDetails(this.contactForm.value).subscribe(
        (success) => {
          if (success) {
            this._snackBar.openFromComponent(SuccessComponent, {
              duration: 3000,
            });
          }
        },
        () => {
          this._snackBar.open("Error occured while saving data", "", {
            duration: 3000,
          });
        }
      );
    }
  }
}
