type="text/javascript" ;async=""; src="https://www.googletagmanager.com/gtag/js?id=G-SSKZELV7RD&amp;cx=c&amp;_slc=1";
async=""; src="//www.google-analytics.com/analytics.js";
src="/jasc/danuri/jquery-1.8.2.min.js?ver=20230619014130000";

    $(document).ready(function(){
        
        $('.menu_btn>a').on('click', function(){
            $('.menu_bg').show(); 
            $('.sidebar_menu').show().animate({
                right:0
            });  
        });
        $('.close_btn>a').on('click', function(){
            $('.menu_bg').hide(); 
            $('.sidebar_menu').animate({
                right: '-' + 50 + '%'
                        },function(){
                            $('.sidebar_menu').hide();          
                        });  
        });
    });

async=""; src="https://www.googletagmanager.com/gtag/js?id=G-2FKTFX2RDK";

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-2FKTFX2RDK');


	$('.js-click-modal').click(function(){
	  $('.container').addClass('modal-open');
	});

	$('.js-close-modal').click(function(){
	  $('.container').removeClass('modal-open');
	});
