$(document).ready(function(){
    // Creating Toggle Button
    let NavLinksContainer   = $('.pages-links');
    let toggleOpen          = $('#toggleNav') ;
    let toggleClose         = $('#closeBtn');

    $(toggleOpen).on('click' , function(e){
        e.preventDefault();
        NavLinksContainer.fadeIn();
       
    })
    $(toggleClose).on('click' , function(e){
        e.preventDefault();
        NavLinksContainer.fadeOut();
       
    })
});