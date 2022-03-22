// JavaScript Document

$(document).ready(function(){
	$('.carousel').carousel({
		interval:6000
		
		
	});
	$("#gear").click(function(){
		$("#box").fadeToggle(1000);
		
	});
	
	//Change Theme Color 
	var colorLi = 	$(".color-option ul li");

	colorLi
	.eq(0).css("backgroundColor","#e41b17").end()
	.eq(1).css("backgroundColor","#1785e4").end()
	.eq(2).css("backgroundColor","#9e61ff").end()
	.eq(3).css("backgroundColor","#198754").end()
	.eq(4).css("backgroundColor","#ffc107");

	colorLi.click(function(){
		$("link[href*='theam']").attr("href",$(this).attr("data-value"));
		//console.log($(this).attr("data-value"))
	});
	$('.navbar-nav .nav-item a').click(function(e) {

        $('.navbar-nav .nav-item a').removeClass('active');

        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
        //e.preventDefault();
    });


	
});


