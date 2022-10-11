import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CiclosComponent } from './components/ciclos/ciclos.component';
import { GradosPipe } from './libs/pipes/grados.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CiclosComponent,
    GradosPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
