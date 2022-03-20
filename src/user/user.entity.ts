import { ArticleSubmissionEntity } from '@app/articlesubmission/articlesubmission.entity';
import { hash } from 'bcrypt';

import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ArticleEntity } from '../article/article.entity';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column({ default: '' })
  bio: string;

  @Column({ default: '' })
  image: string;

  @Column({ default: 'normaluser' })
  type: string;

  @Column({ select: false })
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 10);
  }

  @OneToMany(() => ArticleEntity, (article) => article.author)
  articles: ArticleEntity[];

  @OneToMany(
    () => ArticleSubmissionEntity,
    (articlesubmission) => articlesubmission.author,
  )
  articlesubmissions: ArticleSubmissionEntity[];
}
