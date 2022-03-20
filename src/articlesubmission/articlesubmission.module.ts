import { ArticleEntity } from '@app/article/article.entity';
import { UserEntity } from '@app/user/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleSubmissionController } from './articlesubmission.controller';
import { ArticleSubmissionEntity } from './articlesubmission.entity';
import { ArticleSubmissionService } from './articlesubmission.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ArticleSubmissionEntity,
      ArticleEntity,
      UserEntity,
    ]),
  ],
  controllers: [ArticleSubmissionController],
  providers: [ArticleSubmissionService],
})
export class ArticleSubmissionModule {}
