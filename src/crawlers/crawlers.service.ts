import { Injectable } from '@nestjs/common';
import { NestCrawlerService } from 'nest-crawler';

@Injectable()
export class CrawlersService {
    constructor(
        private readonly crawler: NestCrawlerService,
    ) { }

    public async scrape(): Promise<void> {
        interface ExampleCom {
            title: string;
            info: string;
        }

        const data: any = await this.crawler.fetch({
            target: 'http://books.toscrape.com/index.html',
            fetch: {
                title: 'h1',
                info: {
                    selector: 'p > a',
                    attr: 'href',
                },
            },
        });

        return data
        // {
        //   title: 'Example Domain',
        //   info: 'http://www.iana.org/domains/example'
        // }
    }
}
