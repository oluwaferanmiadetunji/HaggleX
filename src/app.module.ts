import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NestCrawlerModule } from 'nest-crawler';
import { CrawlersModule } from './crawlers/crawlers.module';

@Module({
  imports: [NestCrawlerModule, CrawlersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
