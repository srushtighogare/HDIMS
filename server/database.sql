CREATE DATABASE profileinfo;

CREATE TABLE govregis (
    regiid SERIAL PRIMARY KEY,
    username VARCHAR(20) NOT NULL,
    password TEXT NOT NULL,
    lvl TEXT,
    areaName TEXT
);

