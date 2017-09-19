import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { EntrySummaryComponent } from './entry-summary/entry-summary.component';
import { EntryComponent } from './entry/entry.component';
import { EntryService } from '../services/entry-service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    EntrySummaryComponent,
    EntryComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [EntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
