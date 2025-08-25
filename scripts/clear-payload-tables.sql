-- Clear all Payload CMS tables
-- Run this if you need to manually clear tables

-- Drop all Payload tables (common ones)
DROP TABLE IF EXISTS payload_migrations CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS media CASCADE;
DROP TABLE IF EXISTS academic_programs CASCADE;
DROP TABLE IF EXISTS activities CASCADE;
DROP TABLE IF EXISTS applications CASCADE;
DROP TABLE IF EXISTS pages CASCADE;
DROP TABLE IF EXISTS posts CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS comments CASCADE;
DROP TABLE IF EXISTS _users_v CASCADE;
DROP TABLE IF EXISTS _media_v CASCADE;

-- Drop any other tables that start with payload or your collection names
-- You can see all tables with: \dt

-- Reset sequences if needed
-- ALTER SEQUENCE users_id_seq RESTART WITH 1;
