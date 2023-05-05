$(document).ready(
    () => {
        $(window).resize(() =>{
            if ($(window).width() >= 768){
                $('#bt-hamburguer').css('display', 'none');
                $('#bt-fechar').css('display', 'none');
                $('.menu-principal').css('display', 'flex');
            } else{
                $('#bt-fechar').css('display', 'none');
                $('#bt-hamburguer').css('display', 'inline');
                $('.menu-principal').css('display', 'none');
            }
        });
        $('#bt-hamburguer').click(() => {
            $('#bt-hamburguer').css('display', 'none');
            $('#bt-fechar').css('display', 'inline');
            $('.menu-principal').css('display', 'flex');
        
        });
            
        $('#bt-fechar').click(() => {
            $('#bt-fechar').css('display', 'none');
            $('#bt-hamburguer').css('display', 'inline');
            $('.menu-principal').css('display', 'none');
        });
    });
        
    
