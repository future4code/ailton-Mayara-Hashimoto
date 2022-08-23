-- Exercício BASE 22/08/2022

 ```
 CREATE TABLE Actor (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW databases;
-- Mostra a database que está sendo utilizada
SHOW TABLES;
-- Mostra a tabela criada dentro do arquivo
DESCRIBE Actor; 
-- Retorna uma tabela informanco o que cada coluna deve retornar
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES ("001", "Tony Ramos", 400000, "1948-08-25", "male");
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES ("002", "Glória Pires", 1200000, "1963-08-23", "female");
-- O sistema não permite adicionar o mesmo id, por ser uma primary key
INSERT INTO Actor (id, name, salary, birth_date, gender)


VALUES ("003", "Fernanda Montenegro", 300000, "1929-10-19", "female");
-- sistema não permite adicionar um novo ator, sem nome, ou quaisquer informação faltando
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES ("004", "Antonio Fagundes", 400000, "1949-04-18", "male");
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES ("005", "Juliana Paes", 719333.33, "1979,03,26", "female");
SELECT id, salary FROM Actor;
SELECT id, name from Actor WHERE gender = "male";
SELECT * FROM Actor WHERE gender = "female";
SELECT salary FROM Actor WHERE name = "Tony Ramos";
SELECT id, name, salary FROM Actor WHERE salary <= 500000;
-- SELECT id, nome from Actor WHERE id = "002";
-- "nome" não existe na tabela, deveria ter sido chamado por "name"
SELECT id, name from Actor WHERE id = "002";
SELECT * FROM Actor 
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;
SELECT * From Actor
WHERE (name LIKE "G%" OR name LIKE "%g%");
SELECT * FROM Actor 
WHERE (name LIKE "A%" OR name LIKE "%a%" OR name LIKE "G%" OR name LIKE "%g%") AND salary between 350000 AND 900000;

CREATE TABLE Movies (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    synopisis TEXT,
    release_date DATE NOT NULL,
    ranting FLOAT NOT NULL
);
INSERT INTO Movies (id, name, synopisis, release_date, ranting)
VALUES ("001", "Se Eu Fosse Você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", "2006-01-06", 7);
INSERT INTO Movies (id, name, synopisis, release_date, ranting)
VALUES ("002", "Doce de Mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", "2012-12-27", 10);
INSERT INTO Movies (id, name, synopisis, release_date, ranting)
VALUES ("003", "Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", "2017-11-02", 8);
INSERT INTO Movies (id, name, synopisis, release_date, ranting)
VALUES ("004", "O Auto da Compadecida", "As aventuras de João Grilo (Matheus Nachtergaele), um sertanejo pobre e mentiroso, e Chicó (Selton Mello), o mais covarde dos homens. Ambos lutam pelo pão de cada dia e atravessam por vários episódios enganando a todos da pequena cidade em que vivem.", "2000-10-10", 8.3);
SELECT * FROM Movies;
SELECT id, name, ranting FROM Movies
WHERE (name LIKE "Doce De Mãe");
SELECT * FROM Movies
WHERE (name LIKE "O Auto da Compadecida");
SELECT id, name, synopisis FROM Movies
WHERE ranting > 7;
SELECT * FROM Movies
WHERE (name LIKE "%vida%");
SELECT * FROM Movies
WHERE (name LIKE "%vida%" OR synopisis LIKE "%vida%");
SELECT * FROM Movies
WHERE (name LIKE "%vida%" OR synopisis LIKE "%vida%") AND ranting > 7;
 ```

```
	-- 2022-08-23 { aprofundamento de sql }
```
 -- Exercício [ 1 ]
 ```
 ALTER TABLE Actor ADD favourite_ice_cream_flavor VARCHAR(255);
 ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";
 ```
 -- a)
 ```
 ALTER TABLE Actor DROP COLUMN salary;
 ```
 -- A coluna de salario vai ser removida da lista
 -- b)
 ```
 ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
 ```
 -- Vai alterar gender para sex
 -- c) + d)
 ```
 ALTER TABLE Actor CHANGE sex gender VARCHAR(100);
 ```
 -- Vai voltar para genero, e no caso com 255 char, mas depois sendo atualizado para 100
 
 -- Exercício [ 2 ]

 ```
 UPDATE Actor
 SET name = "Moacyr Franco"
 WHERE id = "123";
 ```

 -- a)
 ```
 UPDATE Actor SET birth_date = "1986-05-10" WHERE id = "003";
 ```
 -- b)
 ```
 SELECT UPPER(name) from Actor WHERE id= "005";
 UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PAES";  
  ```
 -- c)
  ```
 UPDATE Actor SET name = "Emma Watson", salary = 120000000, birth_date = "1990-04-15", gender = "female" WHERE id = "005";
  ```
 -- d)
  ```
  UPDATE Actor SET name = "Park Jin Young", salary = 120000, birth_date = "1994-10-22", gender = "male" WHERE id = "006";
   ```
 -- A condição será atualizada quando o sistema localizar o id passado como parâmetro
 
 -- Exercício [ 3 ]
 -- a)
  ```
 DELETE FROM Actor WHERE name = "Fernanda Montenegro";
  ```
 -- b)
  ```
 DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
  ```
 
 -- Exercício [ 4 ]
 -- a)
  ```
 SELECT Max(salary) from Actor;
  ```
 -- b)
  ```
 SELECT Min(salary) from Actor;
  ```
 -- c)
  ```
 SELECT COUNT(*) FROM Actor WHERE gender = "female";
  ```
 -- d)
  ```
 SELECT Sum(salary) from Actor;
  ```
 
-- Exercício [ 5 ]
-- a)
 ```
SELECT COUNT(*), gender FROM Actor GROUP BY gender;
 ```
-- b)
 ```
SELECT id, name FROM Actor ORDER BY name DESC;
 ```
-- c)
 ```
SELECT * FROM Actor ORDER BY salary;
 ```
-- d)
 ```
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
 ```
-- e)
 ```
SELECT AVG(salary), gender FROM Actor GROUP BY gender;
 ```

-- Exercício [ 6 ]
-- a)
 ```
ALTER TABLE Movies ADD playing_limit_date DATE;
 ```
-- b)
 ```
ALTER TABLE Movies CHANGE ranting ranting float;
 ```
-- c)
 ```
UPDATE Movies SET playing_limit_date = "2022-12-31" WHERE id = "001";
 ```
-- d)
 ```
DELETE FROM Movies WHERE id = "001";
 ```

-- Exercício [ 7 ] 
-- a) 
 ```
SELECT COUNT(*) FROM Movies WHERE ranting > 7.5;
 ```
-- b)
 ```
SELECT AVG(ranting) FROM Movies;
 ```
-- c)
 ```
SELECT COUNT(*) FROM Movies WHERE playing_milit_date > CURDATE();
 ```
-- d)
 ```
SELECT COUNT(*) FROM Movies WHERE release_date > CURDATE();
 ```
-- e)
 ```
SELECT Max(ranting) FROM Movies;
 ```
-- f)
 ```
SELECT Min(ranting) FROM Movies;
 ```

-- Exercício [ 8 ]
-- a)
 ```
SELECT * FROM Movies ORDER BY name ASC;
 ```
-- b)
 ```
SELECT * FROM Movies ORDER BY name LIMIT 5;
 ```
-- c)
 ```
SELECT * FROM MOvies WHERE release_date < CURDATE() ORDER BY release_date DESC LIMIT 3;
 ```
-- d)
 ```
SELECT * FROM Movies ORDER BY ranting DESC LIMIT 3;
 ```
