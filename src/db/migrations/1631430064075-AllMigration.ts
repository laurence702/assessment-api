import {MigrationInterface, QueryRunner} from "typeorm";

export class AllMigration1631430064075 implements MigrationInterface {
    name = 'AllMigration1631430064075'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`cloudfift\`.\`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`bio\` varchar(255) NOT NULL DEFAULT '', \`image\` varchar(255) NOT NULL DEFAULT '', \`password\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cloudfift\`.\`comment\` (\`id\` int NOT NULL AUTO_INCREMENT, \`body\` varchar(255) NOT NULL, \`articleId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cloudfift\`.\`article\` (\`id\` int NOT NULL AUTO_INCREMENT, \`slug\` varchar(255) NOT NULL, \`title\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL DEFAULT '', \`body\` varchar(255) NOT NULL DEFAULT '', \`created\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`tagList\` text NOT NULL, \`favoriteCount\` int NOT NULL DEFAULT '0', \`authorId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cloudfift\`.\`questions\` (\`id\` int NOT NULL AUTO_INCREMENT, \`question\` varchar(255) NOT NULL, \`answer\` varchar(255) NOT NULL, \`instruction\` varchar(255) NOT NULL, \`category\` varchar(255) NOT NULL DEFAULT 'logical', \`options\` text NOT NULL, \`explanations\` varchar(255) NOT NULL, \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`assessmentId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cloudfift\`.\`assessments\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`instruction\` varchar(255) NULL, \`assesment_type\` varchar(255) NOT NULL DEFAULT 'aptitude', \`is_enabled\` tinyint NOT NULL DEFAULT '1', \`start_date\` timestamp NOT NULL, \`end_date\` timestamp NULL, \`duration\` varchar(255) NULL, UNIQUE INDEX \`IDX_c594c233d1ab51a91894162e5e\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cloudfift\`.\`follows\` (\`id\` int NOT NULL AUTO_INCREMENT, \`followerId\` int NOT NULL, \`followingId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cloudfift\`.\`tag\` (\`id\` int NOT NULL AUTO_INCREMENT, \`tag\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cloudfift\`.\`user_favorites_article\` (\`userId\` int NOT NULL, \`articleId\` int NOT NULL, INDEX \`IDX_3b80ae56288924ab30cc9e7043\` (\`userId\`), INDEX \`IDX_9ea0140751b603ea826c19e1a3\` (\`articleId\`), PRIMARY KEY (\`userId\`, \`articleId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`cloudfift\`.\`comment\` ADD CONSTRAINT \`FK_c20404221e5c125a581a0d90c0e\` FOREIGN KEY (\`articleId\`) REFERENCES \`cloudfift\`.\`article\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`cloudfift\`.\`article\` ADD CONSTRAINT \`FK_a9c5f4ec6cceb1604b4a3c84c87\` FOREIGN KEY (\`authorId\`) REFERENCES \`cloudfift\`.\`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`cloudfift\`.\`questions\` ADD CONSTRAINT \`FK_465acef6f7d1194fb40a2e786cf\` FOREIGN KEY (\`assessmentId\`) REFERENCES \`cloudfift\`.\`assessments\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`cloudfift\`.\`user_favorites_article\` ADD CONSTRAINT \`FK_3b80ae56288924ab30cc9e70435\` FOREIGN KEY (\`userId\`) REFERENCES \`cloudfift\`.\`user\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`cloudfift\`.\`user_favorites_article\` ADD CONSTRAINT \`FK_9ea0140751b603ea826c19e1a33\` FOREIGN KEY (\`articleId\`) REFERENCES \`cloudfift\`.\`article\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`cloudfift\`.\`user_favorites_article\` DROP FOREIGN KEY \`FK_9ea0140751b603ea826c19e1a33\``);
        await queryRunner.query(`ALTER TABLE \`cloudfift\`.\`user_favorites_article\` DROP FOREIGN KEY \`FK_3b80ae56288924ab30cc9e70435\``);
        await queryRunner.query(`ALTER TABLE \`cloudfift\`.\`questions\` DROP FOREIGN KEY \`FK_465acef6f7d1194fb40a2e786cf\``);
        await queryRunner.query(`ALTER TABLE \`cloudfift\`.\`article\` DROP FOREIGN KEY \`FK_a9c5f4ec6cceb1604b4a3c84c87\``);
        await queryRunner.query(`ALTER TABLE \`cloudfift\`.\`comment\` DROP FOREIGN KEY \`FK_c20404221e5c125a581a0d90c0e\``);
        await queryRunner.query(`DROP INDEX \`IDX_9ea0140751b603ea826c19e1a3\` ON \`cloudfift\`.\`user_favorites_article\``);
        await queryRunner.query(`DROP INDEX \`IDX_3b80ae56288924ab30cc9e7043\` ON \`cloudfift\`.\`user_favorites_article\``);
        await queryRunner.query(`DROP TABLE \`cloudfift\`.\`user_favorites_article\``);
        await queryRunner.query(`DROP TABLE \`cloudfift\`.\`tag\``);
        await queryRunner.query(`DROP TABLE \`cloudfift\`.\`follows\``);
        await queryRunner.query(`DROP INDEX \`IDX_c594c233d1ab51a91894162e5e\` ON \`cloudfift\`.\`assessments\``);
        await queryRunner.query(`DROP TABLE \`cloudfift\`.\`assessments\``);
        await queryRunner.query(`DROP TABLE \`cloudfift\`.\`questions\``);
        await queryRunner.query(`DROP TABLE \`cloudfift\`.\`article\``);
        await queryRunner.query(`DROP TABLE \`cloudfift\`.\`comment\``);
        await queryRunner.query(`DROP TABLE \`cloudfift\`.\`user\``);
    }

}
