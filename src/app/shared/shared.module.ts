import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ErrorMessageComponent } from "./validation/error-message/error-message.component";
import { SuccessComponent } from "./components/success/success.component";
import { CoreModule } from "../core/components/core.module";

@NgModule({
  declarations: [ErrorMessageComponent, SuccessComponent],
  imports: [BrowserModule, CoreModule],
  exports: [ErrorMessageComponent, SuccessComponent],
  entryComponents: [SuccessComponent],
})
export class SharedModule {}
