
document.addEventListener('DOMContentLoaded',consultar2, false); 

    function consultar2(){
        //var cadena;
    $query = 'Select *from productos;';//instrucción SQL
    let tablaR= document.getElementById("Tabla");
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