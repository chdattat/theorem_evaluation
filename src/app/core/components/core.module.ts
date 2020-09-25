import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HeaderComponent } from './navigation/header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SidenavListComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    RouterModule,
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    SidenavListComponent,
    FooterComponent,
    HeaderComponent,
    MatSnackBarModule,
    LayoutComponent,
    RouterModule,
  ],
})
export class CoreModule {}
