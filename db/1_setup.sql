DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title VARCHAR (100),
    name VARCHAR(50),
    body VARCHAR(1000)
);
