import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PersonsComponent } from "./cv/components/persons/persons.component";
import { PersonCvComponent } from "./cv/components/person-cv/person-cv.component";
import { ContactComponent } from "./cv/components/contact/contact.component";

const routes: Routes = [
  {
    path: "personalize",
    children: [
      {
        path: "persons",
        component: PersonsComponent,
      },
      {
        path: "person-cv/:id",
        component: PersonCvComponent,
      },
      {
        path: "contact",
        component: ContactComponent,
      },
    ],
  },
  { path: "", redirectTo: "/personalize/persons", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
