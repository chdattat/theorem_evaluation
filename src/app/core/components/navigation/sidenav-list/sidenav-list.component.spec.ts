import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavListComponent } from './sidenav-list.component';
import { CoreModule } from '../../core.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs/internal/observable/of';

describe('SidenavListComponent', () => {
  let component: SidenavListComponent;
  let fixture: ComponentFixture<SidenavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, RouterTestingModule.withRoutes([])],
      providers: [{ provide: ActivatedRoute, useValue: {} }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
