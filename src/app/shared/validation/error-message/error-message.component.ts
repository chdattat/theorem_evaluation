import { Component, Input, OnDestroy } from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';
import { startWith } from 'rxjs/internal/operators/startWith';
import { map } from 'rxjs/internal/operators/map';
import { valdationErrors } from '../../../shared/validation/error-message/error-message';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent implements OnDestroy {
  private formControl: FormControl;
  private statusChangesSubscription;
  errorMessages: string[];

  @Input()
  ofForm: FormGroupDirective;

  @Input()
  set ofFormControl(newFormControl: FormControl) {
    this.unsubscribeFromStatusChanges();
    this.formControl = newFormControl;
    if (this.formControl) {
      this.statusChangesSubscription = this.formControl.statusChanges
        .pipe(
          startWith(this.formControl.status),
          map((status) => (status === 'INVALID' ? this.getErrors() : []))
        )
        // we subscribe directly instead of using the async pipe as it subscribes (sometimes) too late and misses some status changes
        .subscribe((errorMessages) => (this.errorMessages = errorMessages));
    }
  }

  constructor(private errorStateMatcher: ErrorStateMatcher) {}

  errorsShouldBeShown() {
    const form = this.ofForm || null;
    return this.errorStateMatcher.isErrorState(this.formControl, form);
  }

  private getErrors(): string[] {
    const errors = this.formControl ? this.formControl.errors : null;
    if (errors) {
      console.log('error ->', errors);
      return Object.keys(errors).map((errorCode) => valdationErrors[errorCode]);
    }
    return [];
  }

  ngOnDestroy(): void {
    this.unsubscribeFromStatusChanges();
  }

  private unsubscribeFromStatusChanges() {
    if (this.statusChangesSubscription) {
      this.statusChangesSubscription.unsubscribe();
    }
  }
}
