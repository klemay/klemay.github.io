/*enable toggle for nav*/
$(document).on('click','.navbar-collapse',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});

/*make navbar-toggler white on scroll
 */
function checkScroll(){
    var startY = $('.header').height();

    if($(window).scrollTop() > startY){
        $('.navbar-toggler').addClass("scrolled");

    }else{
        $('.navbar-toggler').removeClass("scrolled");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });

}
/*scroll slowly from hero to about and from footer to top*/
function scrollToAnchor(aid){
    event.preventDefault(); 
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$("#heroLink").click(function() {
   scrollToAnchor('about');
});
 $("#bottomLink").click(function() {
   scrollToAnchor('top');
 });
