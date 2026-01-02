import { MigrationInterface, QueryRunner } from "typeorm";

export class AddIsactiveProjectMigration1767372933571 implements MigrationInterface {
    name = 'AddIsactiveProjectMigration1767372933571'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`social_type\` ADD \`is_active\` tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`tech_stack_version\` ADD \`is_active\` tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`project\` ADD \`selected_work\` tinyint NOT NULL DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`project\` DROP COLUMN \`selected_work\``);
        await queryRunner.query(`ALTER TABLE \`tech_stack_version\` DROP COLUMN \`is_active\``);
        await queryRunner.query(`ALTER TABLE \`social_type\` DROP COLUMN \`is_active\``);
    }

}
