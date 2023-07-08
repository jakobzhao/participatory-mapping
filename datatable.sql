-- DROP TABLE IF EXISTS public."tblRecord";
-- This line is commented out, but it suggests that the script could drop the "tblRecord" table if it already exists.
-- This can be useful to start with a clean slate, but it's commented out to prevent accidental deletion.

CREATE TABLE IF NOT EXISTS public."tblRecord"
(
    id  serial primary key,
    contributor text,
    content text COLLATE pg_catalog."default",
    lat double precision,
    lng double precision,
    created_at TIMESTAMPTZ DEFAULT Now()
);
-- This statement creates the "tblRecord" table if it doesn't already exist.
-- The table has the following columns:
-- - id: serial column with auto-incrementing integers as primary key.
-- - contributor: text column to store the contributor's name.
-- - content: text column to store the content of the record.
-- - lat: double precision column to store the latitude.
-- - lng: double precision column to store the longitude.
-- - created_at: TIMESTAMPTZ column with a default value of the current timestamp when a record is inserted.
