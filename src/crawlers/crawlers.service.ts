import { Injectable } from '@nestjs/common';
import { NestCrawlerService } from 'nest-crawler';
import { CrawlerResponse } from 'src/types/crawler';

@Injectable()
export class CrawlersService {
  constructor(private readonly crawler: NestCrawlerService) {}

  public async scrape(): Promise<CrawlerResponse> {
    const data: CrawlerResponse = await this.crawler.fetch({
      target: 'http://books.toscrape.com/index.html',
      fetch: {
        title: 'title',
        description: {
          selector: 'meta[name="description"]',
          attr: 'content',
        },
        largestImage: {
          selector: 'img',
          attr: 'src',
        },
      },
    });

    return data;
  }
}
