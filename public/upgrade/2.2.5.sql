ALTER TABLE `shd_nav` ADD COLUMN `plugin` VARCHAR(50) NOT NULL DEFAULT '' COMMENT '插件名称:插件菜单,此值用于卸载时删除菜单';