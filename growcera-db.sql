drop database `growcera-db`;

create database `growcera-db`;
use `growcera-db`;

CREATE TABLE `users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) UNIQUE NOT NULL,
  `phone` VARCHAR(255) UNIQUE,
  `password_hash` VARCHAR(255) NOT NULL,
  `latitude` DOUBLE,
  `longitude` DOUBLE,
  `role` VARCHAR(255),
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE `products` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `code` VARCHAR(255) UNIQUE NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT,
  `quantity` INT NOT NULL,
  `unit_price` DECIMAL(10,2) NOT NULL,
  `unit` VARCHAR(255),
  `expiry_date` DATE,
  `min_stock_level` INT,
  `owner_id` INT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`owner_id`) REFERENCES `users`(`id`)
);

CREATE TABLE `suppliers` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255),
  `phone` VARCHAR(255),
  `address` TEXT,
  `latitude` DOUBLE,
  `longitude` DOUBLE,
  `rating` INT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE `product_batches` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `supplier_id` INT,
  `batch_code` VARCHAR(255) UNIQUE NOT NULL,
  `quantity` INT NOT NULL,
  `expiration_date` DATE,
  `import_date` DATE,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`supplier_id`) REFERENCES `suppliers`(`id`)
);

CREATE TABLE `supplier_products` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `supplier_id` INT,
  `code` VARCHAR(255) UNIQUE NOT NULL,
  `name` VARCHAR(255),
  `description` TEXT,
  `unit` VARCHAR(255),
  `unit_price` DECIMAL(10,2),
  `image_url` VARCHAR(255),
  `product_url` VARCHAR(255),
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`supplier_id`) REFERENCES `suppliers`(`id`)
);

CREATE TABLE `batch_items` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `batch_id` INT,
  `supplier_product_id` INT,
  `product_id` INT,
  `quantity` INT NOT NULL,
  `cost_price` DECIMAL(10,2),
  FOREIGN KEY (`batch_id`) REFERENCES `product_batches`(`id`),
  FOREIGN KEY (`supplier_product_id`) REFERENCES `supplier_products`(`id`),
  FOREIGN KEY (`product_id`) REFERENCES `products`(`id`)
);

CREATE TABLE `product_prices` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `product_id` INT,
  `price` DECIMAL(10,2),
  `effective_from` TIMESTAMP,
  FOREIGN KEY (`product_id`) REFERENCES `products`(`id`)
);

CREATE TABLE `inventory_logs` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `product_id` INT,
  `change` INT,
  `reason` VARCHAR(255), -- 'import', 'sale', 'expire'
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`product_id`) REFERENCES `products`(`id`)
);

CREATE TABLE `supply_orders` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `supplier_id` INT,
  `user_id` INT,
  `status` VARCHAR(255),
  `document_url` VARCHAR(255),
  `notes` VARCHAR(255),
  `total_amount` DECIMAL(10,2),
  `order_date` TIMESTAMP,
  `delivered_at` TIMESTAMP,
  FOREIGN KEY (`supplier_id`) REFERENCES `suppliers`(`id`),
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)
);

CREATE TABLE `supply_order_items` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `supply_order_id` INT,
  `product_id` INT,
  `quantity` INT NOT NULL,
  `price_per_unit` DECIMAL(10,2),
  FOREIGN KEY (`supply_order_id`) REFERENCES `supply_orders`(`id`),
  FOREIGN KEY (`product_id`) REFERENCES `products`(`id`)
);

CREATE TABLE `sales` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `customer_name` VARCHAR(255),
  `customer_phone` VARCHAR(255),
  `total_amount` DECIMAL(10,2),
  `paid_amount` DECIMAL(10,2),
  `debt` DECIMAL(10,2),
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `seller_id` INT,
  FOREIGN KEY (`seller_id`) REFERENCES `users`(`id`)
);

CREATE TABLE `sale_items` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `sale_id` INT,
  `product_id` INT,
  `quantity` INT NOT NULL,
  `unit_price` DECIMAL(10,2),
  `subtotal` DECIMAL(10,2),
  FOREIGN KEY (`sale_id`) REFERENCES `sales`(`id`),
  FOREIGN KEY (`product_id`) REFERENCES `products`(`id`)
);



CREATE TABLE `customer_debts` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `customer_name` VARCHAR(255),
  `phone` VARCHAR(255),
  `amount` DECIMAL(10,2),
  `note` TEXT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE `ai_suggestions` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `target_type` VARCHAR(255), -- 'product', 'price', 'reorder'
  `target_id` INT,
  `suggestion_text` TEXT,
  `confidence_score` FLOAT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE `chatbot_logs` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `user_id` INT,
  `question` TEXT,
  `answer` TEXT,
  `intent` VARCHAR(255),
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)
);

CREATE TABLE `price_predictions` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `product_id` INT,
  `predicted_price` DECIMAL(10,2),
  `predicted_at` TIMESTAMP,
  `valid_until` DATE,
  FOREIGN KEY (`product_id`) REFERENCES `products`(`id`)
);

CREATE TABLE `expiration_warnings` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `product_id` INT,
  `days_remaining` INT,
  `warning_sent` BOOLEAN,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`product_id`) REFERENCES `products`(`id`)
);

CREATE TABLE `financial_reports` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `report_month` VARCHAR(255),
  `total_income` DECIMAL(10,2),
  `total_expense` DECIMAL(10,2),
  `net_cashflow` DECIMAL(10,2),
  `auto_generated` BOOLEAN,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
