$(document).ready(function(){
    
    /*example b1*/
    
    $('#btn-1, #btn-2').click(function(){
        $(this).html(parseInt($(this).html()) + 1);
    })
    
    var header = 'this is the header';
    
    $('header').html(header);
    
})