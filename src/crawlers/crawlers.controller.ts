import { Controller, Get, Post } from '@nestjs/common';
import { CrawlersService } from './crawlers.service';

@Controller('crawl')
export class CrawlersController {
  constructor(private readonly crawlersService: CrawlersService) { }

  @Post()
  async scrapePage(): Promise<any> {
    return await this.crawlersService.scrape()
  }
}
