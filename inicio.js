const listaUsuarios =[{user:"usuario1",pass:1234},
                      {user:"usuario2",pass:2345}];

function validar()

		{
			var usuario = document.getElementById("usuario").value;
			var contraseña = document.getElementById("pass").value;	
            var bandera = 0;

            for (let i = 0; i < 3; i++) {
                if(usuario == listaUsuarios[i].user && contraseña == listaUsuarios[i].pass){
                    bandera=0;
                  location.href = "interfaz.html";
                    break;
			    }
			    else{
                    bandera=1;
			    }
               
            }

            if (bandera==1) {
                alert("Verifique los datos");
            }

		}