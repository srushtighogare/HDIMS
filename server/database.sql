CREATE DATABASE IF NOT EXISTS profileinfo;

CREATE TABLE IF NOT EXISTS govregis (
    regiid SERIAL PRIMARY KEY,
    username VARCHAR(20) NOT NULL,
    password TEXT NOT NULL,
    lvl TEXT,
    areaName TEXT
);

CREATE TABLE IF NOT EXISTS anc (
    data_id SERIAL PRIMARY KEY,
    hosp_id TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    anc_regis NUMERIC,
    early_anc_regis NUMERIC,
    tt2 NUMERIC,
    early_regis_rate NUMERIC,
    tt2_to_total_anc NUMERIC
)