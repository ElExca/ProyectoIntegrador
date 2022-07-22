
function cargarDatos() {
    var nombre=document.getElementById("txt1").value;
    var pass=document.getElementById("txt2").value;
    var rcpass=document.getElementById("txt3").value;
    if(pass==rcpass){
    //Instrucción SQL
    $query=`INSERT INTO registro (id,nombre,constrasena) VALUES (0,'${nombre}','${pass}')`;
    conexion.query($query, function (err) {
    if (err) {
    console.log("error en el query");
    console.log(err);
    return;
    }
    else { alert ("Datos guardados") }
    });} 
}


function consultar(){
    //var cadena;
$query = 'Select *from registro;';//instrucción SQL
let tablaR= document.getElementById("tabla");
conexion.query($query, function (err, rows) {
if (err) {
console.log("error en el query");
console.log(err);
return;
}
else{
//Lo que se extrae de la BD, queda guardado en ROWS que se vuelve una lista de objetos
var long = rows.length;//Se obtiene el tamaño de la lista
for(i=0 ; i<long ; i++){//Se utiliza para recorrer la lista
//cadena += rows[i].id + ' ' + rows[i].nombre +  ' ' + rows[i].contraseña +'\n';//Registro
var newRow= tablaR.insertRow(-1);
var celdaId= newRow.insertCell(0);
var celdaUsuario= newRow.insertCell(1);
var textoId = document.createTextNode(rows[i].id);
var textoUsuario = document.createTextNode(rows[i].nombre);
celdaId.appendChild(textoId);
celdaUsuario.appendChild(textoUsuario);
}
//alert(cadena);

}});
}

function buscar(){
    var nombre=document.getElementById("txt4").value;
    $query=`select *from registro where nombre ='${nombre}';`

    let tablaR= document.getElementById("tabla2");
    conexion.query($query, function (err, rows) {
    if (err) {
    console.log("error en el query");
    console.log(err);
    return;
    }
    else{
    //Lo que se extrae de la BD, queda guardado en ROWS que se vuelve una lista de objetos
    var long = rows.length;//Se obtiene el tamaño de la lista
    for(i=0 ; i<long ; i++){//Se utiliza para recorrer la lista
    //cadena += rows[i].id + ' ' + rows[i].nombre +  ' ' + rows[i].contraseña +'\n';//Registro
    var newRow= tablaR.insertRow(-1);
    var celdaId= newRow.insertCell(0);
    var celdaUsuario= newRow.insertCell(1);
    var textoId = document.createTextNode(rows[i].id);
    var textoUsuario = document.createTextNode(rows[i].nombre);
    celdaId.appendChild(textoId);
    celdaUsuario.appendChild(textoUsuario);
    }
    //alert(cadena);

    }});
}

function actualizar() {
    var nombre=document.getElementById("txt1").value;
    var precioVenta=document.getElementById("txt3").value;
    var precioCompra=document.getElementById("txt2").value;

    $query=`UPDATE productos SET precio_de_Venta='${precioVenta}',
    precio_de_Compra='${precioCompra}'
    WHERE nombre ='${nombre}';`
    conexion.query($query, function (err) {
        if (err) {
        console.log("error en el query");
        console.log(err);
        return;
        }
        else{
            console.log('actualizacion exitosa')
        }
    });
}

function comprar() {
    var nombre=document.getElementById("txt4").value;
    var cantidadDeCompra=document.getElementById("txt5").value;
    $query=`select *from productos where nombre ='${nombre}';`
    console.log(nombre)
    conexion.query($query, function (err, rows) {
        if (err) {
        console.log("error en el query");
        console.log(err);
        return;
        }
        else{
            if (Number(cantidadDeCompra)<0) {
                alert('No se acaptan cantidades negativas')
                
            }
            else{ var cantAnterior=Number(rows[0].cantidad)
                var total=cantAnterior+Number(cantidadDeCompra);
                $query=`UPDATE productos SET cantidad = '${total}'
                WHERE nombre ='${nombre}';`
                conexion.query($query, function (err) {
                    if (err) {
                    console.log("error en el query");
                    console.log(err);
                    return;
                    }
                    else{
                        console.log('actualizacion exitosa')
                    }
                });}
           
       
        }});


    
}

function vender() {
    var nombre=document.getElementById("txt6").value;
    var cantidadDeCompra=document.getElementById("txt7").value;
    $query=`select *from productos where nombre ='${nombre}';`
    console.log(nombre)
    conexion.query($query, function (err, rows) {
        if (err) {
        console.log("error en el query");
        console.log(err);
        return;
        }
        else{
            if (Number(cantidadDeCompra)>Number(rows[0].cantidad)) {
                alert('No hay sufuciente inventario para realizar el pedido')
            
            }
            else if (Number(cantidadDeCompra)<0) {
                alert('No se acaptan cantidades negativas')
                
            }
            else{var cantAnterior=Number(rows[0].cantidad) 
                var total=cantAnterior-Number(cantidadDeCompra)
                 $query=`UPDATE productos SET cantidad = '${total}'
                 WHERE nombre ='${nombre}';`
                 conexion.query($query, function (err) {
                     if (err) {
                     console.log("error en el query");
                     console.log(err);
                     return;
                     }
                     else{
                         console.log('actualizacion exitosa')
                     }
                 });}
           
       
        }});


    
}
function select() {
    $query=`select nombre from productos`
    let nombre= document.getElementById("div1");
    let select = document.createElement("select");
    select.setAttribute("id","txt1");
    conexion.query($query, function (err, rows) {
        if (err) {
        console.log("error en el query");
        console.log(err);
        return;
        }
        else{
            var long = rows.length;
            for(i=0 ; i<long ; i++){
            let option1 = document.createElement("option");
            option1.setAttribute("value", rows[i].nombre);
            let option1Texto = document.createTextNode(rows[i].nombre);
            option1.appendChild(option1Texto);
            select.appendChild(option1);
        }
        nombre.appendChild(select);
    }});
}
 
function consultar2(){
    //var cadena;
$query = 'Select *from productos;';//instrucción SQL
let tablaR= document.getElementById("Tabla2");
conexion.query($query, function (err, rows) {
if (err) {
console.log("error en el query");
console.log(err);
return;
}
else{
//Lo que se extrae de la BD, queda guardado en ROWS que se vuelve una lista de objetos
var long = rows.length;//Se obtiene el tamaño de la lista
for(i=0 ; i<long ; i++){//Se utiliza para recorrer la lista
//cadena += rows[i].id + ' ' + rows[i].nombre +  ' ' + rows[i].contraseña +'\n';//Registro
const button = document.createElement('button'); 
        button.type = 'button'; 
        button.innerText = 'Eliminar';
        button.setAttribute('id',rows[i].nombre);
        button.addEventListener('click',(event)=>{
            event.target.parentNode.parentNode.remove()
            eliminar(event.target.id);
        });
var newRow= tablaR.insertRow(-1);
var celdaId= newRow.insertCell(0);
var celdaNombre= newRow.insertCell(1);
var celdaPrecioV= newRow.insertCell(2);
var celdaPrecioC= newRow.insertCell(3);
var celdaCantidad= newRow.insertCell(4);
var celdaUnidad= newRow.insertCell(5);
var celdaBoton=newRow.insertCell(6);

var textoId = document.createTextNode(rows[i].id_producto);
var textoNombre = document.createTextNode(rows[i].nombre);
var textoPrecioV= document.createTextNode(rows[i].precio_de_venta);
var textoPrecioC= document.createTextNode(rows[i].precio_de_compra);
var textoCantidad= document.createTextNode(rows[i].cantidad);
var textoUnidad= document.createTextNode(rows[i].unidad);


celdaId.appendChild(textoId);
celdaNombre.appendChild(textoNombre);
celdaPrecioV.appendChild(textoPrecioV);
celdaPrecioC.appendChild(textoPrecioC);
celdaCantidad.appendChild(textoCantidad);
celdaUnidad.appendChild(textoUnidad);
celdaBoton.appendChild(button)

}
//alert(cadena);

}});
}
       
function eliminar(nombre){
    $query=`delete from productos WHERE nombre ='${nombre}';`

    conexion.query($query, function (err) {
        if (err) {
        console.log("error en el query");
        console.log(err);
        return;
        }
        else{        
            console.log(nombre)
            console.log('Dato eliminado')
                         
        }
    });
}

function consultarCompras(){
    //var cadena;
$query = 'Select *from compra;';//instrucción SQL
let tablaR= document.getElementById("TablaCompras");
let total=0;
conexion.query($query, function (err, rows) {
if (err) {
console.log("error en el query");
console.log(err);
return;
}
else{
//Lo que se extrae de la BD, queda guardado en ROWS que se vuelve una lista de objetos
var long = rows.length;//Se obtiene el tamaño de la lista
for(i=0 ; i<long ; i++){//Se utiliza para recorrer la lista
//cadena += rows[i].id + ' ' + rows[i].nombre +  ' ' + rows[i].contraseña +'\n';//Registro
var newRow= tablaR.insertRow(-1);
var celdaId= newRow.insertCell(0);
var celdaNombre= newRow.insertCell(1);
var celdaPrecioC= newRow.insertCell(2);
var celdaCantidad= newRow.insertCell(3);
var celdaCuentaT= newRow.insertCell(4);

total= total+rows[i].precio_total;

var textoId = document.createTextNode(rows[i].Compras_id_producto);
var textoNombre = document.createTextNode(rows[i].nombre);
var textoPrecioC= document.createTextNode(rows[i].precio_de_compra);
var textoCantidad= document.createTextNode(rows[i].cantidad_comprada);
var textoCuentaT= document.createTextNode(rows[i].precio_total);

celdaId.appendChild(textoId);
celdaNombre.appendChild(textoNombre);
celdaPrecioC.appendChild(textoPrecioC);
celdaCantidad.appendChild(textoCantidad);
celdaCuentaT.appendChild(textoCuentaT);

}
//alert(cadena);
var newRow2= tablaR.insertRow(long+1)
var celda1= newRow2.insertCell(0);
var celda2= newRow2.insertCell(1);
var celda3= newRow2.insertCell(2);
var celda4= newRow2.insertCell(3);
var celdaTotal= newRow2.insertCell(4);

var texto1 = document.createTextNode('Total Comprado: ');
var textoTotal = document.createTextNode(total);
var texto = document.createTextNode('');
celda1.appendChild(texto1);
celda2.appendChild(texto);
celda3.appendChild(texto);
celda4.appendChild(texto);
celdaTotal.appendChild(textoTotal);

consultarVentas();

}});
}

function consultarVentas(){
    //var cadena;
$query = 'Select *from venta;';//instrucción SQL
let tablaR= document.getElementById("TablaVentas");
let total=0;
conexion.query($query, function (err, rows) {
if (err) {
console.log("error en el query");
console.log(err);
return;
}
else{
//Lo que se extrae de la BD, queda guardado en ROWS que se vuelve una lista de objetos
var long = rows.length;//Se obtiene el tamaño de la lista
for(i=0 ; i<long ; i++){//Se utiliza para recorrer la lista
//cadena += rows[i].id + ' ' + rows[i].nombre +  ' ' + rows[i].contraseña +'\n';//Registro
var newRow= tablaR.insertRow(-1);
var celdaId= newRow.insertCell(0);
var celdaNombre= newRow.insertCell(1);
var celdaPrecioV= newRow.insertCell(2);
var celdaCantidad= newRow.insertCell(3);
var celdaCuentaT= newRow.insertCell(4);

total= total+rows[i].precio_total;

var textoId = document.createTextNode(rows[i].productos_id_producto);
var textoNombre = document.createTextNode(rows[i].nombre);
var textoPrecioV= document.createTextNode(rows[i].precio_de_venta);
var textoCantidad= document.createTextNode(rows[i].cantidad_vendida);
var textoCuentaT= document.createTextNode(rows[i].precio_total);

celdaId.appendChild(textoId);
celdaNombre.appendChild(textoNombre);
celdaPrecioV.appendChild(textoPrecioV);
celdaCantidad.appendChild(textoCantidad);
celdaCuentaT.appendChild(textoCuentaT);

}
//alert(cadena);
var newRow2= tablaR.insertRow(long+1)
var celda1= newRow2.insertCell(0);
var celda2= newRow2.insertCell(1);
var celda3= newRow2.insertCell(2);
var celda4= newRow2.insertCell(3);
var celdaTotal= newRow2.insertCell(4);

var texto1 = document.createTextNode('Total Vendido: ');
var textoTotal = document.createTextNode(total);
var texto = document.createTextNode('');
celda1.appendChild(texto1);
celda2.appendChild(texto);
celda3.appendChild(texto);
celda4.appendChild(texto);
celdaTotal.appendChild(textoTotal);

//calcularTotalCompras(total);

}});
}
document.addEventListener('DOMContentLoaded',select, false);

/* function limpiar(){
    $query=`delete from venta;`;
    $query2=`delete from compra;`;

    conexion.query($query, $query2,function (err) {
        if (err) {
        console.log("error en el query");
        console.log(err);
        return;
        }
        else{        
            
            console.log('Dato eliminado')
            
            }
    });
} */
function limpiar(){
    $query=`delete from venta;`;
    

    conexion.query($query, function (err) {
        if (err) {
        console.log("error en el query");
        console.log(err);
        return;
        }
        else{        
            
            console.log('Dato eliminado')
            $query2=`delete from compra;`;        
            conexion.query($query2, function (err) {
                if (err) {
                console.log("error en el query");
                console.log(err);
                return;
                }
                else{  
                    console.log('Dato eliminado')
                                 
                }
            });             
        }
    });
}


//alert(cadena);
/*
}});*/




//https://parzibyte.me/blog/2019/07/07/select-javascript-agregar-limpiar-obtener-escuchar-cambios/