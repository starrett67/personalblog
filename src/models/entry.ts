export interface EntryInterface {
    author: string;
    title: string;
    authorImage: string;
    description: string;
    headingImage: string;
    publishedDate: Date;
    lastEditDate: Date;
    body: string;
    _id: string;

    valid: boolean;
}

export class Entry implements EntryInterface {

    public author: string;
    public title: string;
    public authorImage: string;
    public description: string;
    public headingImage: string;
    public publishedDate: Date;
    public lastEditDate: Date;
    public body: string;
    public _id: string;

    constructor(data?: any) {
        Object.assign(this, data);
    }

    public get valid(): boolean {
        if (this.title && this.headingImage && this.description && this.body) {
            return true;
        }
        return false;
    }
}
