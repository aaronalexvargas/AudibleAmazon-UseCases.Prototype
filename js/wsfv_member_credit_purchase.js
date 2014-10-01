/*  Aud */


//VARIABLES - BACKGROUND SCREENSHOTS  
//Header Section//
//var PDPHeader =new Array("header_1", "header_2");
//document.write("<img class='top' src=img/" + PDPHeader [0] + ".png>"); // added class top 

//Notification Section//
//var PDPContextualization =new Array("background-top","2","3","4");

//Contextualization Section//
//var PDPNotification =new Array("background-top","2","3","4");

//Buy Box Section//
//var PDPBuyBox =new Array("background-top","2","3","4");



//Hide Button on Click

$(document).ready(function(){
    
    /*example 1*/
    
    // when you click on button 1, it select top image (i set top class) and change it's src attribute
    
    //$('.bb_buy_1').click(function(){
    //    $('.top').attr('src', 'img/' + PDPHeader[1] + ".png"); // select top image and change it's src attribute
    //})
 
 
  //Member Buys with Credit
  
   //Button 1 - click 1 renders...
    $('.bb_buy_1').click(function(){
       $(this).replaceWith('<input type="image" class="member_bb_buy_2" src="img/confirm_button.png">');     
        $('a1').remove();  
    })
    
    
  //Button 1 - click 2 renders...
	$('.bb_buy_1').click(function(){
		  $('.member_bb_buy_2').click(function(){
    	    $('a2').remove();
    	    $('a3').remove();
    	    $('a4').remove();
    	    $('a5').remove();
    	    $('.bb_container').css('background', 'white');
	 	 //    $('.bb_container').remove(); 
	 	//	$('a6').append();
	 		$( ".bb_container" ).append( "<a6><br>Thank you for your purchase.<br>Your order has been confirmed.<br><br></a6>")
	 							.append("<a7>Monsters is in your library.<br><br></a7>")
	 							.append("<a8>Check your email or click here to view invoice.<br><br><br></a8>")
	 							.append("<a9>Want to listen on the go?  Get our free app!</a10>"
	 		);
	 																																
    	})
   
   
   
   
    	
    //Buttons 1& 2 - click 1 renders..
//    $('.bb_buy_1,  .bb_buy_2').click(function(){
  //     $(this).replaceWith('<input type="image" class="member_bb_buy_2" src="img/confirm_button.png">');     
  //      $('a1').remove();  
  //  })
    

    	


	//$('.bb_buy_1').click(function(){
	//	  $('.member_bb_buy_2').click(function(){
    //	    $(this).removeClass('member_bb_buy_2').after( "<p>Test</p>" );  
    //		})
        
	// $('.bb_buy_1').click(function(){
	//	  $('.member_bb_buy_2').click(function(){
    //	    $(this).removeClass('member_bb_buy_2').removeClass('bb_buy_2');  
    //	})

	})
})