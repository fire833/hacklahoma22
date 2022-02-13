import { GlobalGoodNews, GlobalHorribleNews, GlobalNegativeNews, LocalGoodNews, LocalHorribleNews, LocalNegativeNews } from "./news";


// Specifies a newsemail bit of data that can be rendered to the screen.
export type NewsEmail = {
    // the subject of the email
    Subject: string;
    // The one-liner of the email
    OneLiner: string;
}

export class NewsEmailTemplate {
    Email: NewsEmail = {
        Subject: "",
        OneLiner: ""
    };

    constructor(email: NewsEmail) {
        this.Email = email;
    }
}

export function GetRandomNewsEmailTemplate(type: NewsType): NewsEmailTemplate {
    switch (type) {
        case NewsType.LocalPositive:
            let e: NewsEmail = LocalGoodNews[Math.floor(Math.random() * LocalGoodNews.length)];
            return new NewsEmailTemplate(e);
        case NewsType.LocalNegative:
            let e1: NewsEmail = LocalNegativeNews[Math.floor(Math.random() * LocalNegativeNews.length)];
            return new NewsEmailTemplate(e1);
        case NewsType.LocalHorrible:
            let e2: NewsEmail = LocalHorribleNews[Math.floor(Math.random() * LocalHorribleNews.length)];
            return new NewsEmailTemplate(e2);
        case NewsType.GlobalPositive:
            let e3: NewsEmail = GlobalGoodNews[Math.floor(Math.random() * GlobalGoodNews.length)];
            return new NewsEmailTemplate(e3);
        case NewsType.GlobalNegative:
            let e4: NewsEmail = GlobalNegativeNews[Math.floor(Math.random() * GlobalNegativeNews.length)];
            return new NewsEmailTemplate(e4);
        case NewsType.GlobalHorrible:
            let e5: NewsEmail = GlobalHorribleNews[Math.floor(Math.random() * GlobalHorribleNews.length)];
            return new NewsEmailTemplate(e5);
        default:
            let e6: NewsEmail = LocalGoodNews[Math.floor(Math.random() * LocalGoodNews.length)];
            return new NewsEmailTemplate(e6);
    }
}

export enum NewsType {
    LocalPositive,
    GlobalPositive,
    LocalNegative,
    GlobalNegative,
    LocalHorrible,
    GlobalHorrible
}