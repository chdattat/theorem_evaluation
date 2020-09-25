import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessComponent } from './success.component';
import { CoreModule } from 'src/app/core/components/core.module';

describe('SuccessComponent', () => {
  let component: SuccessComponent;
  let fixture: ComponentFixture<SuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessComponent],
      imports: [CoreModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
