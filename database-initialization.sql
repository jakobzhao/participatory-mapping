-- Table: public.tblReview

-- DROP TABLE IF EXISTS public."tblReview";

CREATE TABLE IF NOT EXISTS public."tblReview"
(

    vid  serial primary key,
    hid integer, -- hexagon id
    reviwer text,
    email text,
    content text COLLATE pg_catalog."default",
    created_at TIMESTAMPTZ DEFAULT Now()
)

TABLESPACE pg_default;
