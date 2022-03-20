import { ArticleEntity } from '@app/article/article.entity';
import { UserEntity } from '@app/user/user.entity';
import {
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'submissions' })
export class ArticleSubmissionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, (user) => user.articlesubmissions)
  author: UserEntity;

  @ManyToOne(() => ArticleEntity, (article) => article.submissions)
  article: ArticleEntity;
}
