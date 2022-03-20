import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateArticles1647707766112 implements MigrationInterface {
    name = 'CreateArticles1647707766112'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "articles" ("id" SERIAL NOT NULL, "slug" character varying NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL DEFAULT '', "image" character varying NOT NULL DEFAULT '', "body" character varying NOT NULL DEFAULT '', "testcase" character varying NOT NULL DEFAULT '', "testcaseExplanation" character varying NOT NULL DEFAULT '', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "tagList" text NOT NULL, CONSTRAINT "PK_0a6e2c450d83e0b6052c2793334" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "articles"`);
    }

}
