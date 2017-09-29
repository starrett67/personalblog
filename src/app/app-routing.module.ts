import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from './entry/entry.component';
import { EntrySummaryComponent } from './entry-summary/entry-summary.component';
import { NewEntryComponent } from './new-entry/new-entry.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: EntrySummaryComponent },
    { path: 'home?search', component: EntrySummaryComponent },
    { path: 'entry/:id', component: EntryComponent },
    { path: 'new_entry', component: NewEntryComponent },
    { path: 'new_entry/:id', component: NewEntryComponent }
];
// { path: '**', component: PageNotFoundComponent }

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
