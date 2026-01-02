import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration51ea2ce7Migration1767372290387 implements MigrationInterface {
    name = 'Migration51ea2ce7Migration1767372290387'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`hero\` DROP COLUMN \`avail_hire\``);
        await queryRunner.query(`ALTER TABLE \`hero\` ADD \`avail_hire\` tinyint NOT NULL DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`hero\` DROP COLUMN \`avail_hire\``);
        await queryRunner.query(`ALTER TABLE \`hero\` ADD \`avail_hire\` varchar(255) NOT NULL DEFAULT '0'`);
    }

}
