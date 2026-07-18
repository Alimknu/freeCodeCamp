-- Create Tables
CREATE TABLE courses (
    course_id SERIAL PRIMARY KEY,
    course VARCHAR(100) NOT NULL
);

CREATE TABLE majors (
    major_id SERIAL PRIMARY KEY,
    major VARCHAR(50) NOT NULL
);

CREATE TABLE majors_courses (
    major_id INTEGER NOT NULL,
    course_id INTEGER NOT NULL,
    PRIMARY KEY (major_id, course_id)
);

CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    major_id INTEGER,
    gpa NUMERIC(2,1)
);

-- Insert Data: courses
INSERT INTO courses (course_id, course) VALUES 
(23, 'Data Structures and Algorithms'),
(24, 'Web Programming'),
(25, 'Database Systems'),
(26, 'Computer Networks'),
(27, 'SQL'),
(28, 'Machine Learning'),
(29, 'Computer Systems'),
(30, 'Web Applications'),
(31, 'Artificial Intelligence'),
(32, 'Python'),
(33, 'Object-Oriented Programming'),
(34, 'Calculus'),
(35, 'Game Architecture'),
(36, 'Algorithms'),
(37, 'UNIX'),
(38, 'Server Administration'),
(39, 'Network Security');

-- Insert Data: majors
INSERT INTO majors (major_id, major) VALUES 
(36, 'Database Administration'),
(37, 'Web Development'),
(38, 'Data Science'),
(39, 'Network Engineering'),
(40, 'Computer Programming'),
(41, 'Game Design'),
(42, 'System Administration');

-- Insert Data: majors_courses
INSERT INTO majors_courses (major_id, course_id) VALUES 
(36, 23), (37, 24), (36, 25), (38, 23), (39, 26), 
(36, 27), (38, 28), (39, 29), (40, 26), (36, 30), 
(41, 31), (38, 32), (40, 33), (42, 29), (41, 34), 
(37, 23), (38, 34), (37, 33), (41, 35), (42, 26), 
(41, 36), (42, 37), (42, 38), (40, 29), (40, 32), 
(39, 39), (37, 30), (39, 36);

-- Insert Data: students
INSERT INTO students (student_id, first_name, last_name, major_id, gpa) VALUES 
(6, 'Rhea', 'Kellems', 36, 2.5),
(7, 'Emma', 'Gilbert', NULL, NULL),
(8, 'Kimberly', 'Whitley', 37, 3.8),
(9, 'Jimmy', 'Felipe', 36, 3.7),
(10, 'Kyle', 'Stimson', NULL, 2.8),
(11, 'Casares', 'Hijo', 41, 4.0),
(12, 'Noe', 'Savage', NULL, 3.6),
(13, 'Sterling', 'Boss', 41, 3.9),
(14, 'Brian', 'Davis', NULL, 2.3),
(15, 'Kaija', 'Uronen', 41, 3.7),
(16, 'Faye', 'Conn', 41, 2.1),
(17, 'Efren', 'Reilly', 37, 3.9),
(18, 'Danh', 'Nhung', NULL, 2.4),
(19, 'Maxine', 'Hagenes', 36, 2.9),
(20, 'Larry', 'Saunders', 38, 2.2),
(21, 'Karl', 'Kuhar', 37, NULL),
(22, 'Lieke', 'Hazenveld', 41, 3.5),
(23, 'Obie', 'Hilpert', 37, NULL),
(24, 'Peter', 'Booysen', NULL, 2.9),
(25, 'Nathan', 'Turner', 36, 3.3),
(26, 'Gerald', 'Osiki', 38, 2.2),
(27, 'Vanya', 'Hassanah', 41, 4.0),
(28, 'Roxelana', 'Florescu', 36, 3.2),
(29, 'Helene', 'Parker', 38, 3.4),
(30, 'Mariana', 'Russel', 37, 1.8),
(31, 'Ajit', 'Dhungel', NULL, 3.0),
(32, 'Mehdi', 'Vandenberghe', 36, 1.9),
(33, 'Dejon', 'Howell', 37, 4.0),
(34, 'Aliya', 'Gulgowski', 42, 2.6),
(35, 'Ana', 'Tupajic', 38, 3.1),
(36, 'Hugo', 'Duran', NULL, 3.8);

-- Foreign Key Constraints
ALTER TABLE majors_courses ADD CONSTRAINT majors_courses_course_id_fkey FOREIGN KEY (course_id) REFERENCES courses(course_id);
ALTER TABLE majors_courses ADD CONSTRAINT majors_courses_major_id_fkey FOREIGN KEY (major_id) REFERENCES majors(major_id);
ALTER TABLE students ADD CONSTRAINT students_major_id_fkey FOREIGN KEY (major_id) REFERENCES majors(major_id);

-- Reset Sequences (aligns autoincrement with the manually inserted IDs)
SELECT setval('courses_course_id_seq', 39, true);
SELECT setval('majors_major_id_seq', 42, true);
SELECT setval('students_student_id_seq', 36, true);
