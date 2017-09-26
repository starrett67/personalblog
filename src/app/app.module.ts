import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    EntrySummaryComponent,
    EntryComponent,
    SideWidgetsComponent,
    NewEntryComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    CKEditorModule,
    HttpModule
  ],
  providers: [EntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
