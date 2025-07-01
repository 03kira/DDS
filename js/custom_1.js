jQuery(document).ready( function(){	
	// accordion
    jQuery('.accordion-box .acc-content').hide();
    jQuery('.accordion-box h2:first').addClass('active').next().show();
    jQuery('.accordion-box h2').click(function(){
        if( jQuery(this).next().is(':hidden') ) {
            jQuery('.accordion-box h2').removeClass('active').next().slideUp();
            jQuery(this).toggleClass('active').next().slideDown();
        }
        return false; // Prevent the browser jump to the link anchor
    });
	
	// Tabs
	jQuery('ul.tabs > br').remove();
	jQuery('.tabs-wrapper').append(jQuery('.tabs li div'));
	jQuery('.tabs li:first a').addClass('defaulttab selected');
	jQuery('.tabs a').click(function(){
		switch_tabs(jQuery(this));
	});
	switch_tabs(jQuery('.defaulttab'));
	function switch_tabs(obj) {
		jQuery('.tab-content').hide();
		jQuery('.tabs a').removeClass("selected");
		var id = obj.attr("rel");
		jQuery('#'+id).show();
		obj.addClass("selected");
	}

	// Content Toggle
    jQuery(".slide_toggle_content").hide();
	    jQuery('h3.slide_toggle').click(function(){
        if( jQuery(this).next().is(':hidden') ) {
            jQuery('h3.slide_toggle').removeClass('active').next().slideUp();
            jQuery(this).toggleClass('active').next().slideDown();
        }
        return false; // Prevent the browser jump to the link anchor
    }); 

});
 
jQuery(document).ready(function() {
  	jQuery('.srchicon').click(function() {
			jQuery('.searchtop').toggle();
			jQuery('.topsocial').toggle();
		});	
});

// skill bar script
jQuery(document).ready(function() {
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});

jQuery(document).ready(function(){
	// hide #back-top first
	jQuery("#back-top").hide();	
	// fade in #back-top
	jQuery(function () {
		jQuery(window).scroll(function () {
			if (jQuery(this).scrollTop() > 0) {
				jQuery('#back-top').fadeIn();
			} else {
				jQuery('#back-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		jQuery('#back-top').click(function () {
			jQuery('body,html').animate({
				scrollTop: 0
			}, 500);
			return false;
		});
	});

});

jQuery(document).ready(function( jQuery ) {
	jQuery('.counter').counterUp({
		delay: 10,
		time: 1000
	});
});

jQuery(document).ready(function() {
        jQuery('.sixcirclecolumn h4 a, .footer h5.ftlogo').each(function(index, element) {
            var heading = jQuery(element);
            var word_array, last_word, first_part;
            word_array = heading.html().split(/\s+/); // split on spaces
            last_word = word_array.pop();             // pop the last word
            first_part = word_array.join(' ');        // rejoin the first words together
            heading.html([first_part, ' <span>', last_word, '</span>'].join(''));
        });
});

jQuery(document).ready(function() {
	jQuery('.show-date').each(function () {
	  var cal = jQuery(this); 
	  var texts = jQuery(this).text().split(" ");
	  cal.empty();                   
	  jQuery.each(texts,function (i, text) {
		cal.append('<span class="' + (i == 1 ? "eventdate" : "year") + '" >'+text+'</span>');
	  });
	});
});


// video popup jQuery
jQuery(document).ready(function( jQuery ) {
     	jQuery(".youtube-link").grtyoutube({
		autoPlay:true,
		theme: "dark"
	});
  }); 
  


jQuery(document).ready(function() { 
  jQuery('.clientlogos').owlCarousel({
    loop:true,
	autoplay:false,
    margin:25,
    nav:true,
	dots: false,
	navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
	responsive:{
			0:{
				items:1
			},
			420:{
				items:2
			},
			768:{
				items:3
			},
			800:{
				items:3
			},
			1170:{
				items:4
			}
		}
	})
});


jQuery(window).load(function(){
	jQuery( ".woocommerce ul.products li.product img").wrap("<div class='product-thumb'></div>" );
//	jQuery('.woocommerce ul.products li.product').find('.product-thumb').prepend('<i class="fas fa-eye fa-2x"></i>');
});




/* Start Counter */
function CountDownTimer(a,b){function i(){var a=new Date,i=c-a;if(i<0)return clearInterval(h),void(document.getElementById(b).innerHTML="EXPIRED!");var j=Math.floor(i/g),k=Math.floor(i%g/f),l=Math.floor(i%f/e),m=Math.floor(i%e/d);document.getElementById(b).innerHTML='<div class="counter-column"><span>'+j+"</span>Days</div>",document.getElementById(b).innerHTML+='<div class="counter-column"><span>'+k+"</span>Hours</div>",document.getElementById(b).innerHTML+='<div class="counter-column"><span>'+l+"</span>Minutes</div>",document.getElementById(b).innerHTML+='<div class="counter-column"><span>'+m+"</span>Seconds</div>"}var h,c=new Date(a),d=1e3,e=60*d,f=60*e,g=24*f;h=setInterval(i,1e3)}
/* End Counter */