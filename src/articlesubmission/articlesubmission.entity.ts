import { ArticleEntity } from '@app/article/article.entity';
import { UserEntity } from '@app/user/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'submissions' })
export class ArticleSubmissionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uuid: string;

  @Column()
  file: string;

  @ManyToOne(() => UserEntity, (user) => user.articlesubmissions)
  author: UserEntity;

  @ManyToOne(() => ArticleEntity, (article) => article.submissions)
  article: ArticleEntity;
}
