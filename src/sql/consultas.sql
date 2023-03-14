DECLARE @i INT = 1
WHILE (@i <= 39)
BEGIN
    INSERT INTO sis_tcRutasIconos (Id_DeptI) VALUES (@i)
    SET @i = @i + 1
END

SELECT * FROM sis_tcRutasIconos

CREATE TABLE sis_tcRutasIconos (
    Id_DeptI int,
    path VARCHAR(255)
)

CREATE TABLE sis_tcusuario_modulosFav (
    idUsuario int,
    idModulo int,
    fechaAdd DATETIME
)

CREATE TABLE sis_tcusuario_recientes (
    idUsuario int,
    idModulo1 int,
    idModulo2 int,
    idModulo3 int,
    idModulo4 int
)