document.addEventListener("DOMContentLoaded", function () {

    const returnButton = document.getElementById('return-CV-Button');
    const faSolid = document.getElementById('fa-solid');


    returnButton.addEventListener("click", function (){

        window.location.href = '../../../page/Porte-Folio.html';

    });

    returnButton.addEventListener('mouseover', () => {
        faSolid.style.animation = 'arrow_return 0.51s forwards';
    });
      
    returnButton.addEventListener('mouseout', () => {
        faSolid.style.animation = 'arrow_return_bis 0.51s forwards';
    });
});