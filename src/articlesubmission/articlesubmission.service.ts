import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticleSubmissionService {
  async createArticleSubmission() {
    return 'CreateArticleSubmission from service';
  }
}
