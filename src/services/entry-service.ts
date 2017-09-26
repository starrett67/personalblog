import { Entry } from '../models/entry';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as config from '../../config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EntryService {
    private entries: Entry[] = [];
    private url: string;
    constructor(private http: Http) {
        this.url = 'http://localhost:' + config.port + '/api/post';
        this.entries = [];
        for (let i = 0; i < 5; i++) {
            this.entries.push(Entry.generate());
        }
    }

    public getEntries(): Observable<Entry[]> {
        return this.http.get(this.url)
            .map(res => {
                for (const entry of res.json()) {
                    this.entries.push(Entry.loadNewEntry(entry));
                }
                return this.entries;
            });
    }

    public saveEntry(entry: Entry): void {
        this.http.post(this.url, entry);
    }

    public addEntries(): Entry[] {
        for (let i = 0; i < 3; i++) {
            this.entries.push(Entry.generate());
        }
        return this.entries;
    }

    public getEntry(id): Entry {
        return this.entries.find(e => e._id === id);
    }
}
