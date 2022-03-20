import { ArticleSubmissionEntity } from '@app/articlesubmission/articlesubmission.entity';
import { UserEntity } from '@app/user/user.entity';
import {
  BeforeUpdate,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'articles' })
export class ArticleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  slug: string;

  @Column()
  title: string;

  @Column({ default: '' })
  description: string;

  @Column({ default: '' })
  image: string;

  @Column({ default: '' })
  body: string;

  @Column({ default: '' })
  testcase: string;

  @Column({ default: '' })
  testcaseExplanation: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @Column('simple-array')
  tagList: string[];

  @BeforeUpdate()
  updateTimeStamp() {
    this.updatedAt = new Date();
  }

  @ManyToOne(() => UserEntity, (user) => user.articles, { eager: true })
  author: UserEntity;

  @OneToMany(() => ArticleSubmissionEntity, (submission) => submission.article)
  submissions: ArticleSubmissionEntity;
}
