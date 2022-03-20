import { Controller, Post } from '@nestjs/common';
import { ArticleSubmissionService } from './articlesubmission.service';

@Controller('articlesubmissions')
export class ArticleSubmissionController {
  constructor(
    private readonly articleSubmissionService: ArticleSubmissionService,
  ) {}

  @Post()
  async create() {
    return this.articleSubmissionService.createArticleSubmission();
  }
}
