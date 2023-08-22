var UrlApiLogin = 'http://localhost:5008/usuario/autenticar';
function UsuarioLogin() {
    var usuario ={
      codigo_usuario : $('#codigoUser').val(),
      clave : $('#claveUser').val(),
    };
    var usuariojson = JSON.stringify(usuario);
    $.ajax({
        url : UrlApiLogin, 
        type: 'POST',
        data: usuariojson,
        dataType : 'JSON',
        contentType: 'application/json',
        success: function(response){
            if (response.message === `Usuario invalido`){
                alert(response.message);
                window.location.href = "login.html";
            }else if (response.message === `Usuario o contrasena incorrecta`){
                alert(response.message);
                window.location.href = "login.html";
            }else if (response.message === `Autenticación exitosa`){
                alert(response.message);
                window.location.href = "Home.html";
            }else{
                alert(response.message);
                window.location.href = "login.html";
            }
        },
        error : function(xhr, textError, errorThrow){
            alert('Error: ' + textStatus);
        }
    });
}