-- using elephantSQL

CREATE TABLE public.users (
  "_id" serial NOT NULL,
  "username" varchar NOT NULL UNIQUE,
  "password" varchar NOT NULL,
  CONSTRAINT "user_pk" PRIMARY KEY ("_id")
)

CREATE TABLE public.posts (
  "_id" serial NOT NULL PRIMARY KEY,
  "title" varchar,
  "body" varchar NOT NULL,
  "user_id" int,

  -- link with users table
  CONSTRAINT user_fk FOREIGN KEY ("user_id")
  REFERENCES public.users("_id")
)

CREATE TABLE public.comments (
  "_id" serial NOT NULL PRIMARY KEY,
  "title" varchar,
  "body" varchar NOT NULL,
  "user_id" int,
  "parent_post_id" int,

  -- link with users table
  CONSTRAINT user_fk2 FOREIGN KEY ("user_id")
  REFERENCES public.users("_id")

  -- link with posts table
  CONSTRAINT post_fk FOREIGN KEY ("parent_post_id")
  REFERENCES public.posts("_id")
)