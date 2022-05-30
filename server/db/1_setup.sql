DROP TABLE IF EXISTS articles;

CREATE TABLE articles (
    id serial PRIMARY KEY,
    title varchar(50) NOT NULL,
    name varchar(255) NOT NULL,
    body varchar(255) NOT NULL,
    url_end varchar NOT NULL
);
