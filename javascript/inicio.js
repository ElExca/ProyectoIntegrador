



function validar(){ 
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("pass").value;

    $query = `SELECT * FROM usuario WHERE nombre = '${user}' AND contraseña = '${pass}'`;

    conexion.query($query, function (err, rows) {
        if (err) {
            console.log("Error en el query");
            console.log(err);
            return;
        }
        else {
            
            swal("Good job!", "You clicked the button!", "success"); 

            if (rows.length == 0) {
                swal("oops","Contraseña o usuario incorrecto","error")
            }
            else {
                
                location.href = "interfaz.html"
            }
        }
    })
}
