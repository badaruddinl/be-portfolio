import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration02dafae9Migration1767371615001 implements MigrationInterface {
    name = 'Migration02dafae9Migration1767371615001'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` ON \`user\``);
        await queryRunner.query(`CREATE TABLE \`social_type\` (\`id\` varchar(36) NOT NULL, \`code\` varchar(100) NOT NULL, \`label\` varchar(100) NOT NULL, \`icon\` varchar(100) NULL, \`base_url\` varchar(255) NULL, UNIQUE INDEX \`IDX_87dc2d84b1c4821de9654c30ab\` (\`code\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`hero_social\` (\`id\` varchar(36) NOT NULL, \`url\` varchar(255) NOT NULL, \`hero_id\` varchar(36) NULL, \`social_type_id\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`hero\` (\`id\` varchar(36) NOT NULL, \`name\` text NOT NULL, \`description\` text NOT NULL, \`profile_image\` varchar(255) NOT NULL, \`avail_hire\` varchar(255) NOT NULL DEFAULT 0, \`based\` varchar(255) NOT NULL, \`roles\` text NOT NULL, \`cv_link\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`hero_role\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(100) NOT NULL, \`heroId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`job\` (\`id\` varchar(36) NOT NULL, \`start_date\` date NOT NULL, \`end_date\` date NULL, \`role\` varchar(100) NOT NULL, \`company\` varchar(100) NOT NULL, \`url\` varchar(255) NOT NULL, \`desc\` text NOT NULL, \`point_desc\` text NOT NULL, \`stack\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`project_feature\` (\`id\` varchar(36) NOT NULL, \`description\` text NOT NULL, \`project_id\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tech_stack_version\` (\`id\` varchar(36) NOT NULL, \`version\` varchar(50) NOT NULL, \`release_date\` varchar(255) NULL, \`notes\` varchar(255) NULL, \`tech_id\` varchar(36) NULL, UNIQUE INDEX \`IDX_1c28fce2be7e3afb0547179679\` (\`tech_id\`, \`version\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tech_stack\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`icon\` varchar(255) NULL, UNIQUE INDEX \`IDX_d3e6e2fa41c3cc6ddfeeda331f\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`project_tech\` (\`id\` varchar(36) NOT NULL, \`project_id\` varchar(36) NULL, \`tech_id\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`project_collaborator\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(100) NOT NULL, \`role\` varchar(100) NOT NULL, \`url\` varchar(255) NULL, \`project_id\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`project\` (\`id\` varchar(36) NOT NULL, \`title\` varchar(255) NOT NULL, \`tag\` varchar(255) NOT NULL, \`year\` varchar(10) NOT NULL, \`overview\` text NOT NULL, \`challenge\` text NOT NULL, \`solution\` text NOT NULL, \`desc\` text NOT NULL, \`images\` text NULL, \`live_url\` text NULL, \`source_url\` text NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`project_image\` (\`id\` varchar(36) NOT NULL, \`url\` varchar(255) NOT NULL, \`projectId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`hero_social\` ADD CONSTRAINT \`FK_450fa16935f1a02152fcea58c1a\` FOREIGN KEY (\`hero_id\`) REFERENCES \`hero\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`hero_social\` ADD CONSTRAINT \`FK_f241165898944435a30425fa3f2\` FOREIGN KEY (\`social_type_id\`) REFERENCES \`social_type\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`hero_role\` ADD CONSTRAINT \`FK_1e163ef870bcbcf03791b4d2563\` FOREIGN KEY (\`heroId\`) REFERENCES \`hero\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`project_feature\` ADD CONSTRAINT \`FK_ab9b9a7bdc44d5b2734495aedfb\` FOREIGN KEY (\`project_id\`) REFERENCES \`project\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`tech_stack_version\` ADD CONSTRAINT \`FK_b01a21b6f0c1744c42dabeaa2c7\` FOREIGN KEY (\`tech_id\`) REFERENCES \`tech_stack\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`project_tech\` ADD CONSTRAINT \`FK_fccba2916520f7fb6e93351701f\` FOREIGN KEY (\`project_id\`) REFERENCES \`project\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`project_tech\` ADD CONSTRAINT \`FK_e963b2439d3255370b3642d8125\` FOREIGN KEY (\`tech_id\`) REFERENCES \`tech_stack\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`project_collaborator\` ADD CONSTRAINT \`FK_89ecb190c9ff8134c495596a4e1\` FOREIGN KEY (\`project_id\`) REFERENCES \`project\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`project_image\` ADD CONSTRAINT \`FK_7b27cbd4456cc6313d8a476b32d\` FOREIGN KEY (\`projectId\`) REFERENCES \`project\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`project_image\` DROP FOREIGN KEY \`FK_7b27cbd4456cc6313d8a476b32d\``);
        await queryRunner.query(`ALTER TABLE \`project_collaborator\` DROP FOREIGN KEY \`FK_89ecb190c9ff8134c495596a4e1\``);
        await queryRunner.query(`ALTER TABLE \`project_tech\` DROP FOREIGN KEY \`FK_e963b2439d3255370b3642d8125\``);
        await queryRunner.query(`ALTER TABLE \`project_tech\` DROP FOREIGN KEY \`FK_fccba2916520f7fb6e93351701f\``);
        await queryRunner.query(`ALTER TABLE \`tech_stack_version\` DROP FOREIGN KEY \`FK_b01a21b6f0c1744c42dabeaa2c7\``);
        await queryRunner.query(`ALTER TABLE \`project_feature\` DROP FOREIGN KEY \`FK_ab9b9a7bdc44d5b2734495aedfb\``);
        await queryRunner.query(`ALTER TABLE \`hero_role\` DROP FOREIGN KEY \`FK_1e163ef870bcbcf03791b4d2563\``);
        await queryRunner.query(`ALTER TABLE \`hero_social\` DROP FOREIGN KEY \`FK_f241165898944435a30425fa3f2\``);
        await queryRunner.query(`ALTER TABLE \`hero_social\` DROP FOREIGN KEY \`FK_450fa16935f1a02152fcea58c1a\``);
        await queryRunner.query(`DROP TABLE \`project_image\``);
        await queryRunner.query(`DROP TABLE \`project\``);
        await queryRunner.query(`DROP TABLE \`project_collaborator\``);
        await queryRunner.query(`DROP TABLE \`project_tech\``);
        await queryRunner.query(`DROP INDEX \`IDX_d3e6e2fa41c3cc6ddfeeda331f\` ON \`tech_stack\``);
        await queryRunner.query(`DROP TABLE \`tech_stack\``);
        await queryRunner.query(`DROP INDEX \`IDX_1c28fce2be7e3afb0547179679\` ON \`tech_stack_version\``);
        await queryRunner.query(`DROP TABLE \`tech_stack_version\``);
        await queryRunner.query(`DROP TABLE \`project_feature\``);
        await queryRunner.query(`DROP TABLE \`job\``);
        await queryRunner.query(`DROP TABLE \`hero_role\``);
        await queryRunner.query(`DROP TABLE \`hero\``);
        await queryRunner.query(`DROP TABLE \`hero_social\``);
        await queryRunner.query(`DROP INDEX \`IDX_87dc2d84b1c4821de9654c30ab\` ON \`social_type\``);
        await queryRunner.query(`DROP TABLE \`social_type\``);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` ON \`user\` (\`username\`)`);
    }

}
