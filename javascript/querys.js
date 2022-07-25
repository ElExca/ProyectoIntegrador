
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
        else if(precioCompra==0 && precioVenta==0){
            swal('Error','Verifique sus datos','error')
        }
        else{
            console.log('actualizacion exitosa')
            swal('Éxito','Producto actualizado','success');
        }
    });
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
                    swal('Éxito','Corte mensual hecho','success');               
                }
            });             
        }
    });
}


//alert(cadena);
/*
}});*/




//https://parzibyte.me/blog/2019/07/07/select-javascript-agregar-limpiar-obtener-escuchar-cambios/