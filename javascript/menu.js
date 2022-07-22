function seleccionar(){

    $query = 'Select nombre from productos;';
    conexion.query($query, function (err, rows) {
        if (err) {
        console.log("error en el query");
        console.log(err);
        return;
        }
        else{
        //Lo que se extrae de la BD, queda guardado en ROWS que se vuelve una lista de objetos
        var long = rows.length;
        //Se obtiene el tamaño de la lista
        for(i=0 ; i<long ; i++){
            let option=[{
                value: rows[i].nombre,
                text: rows[i].nombre

            }];
            let selector= createSELECT(option);
            selector.setAttribute("id","txt4");
            document.body.appendChild(selector);
                  } 
                  
            
     
}});
}

document.addEventListener('DOMContentLoaded',seleccionar,false);


function createSELECT(options) {
 
    let select = document.createElement("select");
    if (options && Array.isArray(options)) {
        for (let index = 0; index < options.length; index++) {
            const element = options[index];
 
            let option = document.createElement("option");
 
            if (element.value) {
                option.setAttribute("value", element.value);
            }
            if (element.text) {
                let optionText = document.createTextNode(element.text);
                option.appendChild(optionText);
            }
 
            select.appendChild(option);
        }
    }
 
    return select;
}