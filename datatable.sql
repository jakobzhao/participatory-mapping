-- Table: public.tblRecord

-- DROP TABLE IF EXISTS public."tblRecord";

CREATE TABLE IF NOT EXISTS public."tblRecord"
(

    id  serial primary key,
    contributor text,
    content text COLLATE pg_catalog."default",
    lat double precision,
    lng double precision,
    created_at TIMESTAMPTZ DEFAULT Now()
)

TABLESPACE pg_default;
