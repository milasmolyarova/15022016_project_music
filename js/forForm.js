/*модальное окно*/
var r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;

function checkParams() {
    if( r.test($('#yourMail').val())  &&
        $('#yourPassword').val().length !=0)
    {
        $('#yourMail').css({'border' : '1px solid #569b44'});
        $('#yourPassword').css({'border' : '1px solid #569b44'});

        $('#registrationBtn').removeAttr('disabled');
    } else {
        $('#yourMail').css({'border' : '1px solid #ff0000'});
        $('#yourPassword').css({'border' : '1px solid #ff0000'});
        $('#registrationBtn').attr('disabled', 'disabled');
    }
}; 
function registration(){
    $('#registration').fadeOut();
};
function registrationOk(){
    $('#registrationOk').fadeOut(function(){
    document.location.reload();
    });
};
$(document).ready(function() { 
    $("a.fancyimage").fancybox(); 
}); 



 