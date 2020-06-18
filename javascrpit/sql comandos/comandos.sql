--criando database--
CREATE DATABASE nome;
--criando tabelas--
CREATE TABLE nome;

--iserindo dados com comandos abaixo--
insert  into usuarios (nome,email,idade) value("mateus da silva","mateus@gmail.com",24);

--selecionado dados da tabela--
SELECT * FROM tabela;

--fazendo consulta especificar--
SELECT FROM tabela WHERE atributo = 8;
--deletando registro da tabela sempre use o delete com where--
DELETE FROM tabela WHERE atributo = "edson";

--atualizar--;
UPDATE tabela SET atributo  WHERE atributo = "nome de teste";