
function registro(){
var nombre=document.getElementById("nombre").value;
var PVenta=document.getElementById("pventa").value;
var PCompra= document.getElementById("pcompra").value;
var cantidad=document.getElementById("cantidad").value;
var unidad= document.getElementById("unidad").value;
if(Number(cantidad)>0 && Number(PVenta)>0 && Number(PCompra)>0){
//Instrucción SQL
$query=`INSERT INTO productos (id_producto,nombre,precio_de_venta,precio_de_compra,cantidad,unidad) VALUES (0,'${nombre}','${PVenta}','${PCompra}','${cantidad}','${unidad}')`;
    conexion.query($query, function (err) {
        if (err) {
        console.log("error en el query");
        console.log(err);
        return;
        }
        else{        
            swal('Éxito','Producto agregado','success');
        }
    });
    }
    else{swal('Error','Verifique sus datos','error');}
}



