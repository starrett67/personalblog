import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from './entry/entry.component';
import { EntrySummaryComponent } from './entry-summary/entry-summary.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: EntrySummaryComponent },
    { path: 'entry/:id', component: EntryComponent }
];
// { path: '**', component: PageNotFoundComponent }

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
