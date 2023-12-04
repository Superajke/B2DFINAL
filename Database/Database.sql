CREATE TABLE paises(
	codigo INTEGER NOT NULL,
	nombre CHAR VARYING (30) NOT NULL,
	CONSTRAINT PAISES_PK PRIMARY KEY (codigo)
);

CREATE TABLE departamentos(
    codigo INTEGER NOT NULL,
    nombre CHAR VARYING (30) NOT NULL,
    codigo_pais INTEGER NOT NULL,
    CONSTRAINT DEPARTAMENTOS_PK PRIMARY KEY (codigo),
    CONSTRAINT DEPARTAMENTOS_PAISES_FK FOREIGN KEY (codigo_pais) REFERENCES paises (codigo)
);

CREATE TABLE ciudades(
    codigo INTEGER NOT NULL,
    nombre CHAR VARYING (30) NOT NULL,
    codigo_departamento INTEGER NOT NULL,
    CONSTRAINT CIUDADES_PK PRIMARY KEY (codigo),
    CONSTRAINT CIUDAD_DEPARTAMENTOS_FK FOREIGN KEY (codigo_departamento) REFERENCES departamentos (codigo)
);

CREATE TABLE sedes(
    codigo INTEGER NOT NULL,
    nombre CHAR VARYING (30) NOT NULL,
    codigo_ciudad INTEGER NOT NULL,
    CONSTRAINT SEDES_PK PRIMARY KEY (codigo),
    CONSTRAINT SEDES_CIUDADES_FK FOREIGN KEY (codigo_ciudad) REFERENCES ciudades (codigo)
);

CREATE TABLE tipos_contratacion(
    nombre CHAR VARYING (30) NOT NULL,
    CONSTRAINT TIPOS_CONTRATACION_PK PRIMARY KEY (nombre)
);

CREATE TABLE tipos_empleado(
    nombre CHAR VARYING (30) NOT NULL,
    CONSTRAINT TIPOS_EMPLEADO_PK PRIMARY KEY (nombre)
);

CREATE TABLE facultades(
    codigo INTEGER NOT NULL,
    nombre CHAR VARYING (30) NOT NULL,
    ubicacion CHAR VARYING (15) NOT NULL,
    nro_telefono CHAR VARYING (15) NOT NULL,
    CONSTRAINT FACULTADES_PK PRIMARY KEY (codigo)
);

CREATE TABLE areas(
    codigo INTEGER NOT NULL,
    nombre CHAR VARYING (30) NOT NULL,
    facultades_codigo INTEGER NOT NULL,
    CONSTRAINT AREAS_PK PRIMARY KEY (codigo),
    CONSTRAINT AREAS_FACULTADES_FK FOREIGN KEY (facultades_codigo) REFERENCES facultades (codigo)
);

CREATE TABLE programas(
    codigo INTEGER NOT NULL,
    nombre CHAR VARYING (30) NOT NULL,
    areas_codigo INTEGER NOT NULL,
    CONSTRAINT PROGRAMAS_PK PRIMARY KEY (codigo),
    CONSTRAINT PROGRAMAS_AREAS_FK FOREIGN KEY (areas_codigo) REFERENCES areas (codigo)
);

CREATE TABLE empleados(
    identificacion CHAR VARYING (15) NOT NULL,
    nombres CHAR VARYING (30) NOT NULL,
    apellidos CHAR VARYING (30) NOT NULL,
    email CHAR VARYING (30) NOT NULL,
    tipo_contratacion CHAR VARYING (30) NOT NULL,
    tipos_empleado CHAR VARYING (30) NOT NULL,
    cod_facultad INTEGER NOT NULL,
    codigo_sede INTEGER NOT NULL,
    lugar_nacimiento INTEGER NOT NULL,
    CONSTRAINT EMPLEADOS_PK PRIMARY KEY (identificacion),
    CONSTRAINT EMPLEADOS_TIPOS_CONTRATACION_FK FOREIGN KEY (tipo_contratacion) REFERENCES tipos_contratacion (nombre),
    CONSTRAINT EMPLEADOS_TIPOS_EMPLEADO_FK FOREIGN KEY (tipos_empleado) REFERENCES tipos_empleado (nombre),
    CONSTRAINT EMPLEADOS_FACULTADES_FK FOREIGN KEY (cod_facultad) REFERENCES facultades (codigo),
    CONSTRAINT EMPLEADOS_SEDES_FK FOREIGN KEY (codigo_sede) REFERENCES sedes (codigo),
    CONSTRAINT EMPLEADOS_CIUDADES_FK FOREIGN KEY (lugar_nacimiento) REFERENCES ciudades (codigo)
);

INSERT INTO paises (codigo, nombre) VALUES (57, 'COLOMBIA');

INSERT INTO departamentos (codigo, nombre, codigo_pais) VALUES (1, 'ANTIOQUIA', 57);

INSERT INTO ciudades (codigo, nombre, codigo_departamento) VALUES (1, 'MEDELLIN', 1);

INSERT INTO facultades (codigo, nombre, ubicacion, nro_telefono) VALUES (1, 'INGENIERIA', 'P38-203', '3197906');

INSERT INTO sedes (codigo, nombre, codigo_ciudad) VALUES (1, 'POBLADO', 1);

INSERT INTO tipos_contratacion (nombre) VALUES ('LIBRE NOMBRAMIENTO');
INSERT INTO tipos_contratacion (nombre) VALUES ('CARRERA ADMINISTRATIVA');
INSERT INTO tipos_contratacion (nombre) VALUES ('CARRERA DOCENTE');

INSERT INTO tipos_empleado (nombre) VALUES ('ADMINISTRATIVO');
INSERT INTO tipos_empleado (nombre) VALUES ('DOCENTE');

INSERT INTO empleados (identificacion, nombres, apellidos, email, tipo_contratacion, tipos_empleado, cod_facultad, codigo_sede, lugar_nacimiento) 
VALUES (10, 'LUZ', 'LOPEZ', 'LMLOPEZ@ELPOLI.EDU.CO', 'CARRERA ADMINISTRATIVA', 'ADMINISTRATIVO', 1, 1, 1);

INSERT INTO empleados (identificacion, nombres, apellidos, email, tipo_contratacion, tipos_empleado, cod_facultad, codigo_sede, lugar_nacimiento) 
VALUES (11, 'JOSE LEONARDO', 'RAMIREZ', 'JOSERAMIREZ@ELPOLI.EDU.CO', 'LIBRE NOMBRAMIENTO', 'ADMINISTRATIVO', 1, 1, 1);

INSERT INTO areas (codigo, nombre, facultades_codigo) VALUES (1, 'APIT', 1);

INSERT INTO programas (codigo, nombre, areas_codigo) VALUES (15, 'INGENIERIA INFORMATICA', 1);
