CREATE TABLE food_item (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  price NUMERIC(6,2) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);
CREATE TRIGGER set_timestamp
BEFORE UPDATE ON food_item
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
CREATE TABLE combo (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  price NUMERIC(6,2) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);
CREATE TRIGGER set_timestamp
BEFORE UPDATE ON combo
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
CREATE TABLE customer_order (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  price NUMERIC(6,2) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);
CREATE TRIGGER set_timestamp
BEFORE UPDATE ON customer_order
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
CREATE TABLE combo_food_item (
  id SERIAL PRIMARY KEY,
  combo_id INT,
  food_item_id INT,
  CONSTRAINT fk_article FOREIGN KEY(combo_id) REFERENCES combo(id),
  CONSTRAINT fk_tag FOREIGN KEY(food_item_id) REFERENCES food_item(id),
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);
CREATE TRIGGER set_timestamp
BEFORE UPDATE ON order_combo
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
CREATE TABLE order_item (
  id SERIAL PRIMARY KEY,
  customer_order_id INT,
  food_item_id INT,
  CONSTRAINT fk_article FOREIGN KEY(customer_order_id) REFERENCES customer_order(id),
  CONSTRAINT fk_tag FOREIGN KEY(food_item_id) REFERENCES food_item(id),
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);
CREATE TRIGGER set_timestamp
BEFORE UPDATE ON order_item
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
CREATE TABLE order_combo (
  id SERIAL PRIMARY KEY,
  customer_order_id INT,
  combo_id INT,
  CONSTRAINT fk_article FOREIGN KEY(customer_order_id) REFERENCES customer_order(id),
  CONSTRAINT fk_tag FOREIGN KEY(combo_id) REFERENCES combo(id),
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);
CREATE TRIGGER set_timestamp
BEFORE UPDATE ON order_combo
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
