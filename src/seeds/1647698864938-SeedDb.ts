import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1647698864938 implements MigrationInterface {
  name = 'SeedDb1647698864938';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tags (name) VALUES ('Array'),('DP'), ('String')`,
    );

    await queryRunner.query(
      // password is 123
      `INSERT INTO users (username, email, password, type) VALUES ('foo', 'foo@gmail.com', '$2b$10$rRJX3w.3fY8zrnTD674gMeCNaiSRB2iqwdCCJDarwdzBc1o7soPZ2', 'adminuser')`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, image, testcase,"testcaseExplanation","tagList", "authorId") VALUES ('first-problem', 'Frog Jumps' , 'Frog Jumps Leetcode', 'A frog is crossing a river. The river is divided into some number of units, and at each unit, there may or may not exist a stone. The frog can jump on a stone, but it must not jump into the water.Given a list of stones positions (in units) in sorted ascending order, determine if the frog can cross the river by landing on the last stone. Initially, the frog is on the first stone and assumes the first jump must be 1 unit.If the frogs last jump was k units, its next jump must be either k - 1, k, or k + 1 units. The frog can only jump in the forward direction.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Frog_jumping_contest_1.jpg/1024px-Frog_jumping_contest_1.jpg', 'Input: stones = [0,1,3,5,6,8,12,17] Output: true', 'Explanation: The frog can jump to the last stone by jumping 1 unit to the 2nd stone, then 2 units to the 3rd stone, then 2 units to the 4th stone, then 3 units to the 6th stone, 4 units to the 7th stone, and 5 units to the 8th stone.' , 'DP,Array', 1 ),('second-problem', 'Second Problem title', 'second problem description', 'second problem body', 'second problem image', 'second problem sample testcase', 'second problem testcaseexplanation', 'String', '1')`,
    );
  }

  public async down(): Promise<void> {}
}
