-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(191) NOT NULL,
    `nomeUser` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `perfilUser` VARCHAR(191) NOT NULL,
    `criacao_dt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `alteracao_dt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
