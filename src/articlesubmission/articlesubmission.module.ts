import { Module } from '@nestjs/common';
import { ArticleSubmissionController } from './articlesubmission.controller';
import { ArticleSubmissionService } from './articlesubmission.service';

@Module({
  imports: [],
  controllers: [ArticleSubmissionController],
  providers: [ArticleSubmissionService],
})
export class ArticleSubmissionModule {}
