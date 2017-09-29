import { Entry, EntryInterface } from '../models/entry';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as config from '../../config';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EntryService {
    public filter: string;
    private entries: Entry[] = [];
    private url: string;
    constructor(private http: HttpClient) {
        this.url = 'http://localhost:' + config.port + '/api/post';
    }

    // Used to initialize data in the service so routing by ids works without visiting home first
    public init(): Promise<Entry[]> {
        return this.http.get<EntryInterface[]>(this.url, {
            headers: new HttpHeaders().set('Accept', 'application/json')
        })
            .toPromise()
            .then((entries: Entry[]) => {
                entries.forEach((entry: Entry) => this.entries.push(new Entry(entry)));
                this.entries.sort(this.sortDateDecending);
            })
            .catch((err: any) => {
                console.log(err);
                return err;
            });
    }

    public get filteredEntries(): Entry[] {
        let filteredEntries = this.entries;
        if (this.filter) {
            filteredEntries = this.entries.filter(e => e.title.toLowerCase().includes(this.filter.toLowerCase()));
        }
        return filteredEntries;
    }

    public getEntries(): Observable<Entry[]> {
        return this.http.get<EntryInterface[]>(this.url, {
            headers: new HttpHeaders().set('Accept', 'application/json')
        })
            .map(entries => {
                for (const entry of entries) {
                    if (!this.entries.find(e => e._id === entry._id)) {
                        this.entries.push(new Entry(entry));
                    }
                }
                return this.entries.sort(this.sortDateDecending);
            })
            .catch(err => {
                console.log(err);
                return Observable.throw(err);
            });
    }

    public saveEntry(entry: Entry) {
        this.entries.push(entry);
        this.entries.sort(this.sortDateDecending);
        return this.http.post(this.url, entry, {
            headers: new HttpHeaders().set('Content-Type', 'application/json')
        });
    }

    public getEntry(id): Entry {
        return this.entries.find(e => e._id === id);
    }

    private sortDateDecending(a: Entry, b: Entry): number {
        return a.lastEditDate > b.lastEditDate ? -1 : a.lastEditDate < b.lastEditDate ? 1 : 0;
    }
}
