CREATE TABLE `follows` (
  `following_user_id` integer,
  `followed_user_id` integer,
  `created_at` timestamp
);

CREATE TABLE `users` (
  `id` integer PRIMARY KEY,
  `username` varchar(255),
  `role` varchar(255),
  `created_at` timestamp,
  `subscribed_workout` integer
);

CREATE TABLE `posts` (
  `id` integer PRIMARY KEY,
  `title` varchar(255),
  `body` text COMMENT 'Content of the post',
  `user_id` integer NOT NULL,
  `status` varchar(255),
  `created_at` timestamp
);

CREATE TABLE `Trainer_Group` (
  `id` integer PRIMARY KEY,
  `name` varchar(255),
  `description` varchar(255),
  `routine` integer,
  `subscribers` integer,
  `trainer` varchar(255)
);

CREATE TABLE `Routine` (
  `id` integer PRIMARY KEY,
  `created_by` varchar(255),
  `subcribers` varchar(255),
  `sistem` integer NOT NULL
);

CREATE TABLE `SystemWorkout` (
  `id` integer PRIMARY KEY,
  `name` varchar(255)
);

ALTER TABLE `posts` ADD CONSTRAINT `user_posts` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `follows` ADD FOREIGN KEY (`following_user_id`) REFERENCES `users` (`id`);

ALTER TABLE `follows` ADD FOREIGN KEY (`followed_user_id`) REFERENCES `users` (`id`);

ALTER TABLE `Routine` ADD FOREIGN KEY (`id`) REFERENCES `SystemWorkout` (`id`);

ALTER TABLE `users` ADD FOREIGN KEY (`subscribed_workout`) REFERENCES `Routine` (`id`);

ALTER TABLE `Trainer_Group` ADD FOREIGN KEY (`routine`) REFERENCES `Routine` (`id`);

ALTER TABLE `Trainer_Group` ADD FOREIGN KEY (`subscribers`) REFERENCES `users` (`id`);
