import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ContactComponent } from './contact.component';
import { CoreModule } from 'src/app/core/components/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PersonsService } from '../../services/persons.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of, throwError } from 'rxjs';

const MatSnackBarStub = {
  openFromComponent: jasmine
    .createSpy('openFromComponent')
    .and.returnValue('opened'),
  open: jasmine.createSpy('open').and.returnValue('opened'),
};

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let personsService: PersonsService;
  let matSnackBar: MatSnackBar;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [
        NoopAnimationsModule,
        CoreModule,
        SharedModule,
        HttpClientTestingModule,
      ],
      providers: [
        PersonsService,
        {
          provide: MatSnackBar,
          useValue: MatSnackBarStub,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    personsService = TestBed.get(PersonsService);
    matSnackBar = TestBed.get(MatSnackBar);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should save contact details by submitting the form', fakeAsync(() => {
    component.contactForm.setValue({
      name: 'test',
      lname: 'test',
      email: 'test@gmail.com',
      phone: 33525353255,
    });
    spyOn(personsService, 'saveContactDetails').and.returnValue(of(true));
    component.submitContactForm();
    expect(personsService.saveContactDetails).toHaveBeenCalled();
    expect(matSnackBar.openFromComponent).toHaveBeenCalled();
  }));

  it('Should throw error in case technical issue by submitting the form', fakeAsync(() => {
    component.contactForm.setValue({
      name: 'test',
      lname: 'test',
      email: 'test@gmail.com',
      phone: 33525353255,
    });
    spyOn(personsService, 'saveContactDetails').and.returnValue(
      throwError({ status: 500 })
    );
    component.submitContactForm();
    expect(personsService.saveContactDetails).toHaveBeenCalled();
    expect(matSnackBar.open).toHaveBeenCalled();
  }));
});
