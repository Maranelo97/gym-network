import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchema1745255789500 implements MigrationInterface {
    name = 'InitSchema1745255789500'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`role\` varchar(255) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`systemWork\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`training_group\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`trainer_id\` int NULL, \`routine_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`routine\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_by\` varchar(255) NOT NULL, \`system_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`training_group_subscribers\` (\`group_id\` int NOT NULL, \`user_id\` int NOT NULL, INDEX \`IDX_1b9891d8d9e633d49524717aa8\` (\`group_id\`), INDEX \`IDX_eb3c218d8b314001a667ccf00a\` (\`user_id\`), PRIMARY KEY (\`group_id\`, \`user_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`routine_subscribers\` (\`routine_id\` int NOT NULL, \`user_id\` int NOT NULL, INDEX \`IDX_fc29eb00694ce150bd8fa229bc\` (\`routine_id\`), INDEX \`IDX_55134db3efd7a060ebf49c6972\` (\`user_id\`), PRIMARY KEY (\`routine_id\`, \`user_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`training_group\` ADD CONSTRAINT \`FK_174fb317c7ee75b23f2bfd8f7ce\` FOREIGN KEY (\`trainer_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`training_group\` ADD CONSTRAINT \`FK_c299c51ce2deb53aa88a9d13be4\` FOREIGN KEY (\`routine_id\`) REFERENCES \`routine\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`routine\` ADD CONSTRAINT \`FK_bfb4c9b922feb50b056198fb6d4\` FOREIGN KEY (\`system_id\`) REFERENCES \`systemWork\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`training_group_subscribers\` ADD CONSTRAINT \`FK_1b9891d8d9e633d49524717aa8d\` FOREIGN KEY (\`group_id\`) REFERENCES \`training_group\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`training_group_subscribers\` ADD CONSTRAINT \`FK_eb3c218d8b314001a667ccf00a9\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`routine_subscribers\` ADD CONSTRAINT \`FK_fc29eb00694ce150bd8fa229bce\` FOREIGN KEY (\`routine_id\`) REFERENCES \`routine\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`routine_subscribers\` ADD CONSTRAINT \`FK_55134db3efd7a060ebf49c6972a\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`routine_subscribers\` DROP FOREIGN KEY \`FK_55134db3efd7a060ebf49c6972a\``);
        await queryRunner.query(`ALTER TABLE \`routine_subscribers\` DROP FOREIGN KEY \`FK_fc29eb00694ce150bd8fa229bce\``);
        await queryRunner.query(`ALTER TABLE \`training_group_subscribers\` DROP FOREIGN KEY \`FK_eb3c218d8b314001a667ccf00a9\``);
        await queryRunner.query(`ALTER TABLE \`training_group_subscribers\` DROP FOREIGN KEY \`FK_1b9891d8d9e633d49524717aa8d\``);
        await queryRunner.query(`ALTER TABLE \`routine\` DROP FOREIGN KEY \`FK_bfb4c9b922feb50b056198fb6d4\``);
        await queryRunner.query(`ALTER TABLE \`training_group\` DROP FOREIGN KEY \`FK_c299c51ce2deb53aa88a9d13be4\``);
        await queryRunner.query(`ALTER TABLE \`training_group\` DROP FOREIGN KEY \`FK_174fb317c7ee75b23f2bfd8f7ce\``);
        await queryRunner.query(`DROP INDEX \`IDX_55134db3efd7a060ebf49c6972\` ON \`routine_subscribers\``);
        await queryRunner.query(`DROP INDEX \`IDX_fc29eb00694ce150bd8fa229bc\` ON \`routine_subscribers\``);
        await queryRunner.query(`DROP TABLE \`routine_subscribers\``);
        await queryRunner.query(`DROP INDEX \`IDX_eb3c218d8b314001a667ccf00a\` ON \`training_group_subscribers\``);
        await queryRunner.query(`DROP INDEX \`IDX_1b9891d8d9e633d49524717aa8\` ON \`training_group_subscribers\``);
        await queryRunner.query(`DROP TABLE \`training_group_subscribers\``);
        await queryRunner.query(`DROP TABLE \`routine\``);
        await queryRunner.query(`DROP TABLE \`training_group\``);
        await queryRunner.query(`DROP TABLE \`systemWork\``);
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
