var UrlApiInsert = 'http://localhost:5008/usuario/insertar/:codigo_usuario';

function AgregarUsuario(){
    var datosUsuario = {
      codigo_usuario:$('#codigousuario').val(),
      nombre:$('#nombre').val(),
      apellido:$('#apellido').val(),
      clave:$('#clave').val(),
      email:$('#email').val(),
      ultimo_ingreso:$('#ultimoingreso').val(),
      clave_expira:$('#claveexpira').val(),
      dias_caducidad:$('#diascaducidad').val(),
      rol:$('#rol').val(),
      fecha_registro:$('#fecharegistro').val()
    };
    var datosUsuariojson = JSON.stringify(datosUsuario);
    
    $.ajax({
         url:UrlApiInsert,
         type: 'POST',
         data: datosUsuariojson,
         datatype: 'JSON',
         contentType: 'application/json',
         success: function(response){
              $('#Miformulario').submit();
         },
         error : function(textError,errorThrown){
              alert('Error : '+textError + errorThrown);
         }
    })
    alert('Usuario Ingresado Correctamente');
}