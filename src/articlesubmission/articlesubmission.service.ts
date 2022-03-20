import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ArticleSubmissionEntity } from '@app/articlesubmission/articlesubmission.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import slugify from 'slugify';
import { UserEntity } from '@app/user/user.entity';
import { CreateArticleSubmissionDto } from './dto/createSubmission.dto';
import { v4 as uuidv4 } from 'uuid';
import { ArticleEntity } from '@app/article/article.entity';
import { ArticleSubmissionResponseInterface } from './types/articleSubmissionResponse.interface';

@Injectable()
export class ArticleSubmissionService {
  constructor(
    @InjectRepository(ArticleSubmissionEntity)
    private readonly articleSubmissionRepository: Repository<ArticleSubmissionEntity>,
    @InjectRepository(ArticleEntity)
    private readonly articleRepository: Repository<ArticleEntity>,
  ) {}

  async createArticleSubmission(
    currentUser: UserEntity,
    createArticleSubmissionDto: CreateArticleSubmissionDto,
    query: any,
  ) {
    const article = await this.articleRepository.findOne({
      id: query.articleId,
    });
    if (!article) {
      throw new HttpException('Article does not exist', HttpStatus.NOT_FOUND);
    }

    const submission = new ArticleSubmissionEntity();
    Object.assign(submission, createArticleSubmissionDto);
    // console.log('submission', createArticleSubmissionDto);
    submission.uuid = uuidv4();
    submission.author = currentUser;
    submission.article = article;

    return await this.articleSubmissionRepository.save(submission);
  }

  buildArticleSubmissionResponse(
    submission: ArticleSubmissionEntity,
  ): ArticleSubmissionResponseInterface {
    return { submission };
  }

  async findByUuid(uuid: string): Promise<ArticleSubmissionEntity> {
    return await this.articleSubmissionRepository.findOne({ uuid });
  }

  async findBySlug(slug: string): Promise<ArticleEntity> {
    return await this.articleRepository.findOne({ slug });
  }

  private getSlug(title: string): string {
    return (
      slugify(title, { lower: true }) +
      '-' +
      ((Math.random() * Math.pow(36, 6)) | 0).toString(36)
    );
  }
}
