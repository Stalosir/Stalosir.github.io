
document.addEventListener("DOMContentLoaded", function () {
    $('.m-nav').click(function(e){
        e.preventDefault();
        if($('.m-right').hasClass('is-open')){ 
            $('.m-right').removeClass('is-open');
        } else {//condition pour ajouter ou retiré la class .is-open a .m-rignt du header
            $('.m-right').addClass('is-open');
        }

        if($('.m-nav').hasClass('is-open')){
            $('.m-nav').removeClass('is-open');
        } else {//condition pour ajouter ou retiré la class .is-open a .m-nav du header
            $('.m-nav').addClass('is-open');
        }
    })
});