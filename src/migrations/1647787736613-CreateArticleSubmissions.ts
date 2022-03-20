import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateArticleSubmissions1647787736613 implements MigrationInterface {
    name = 'CreateArticleSubmissions1647787736613'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "submissions" ADD "uuid" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "submissions" ADD "file" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "submissions" DROP COLUMN "file"`);
        await queryRunner.query(`ALTER TABLE "submissions" DROP COLUMN "uuid"`);
    }

}
