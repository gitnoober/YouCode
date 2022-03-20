import {MigrationInterface, QueryRunner} from "typeorm";

export class AddRelationsBetweenArticleAndUserAndArticleAndArticleSubmission1647763275462 implements MigrationInterface {
    name = 'AddRelationsBetweenArticleAndUserAndArticleAndArticleSubmission1647763275462'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "submissions" ("id" SERIAL NOT NULL, "authorId" integer, "articleId" integer, CONSTRAINT "PK_10b3be95b8b2fb1e482e07d706b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "articles" ADD "authorId" integer`);
        await queryRunner.query(`ALTER TABLE "submissions" ADD CONSTRAINT "FK_f9feced9d5cfc8687349db97351" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "submissions" ADD CONSTRAINT "FK_7992bcd4f2b66215ceeb687dec1" FOREIGN KEY ("articleId") REFERENCES "articles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "articles" ADD CONSTRAINT "FK_65d9ccc1b02f4d904e90bd76a34" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articles" DROP CONSTRAINT "FK_65d9ccc1b02f4d904e90bd76a34"`);
        await queryRunner.query(`ALTER TABLE "submissions" DROP CONSTRAINT "FK_7992bcd4f2b66215ceeb687dec1"`);
        await queryRunner.query(`ALTER TABLE "submissions" DROP CONSTRAINT "FK_f9feced9d5cfc8687349db97351"`);
        await queryRunner.query(`ALTER TABLE "articles" DROP COLUMN "authorId"`);
        await queryRunner.query(`DROP TABLE "submissions"`);
    }

}
