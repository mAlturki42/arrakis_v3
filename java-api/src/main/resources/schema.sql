DROP ALL OBJECTS;

CREATE TABLE Bonds (
  trade_type VARCHAR(255) NOT NULL,
  trade_currency varchar(10) NOT NULL,
  quantity int NOT NULL,
  settlement_date VARCHAR(255) NOT NULL,
  trade_status varchar(32) NOT NULL,
  trade_date VARCHAR(255) NOT NULL,
  unit_price float NOT NULL,
  coupon_percent float NOT NULL,
  bond_currency VARCHAR(10) NOT NULL,
  cusip varchar(50) DEFAULT NULL,
  face_value float NOT NULL,
  isin varchar(50) DEFAULT NULL,
  issuer_name varchar(255) NOT NULL,
  maturity_date VARCHAR(255) NOT NULL,
  status varchar(32) NOT NULL,
  type VARCHAR(255) NOT NULL,
  book_name VARCHAR(255) NOT NULL,
  bond_holder VARCHAR(255) NOT NULL
);

CREATE TABLE book (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(255) NOT NULL
);

CREATE TABLE userr (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  role varchar(255) NOT NULL
);

CREATE TABLE counterparty (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE book_user (
  `book_id` int NOT NULL,
  `user_id` int NOT NULL,
  FOREIGN KEY (`book_id`) REFERENCES book(id),
  FOREIGN KEY (`user_id`) REFERENCES userr(id)
);


CREATE TABLE security (
  `id` int NOT NULL AUTO_INCREMENT,
  `isin` varchar(50) DEFAULT NULL,
  `cusip` varchar(50) DEFAULT NULL,
  `issuer_name` varchar(255) NOT NULL,
  `maturity_date` datetime NOT NULL,
  `coupon` float NOT NULL,
  `type` varchar(255) NOT NULL,
  `face_value` float NOT NULL,
  `currency` varchar(10) NOT NULL,
  `status` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE trades (
  `id` int NOT NULL AUTO_INCREMENT,
  `book_id` int NOT NULL,
  `security_id` int NOT NULL,
  `counterparty_id` int NOT NULL,
  `currency` varchar(10) NOT NULL,
  `status` varchar(32) NOT NULL,
  `quantity` int NOT NULL,
  `unit_price` float NOT NULL,
  `buy_sell` varchar(32) NOT NULL,
  `trade_date` datetime NOT NULL,
  `settlement_date` datetime NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`security_id`) REFERENCES security(id),
  FOREIGN KEY (`counterparty_id`) REFERENCES counterparty(id),
  FOREIGN KEY (`book_id`) REFERENCES book(id)
);


ALTER TABLE book_user ADD PRIMARY KEY(book_id, user_id);
