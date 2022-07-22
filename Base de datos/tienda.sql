create database tienda;
use tienda;

select * from productos;
create table productos(
id_producto int not null unique auto_increment,
nombre varchar(55) not null,
precio_de_venta double not null,
precio_de_compra double not null,
cantidad double,
unidad varchar(20),
primary key (id_producto)
);
insert into productos(id_producto,nombre,precio_de_venta,precio_de_compra,cantidad,unidad) values
(1,"Cloro",50,30,20,"Litros"),
(2,"Axion",40,20,30,"Kg"),
(3,"Suavitel",50,20,50,"Litros"),
(4,"Fabuloso",20,10,40,"Litros"),
(5,"Pino",20,10,60,"Litros"),
(6,"escoba",50,20,5,"Piezas");
create table venta(
nombre varchar(55) not null,
precio_de_venta int not null,
cantidad_vendida int,
precio_total int,
productos_id_producto int not null,
constraint fkventa_productos
foreign key(productos_id_producto)
references productos(id_producto)
);

create table compra(
nombre varchar(55) not null,
precio_de_compra int not null,
cantidad_comprada int,
precio_total int,
Compras_id_producto int not null,
foreign key (Compras_id_producto)references productos(id_producto)
);
create table usuario(
nombre varchar(55),
contraseña varchar(8)
);

insert into usuario(nombre,contraseña) value('admin','1205');

select * from compra;

delete from productos where nombre='cloro';
create or replace view vista1 as 
select nombre from productos;

create or replace view vista2 as 
select nombre,cantidad from productos;

create or replace view vista3 as 
select nombre from usuario;

create or replace view vista4 as 
select nombre,precio_de_venta,precio_de_compravista1 from productos;


