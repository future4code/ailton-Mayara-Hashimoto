
-- Exercicio 1
```
CREATE TABLE Ranting (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);
```
	-- a)
```
INSERT INTO Ranting (id, comment, rate, movie_id) 
VALUES ( "001", "Muito bom!", 7, "004");
```
	-- b)
```
INSERT INTO Ranting (id, comment, rate, movie_id) 
VALUES ( "002", "Melhor filme!", 10, "010");
```
	-- c)
  --  Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`ailton-mayara-hashimoto`.`Rating`, 
  --  CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))
  -- O erro informa que não pode adicionar ranting e/ou comentário devido a ausencia do id do filme enviado

	-- d)
```
ALTER TABLE Movies DROP COLUMN ranting;
```
	-- e)
```
 DELETE FROM Movies WHERE id = "004";
```
 -- Response: Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`ailton-mayara-hashimoto`.
 -- `Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))
-- Não consegue deletar, por não possui mais a coluna de ranting.

-- Exercicio 2
```
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```
	-- a) 
    -- Permite que link do filme aos atores que atuaram nele
    
    -- b)
```
INSERT INTO Movies (id, name, synopisis, release_date)
VALUES ("006", "Harry Potter and the Philosopher's Stone", "Harry found out his is a waizard, and now he has to protect his school, while learning magic", "2001-11-23");
```
```
INSERT INTO MovieCast (movie_id, actor_id)
VALUES ("006", "005");
INSERT INTO MovieCast (movie_id, actor_id)
VALUES ("006", "007");
INSERT INTO MovieCast (movie_id, actor_id)
VALUES ("006", "008");
```
	-- c)
```
INSERT INTO MovieCast (movie_id, actor_id)
VALUES ("003", "009");
```
	-- Não permite adicionar id ao filme indicado, por que o id é inexistente

	-- Exercício 3
    -- a)
```
SELECT * FROM Movies INNER JOIN Ranting ON Movies.id = Ranting.movie_id;
```
	-- Permite retornar o conteudo que está presente em alguma tabela/coluna
    -- b)
```
SELECT m.id as movie_id, r.rate as rating FROM Movies m
INNER JOIN Ranting r ON m.id = r.movie_id;
```

	-- Exercicio 4
	-- a)
```   
SELECT m.id as movie_id, m.name, r.rate as ranting, r.comment as ranting_comment
FROM Movies m LEFT JOIN Ranting r ON m.id = r.movie_id;
```
	-- b)
```
SELECT m.id as movie_id, m.name, mc.actor_id FROM Movies m
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;
```
	-- c)
```
SELECT AVG(r.rate), m.id, m.name FROM Movies m
LEFT JOIN Ranting r ON m.id = r.movie_id GROUP BY (m.id);
```

	-- Exercicio 5
```
SELECT * FROM Movies m LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

	-- b)
```
SELECT m.id as movie_id, m.name, a.id as actor_id, a.name FROM Movies m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```