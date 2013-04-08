/*
 *  Funcion que permite el efecto de animacion cuando se realiza el desplazamiento entre anchors
 */
    $(function(){

     $('a[href*=#]').click(function() {

     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
         && location.hostname == this.hostname) {

             var $target = $(this.hash);

             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

             if ($target.length) {

                 var targetOffset = $target.offset().top;

                 $('html,body').animate({scrollTop: targetOffset}, 1000);

                 return false;

            }

       }    

   });
   
   // thumbnail scrollable
        $("#thumbnails").scrollable({size: 5, clickable: false})
                .find("img").each(function(index) {

  // thumbnail images trigger the overlay
        $(this).overlay({

        effect: 'apple',
        target: '#box',
        mask: { maskId: 'mask' },

  // when box is opened, scroll to correct position (in 0 seconds)
        onLoad: function() {
        $("#images").data("scrollable").seekTo(index, 0);
        }
        });
        });
  
    // scrollable inside the box.
        $("#images").scrollable();

    // enable tooltips for the images
        $("#images img").tooltip({
        position: "bottom center",
        offset: [-75, -30],
        opacity: 0.8,
        effect: 'fade',

  // position tooltips relative to the parent scrollable
        relative: true
        });
    
    // enable reflections
        $("#thumbnails img").reflect({height: 0.5, opacity: 0.6});

});

/*
 * Escribir contenido din&aacute;mico del Footer 
 */

 function iniciaFooter(){
        var d = new Date();
        $("#footerTxt").html("&copy; AIESEC | IPN 2011 - " + d.getFullYear() + ". Todos los derechos reservados.");
    }

function iniciaFooterEn(){
        var d = new Date();
        $("#footerTxt").html("&copy; AIESEC | IPN 2011 - " + d.getFullYear() + ". All rights reserved.");
    }