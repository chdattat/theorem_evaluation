import { ValidationErrors } from "@angular/forms";

function isEmptyInputValue(value) {
  // we don't check for string here so it also works with arrays
  return value == null || value.length === 0;
}

export class ContactDetailsValidator {
  static emailValidation(control): ValidationErrors | null {
    if (isEmptyInputValue(control.value)) {
      return null;
    }
  }
}
