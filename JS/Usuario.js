var UrlApiInsert = 'http://localhost:5008/usuario/insertar/:codigo_usuario';
var UrlApiGetAll = 'http://localhost:5008/usuario/getall';
$(document).ready(function(){
     CargarUsuarios();
 });
 function CargarUsuarios(){
     $.ajax({
         url: UrlApiGetAll,
         type:'GET',
         datatype:'JSON',
         success:function(response){
             var MiItems = response;
             var Valores ='';
             for(i=0; i < MiItems.length; i++){
                 Valores +=
                 '<tr>'+
                 '<td>'+ MiItems[i].codigo_usuario +'</td>'+
                 '<td>'+ MiItems[i].nombre +'</td>'+
                 '<td>'+ MiItems[i].apellido +'</td>'+
                 '<td>'+ MiItems[i].clave +'</td>'+
                 '<td>'+ MiItems[i].email +'</td>'+
                 '<td>'+ MiItems[i].estado +'</td>' +
                 '<td>'+ MiItems[i].ultimo_ingreso +'</td>' +
                 '<td>'+ MiItems[i].clave_expira +'</td>' +
                 '<td>'+ MiItems[i].dias_caducidad +'</td>' +
                 '<td>'+ MiItems[i].rol +'</td>' +
                 '<td>'+ MiItems[i].intentos +'</td>' +
                 '<td>'+ MiItems[i].fecha_registro +'</td>' +    
                 '<td>'+
                 '</tr>';
                 $('#DataUs').html(Valores);
             }
         }
     });
 }

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


