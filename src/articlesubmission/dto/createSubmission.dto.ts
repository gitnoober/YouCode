import { IsNotEmpty } from 'class-validator';

export class CreateArticleSubmissionDto {
  @IsNotEmpty()
  readonly file: string;
}
