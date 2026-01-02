import { MigrationInterface, QueryRunner } from "typeorm";

export class AddIsactiveProjectMigration1767373097729 implements MigrationInterface {
    name = 'AddIsactiveProjectMigration1767373097729'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`project\` ADD \`is_active\` tinyint NOT NULL DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`project\` DROP COLUMN \`is_active\``);
    }

}
