CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


CREATE TABLE IF NOT EXISTS demo (
    row_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    num VARCHAR(20) NOT NULL,
    nameTH VARCHAR(255) NOT NULL
);
