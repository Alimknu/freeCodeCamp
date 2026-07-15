SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE universe;

CREATE DATABASE universe WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';

ALTER DATABASE universe OWNER TO freecodecamp;

\connect universe

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

CREATE TABLE public.asteroid (
    asteroid_id integer NOT NULL,
    name character varying(30) NOT NULL,
    is_hazardous boolean NOT NULL,
    diameter_km integer
);

ALTER TABLE public.asteroid OWNER TO freecodecamp;

CREATE SEQUENCE public.asteroid_asteroid_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE public.asteroid_asteroid_id_seq OWNER TO freecodecamp;

ALTER SEQUENCE public.asteroid_asteroid_id_seq OWNED BY public.asteroid.asteroid_id;

CREATE TABLE public.galaxy (
    galaxy_id integer NOT NULL,
    name character varying(30) NOT NULL,
    age_billion_years numeric,
    has_black_hole boolean DEFAULT true NOT NULL,
    number_of_stars integer
);

ALTER TABLE public.galaxy OWNER TO freecodecamp;

CREATE SEQUENCE public.galaxy_galaxy_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE public.galaxy_galaxy_id_seq OWNER TO freecodecamp;

ALTER SEQUENCE public.galaxy_galaxy_id_seq OWNED BY public.galaxy.galaxy_id;

CREATE TABLE public.moon (
    moon_id integer NOT NULL,
    name character varying(30) NOT NULL,
    planet_id integer,
    is_spherical boolean DEFAULT true NOT NULL,
    distance_from_planet_km integer
);

ALTER TABLE public.moon OWNER TO freecodecamp;

CREATE SEQUENCE public.moon_moon_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE public.moon_moon_id_seq OWNER TO freecodecamp;

ALTER SEQUENCE public.moon_moon_id_seq OWNED BY public.moon.moon_id;

CREATE TABLE public.planet (
    planet_id integer NOT NULL,
    name character varying(30) NOT NULL,
    star_id integer,
    has_life boolean NOT NULL,
    description text,
    weight numeric(7,1),
    population integer
);

ALTER TABLE public.planet OWNER TO freecodecamp;

CREATE SEQUENCE public.planet_planet_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE public.planet_planet_id_seq OWNER TO freecodecamp;

ALTER SEQUENCE public.planet_planet_id_seq OWNED BY public.planet.planet_id;

CREATE TABLE public.star (
    star_id integer NOT NULL,
    name character varying(30) NOT NULL,
    galaxy_id integer,
    distance_from_earth integer,
    is_dead boolean NOT NULL,
    number_of_planets integer
);

ALTER TABLE public.star OWNER TO freecodecamp;

CREATE SEQUENCE public.star_star_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE public.star_star_id_seq OWNER TO freecodecamp;

ALTER SEQUENCE public.star_star_id_seq OWNED BY public.star.star_id;

ALTER TABLE ONLY public.asteroid ALTER COLUMN asteroid_id SET DEFAULT nextval('public.asteroid_asteroid_id_seq'::regclass);

ALTER TABLE ONLY public.galaxy ALTER COLUMN galaxy_id SET DEFAULT nextval('public.galaxy_galaxy_id_seq'::regclass);

ALTER TABLE ONLY public.moon ALTER COLUMN moon_id SET DEFAULT nextval('public.moon_moon_id_seq'::regclass);

ALTER TABLE ONLY public.planet ALTER COLUMN planet_id SET DEFAULT nextval('public.planet_planet_id_seq'::regclass);

ALTER TABLE ONLY public.star ALTER COLUMN star_id SET DEFAULT nextval('public.star_star_id_seq'::regclass);

INSERT INTO public.asteroid VALUES (1, 'Ceres', false, 939);
INSERT INTO public.asteroid VALUES (2, 'Vesta', false, 525);
INSERT INTO public.asteroid VALUES (3, 'Apophis', true, 0);

INSERT INTO public.galaxy VALUES (1, 'Milky Way', 13.6, true, 200);
INSERT INTO public.galaxy VALUES (2, 'Andromeda', 10.0, true, 1000);
INSERT INTO public.galaxy VALUES (3, 'Triangulum', 12.0, false, 40);
INSERT INTO public.galaxy VALUES (4, 'Sombrero', 13.1, true, 800);
INSERT INTO public.galaxy VALUES (5, 'Centaurus A', 11.5, true, 300);
INSERT INTO public.galaxy VALUES (6, 'Whirlpool', 12.5, true, 500);

INSERT INTO public.moon VALUES (1, 'Moon', 3, true, 384400);
INSERT INTO public.moon VALUES (2, 'Phobos', 4, false, 9377);
INSERT INTO public.moon VALUES (3, 'Deimos', 4, false, 23460);
INSERT INTO public.moon VALUES (4, 'Io', 5, true, 421700);
INSERT INTO public.moon VALUES (5, 'Europa', 5, true, 670900);
INSERT INTO public.moon VALUES (6, 'Ganymede', 5, true, 1070400);
INSERT INTO public.moon VALUES (7, 'Callisto', 5, true, 1882700);
INSERT INTO public.moon VALUES (8, 'Mimas', 6, true, 185520);
INSERT INTO public.moon VALUES (9, 'Enceladus', 6, true, 237948);
INSERT INTO public.moon VALUES (10, 'Tethys', 6, true, 294619);
INSERT INTO public.moon VALUES (11, 'Dione', 6, true, 377396);
INSERT INTO public.moon VALUES (12, 'Rhea', 6, true, 527108);
INSERT INTO public.moon VALUES (13, 'Titan', 6, true, 1221830);
INSERT INTO public.moon VALUES (14, 'Iapetus', 6, true, 3560820);
INSERT INTO public.moon VALUES (15, 'Miranda', 7, true, 129390);
INSERT INTO public.moon VALUES (16, 'Ariel', 7, true, 191020);
INSERT INTO public.moon VALUES (17, 'Umbriel', 7, true, 265970);
INSERT INTO public.moon VALUES (18, 'Titania', 7, true, 435910);
INSERT INTO public.moon VALUES (19, 'Oberon', 7, true, 583520);
INSERT INTO public.moon VALUES (20, 'Triton', 8, true, 354759);

INSERT INTO public.planet VALUES (1, 'Mercury', 1, false, NULL, 0.1, 0);
INSERT INTO public.planet VALUES (2, 'Venus', 1, false, NULL, 0.8, 0);
INSERT INTO public.planet VALUES (3, 'Earth', 1, true, NULL, 1.0, 800000000);
INSERT INTO public.planet VALUES (4, 'Mars', 1, false, NULL, 0.1, 0);
INSERT INTO public.planet VALUES (5, 'Jupiter', 1, false, NULL, 317.8, 0);
INSERT INTO public.planet VALUES (6, 'Saturn', 1, false, NULL, 95.2, 0);
INSERT INTO public.planet VALUES (7, 'Uranus', 1, false, NULL, 14.5, 0);
INSERT INTO public.planet VALUES (8, 'Neptune', 1, false, NULL, 17.1, 0);
INSERT INTO public.planet VALUES (9, 'AndroPlan1', 4, false, NULL, 2.5, 0);
INSERT INTO public.planet VALUES (10, 'AndroPlan2', 4, false, NULL, 0.9, 0);
INSERT INTO public.planet VALUES (11, 'TriangPlan1', 6, false, NULL, 12.3, 0);
INSERT INTO public.planet VALUES (12, 'TriangPlan2', 6, false, NULL, 1.1, 0);

INSERT INTO public.star VALUES (1, 'Sun', 1, 0, false, 8);
INSERT INTO public.star VALUES (2, 'Sirius', 1, 8, false, 0);
INSERT INTO public.star VALUES (3, 'Betelgeuse', 1, 642, false, 0);
INSERT INTO public.star VALUES (4, 'Andromeda Star A', 2, 2500000, false, 2);
INSERT INTO public.star VALUES (5, 'Andromeda Star B', 2, 2510000, false, 0);
INSERT INTO public.star VALUES (6, 'Triangulum Star A', 3, 3000000, false, 2);

ALTER TABLE ONLY public.asteroid
    ADD CONSTRAINT asteroid_name_key UNIQUE (name);

ALTER TABLE ONLY public.asteroid
    ADD CONSTRAINT asteroid_pkey PRIMARY KEY (asteroid_id);

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_name_key UNIQUE (name);

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_pkey PRIMARY KEY (galaxy_id);

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_name_key UNIQUE (name);

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_pkey PRIMARY KEY (moon_id);

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_name_key UNIQUE (name);

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_pkey PRIMARY KEY (planet_id);

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_name_key UNIQUE (name);

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_pkey PRIMARY KEY (star_id);

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT fk_moon_planet FOREIGN KEY (planet_id) REFERENCES public.planet(planet_id);

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT fk_planet_star FOREIGN KEY (star_id) REFERENCES public.star(star_id);

ALTER TABLE ONLY public.star
    ADD CONSTRAINT fk_star_galaxy FOREIGN KEY (galaxy_id) REFERENCES public.galaxy(galaxy_id);
