import { User } from '@app/user/decorators/user.decorator';
import { AuthGuard } from '@app/user/guards/auth.guard';
import { UserEntity } from '@app/user/user.entity';
import { Body, Controller, Post, Query, UseGuards } from '@nestjs/common';
import { ArticleSubmissionService } from './articlesubmission.service';
import { CreateArticleSubmissionDto } from './dto/createSubmission.dto';
import { ArticleSubmissionResponseInterface } from './types/articleSubmissionResponse.interface';

@Controller('submissions')
export class ArticleSubmissionController {
  constructor(
    private readonly articleSubmissionService: ArticleSubmissionService,
  ) {}

  @Post()
  @UseGuards(AuthGuard)
  async create(
    @User() currentUser: UserEntity,
    @Body('submission') createArticleSubmissionDto: CreateArticleSubmissionDto,
    @Query() query: any,
  ): Promise<ArticleSubmissionResponseInterface> {
    const submission =
      await this.articleSubmissionService.createArticleSubmission(
        currentUser,
        createArticleSubmissionDto,
        query,
      );

    return this.articleSubmissionService.buildArticleSubmissionResponse(
      submission,
    );
  }
}
