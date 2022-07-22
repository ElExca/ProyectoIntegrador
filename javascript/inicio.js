function validar(){ 
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("pass").value;

    $query = `SELECT * FROM usuario WHERE nombre = '${user}' AND contraseña = '${pass}'`;

    conexion.query($query, function (err, rows, fields) {
        if (err) {
            console.log("Error en el query");
            console.log(err);
            return;
        }
        else {
            console.log("Sesion iniciada", rows, fields)

            if (rows.length == 0) {
                alert("Contraseña o usuario incorrecto")
            }
            else {
                location.href = "interfaz.html"
            }
        }
    })
}
