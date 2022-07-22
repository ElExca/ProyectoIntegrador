
/* function cargarDatos() {
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
} */


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

    if(Number(precioVenta)>0 && Number(precioCompra)>0){
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
    else{alert('No se aceptan valores negativos')}
    
}

function comprar() {
    var nombre=document.getElementById("txt1").value;
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
    var nombre=document.getElementById("txt1").value;
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

document.addEventListener('DOMContentLoaded',select, false); 



/* function eliminar(){
    var nombre=document.getElementById("txt1").value;
    $query=`delete from productos WHERE nombre ='${nombre}';`

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
 */
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