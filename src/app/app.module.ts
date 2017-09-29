import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { EntrySummaryComponent } from './entry-summary/entry-summary.component';
import { EntryComponent } from './entry/entry.component';
import { EntryService } from '../services/entry-service';
import { AppRoutingModule } from './app-routing.module';
import { SideWidgetsComponent } from './side-widgets/side-widgets.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { SafeHtmlPipe } from '../pipes/SafeHtmlPipe';

export function entryServiceFactory(entryService: EntryService): Function {
  return () => entryService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    EntrySummaryComponent,
    EntryComponent,
    SideWidgetsComponent,
    NewEntryComponent,
    SafeHtmlPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    CKEditorModule,
    HttpClientModule
  ],
  providers: [EntryService, {
    // Init data from db
    provide: APP_INITIALIZER,
    useFactory: entryServiceFactory,
    deps: [EntryService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
