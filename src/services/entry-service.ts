import { Entry } from '../models/entry';

export class EntryService {
    private entries: Entry[] = [];

    constructor() {
        this.entries = [];
        for (let i = 0; i < 5; i++) {
            this.entries.push(Entry.generate());
        }
    }

    public getEntries(): Entry[] {
        return this.entries;
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
