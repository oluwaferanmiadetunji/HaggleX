import { Controller, Get, Post } from '@nestjs/common';
import { CrawlersService } from './crawlers.service';
import { CrawlerResponse } from 'src/types/crawler';

@Controller('crawl')
export class CrawlersController {
  constructor(private readonly crawlersService: CrawlersService) {}

  @Post()
  async scrapePage(): Promise<CrawlerResponse> {
    return await this.crawlersService.scrape();
  }
}
