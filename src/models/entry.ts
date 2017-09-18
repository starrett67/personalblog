declare function require(name: string);
const Chance = require('chance');

export class Entry {

    public author: string;
    public title: string;
    public authorImage: string;
    public description: string;
    public headingImage: string;
    public publishedDate: Date;
    public lastEditDate: Date;

    static generate(): Entry {
        const codingImages = [
            'http://www.predicate.us/wordpress/wp-content/uploads/2017/01/coding.jpg',
            'http://kellerelementary.weebly.com/uploads/2/5/7/9/25792133/coding.jpg',
            'http://codecondo.com/wp-content/uploads/2014/04/5-Coding-Challenges-to-Help-You-Train-Your-Brain.jpg?x94435',
            'http://static.digg.com/images/6bd38e3677544a74b2ccbc913a7f91c6_f5dbc6a028a948059be510736504f3ab_header.jpeg',
            'http://www.gettingsmart.com/wp-content/uploads/2014/11/coding-graphic-481x335.jpg',
            'https://i.ytimg.com/vi/cKhVupvyhKk/maxresdefault.jpg'
        ];
        const newEntry = new this();
        const chance = new Chance();
        newEntry.author = chance.name();
        newEntry.title = chance.sentence({ words: 3 });
        newEntry.description = chance.sentence({ words: 6 });
        newEntry.publishedDate = chance.date({ year: 2017 });
        newEntry.lastEditDate = newEntry.publishedDate;
        newEntry.authorImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVnbNVR-XdlwSafETKL2PmNrMZ0Hn0KBOzQHWOrsisg5-FRneGXw';
        newEntry.headingImage = codingImages[chance.integer({ min: 0, max: 5 })];
        return newEntry;
    }
    constructor() { }

}
