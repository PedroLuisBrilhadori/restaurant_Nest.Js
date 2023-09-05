
SELECT 'CREATE DATABASE restaurant'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'restaurant')\gexec

\c restaurant
CREATE EXTENSION IF NOT EXISTS unaccent;
