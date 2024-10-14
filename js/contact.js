document.addEventListener("DOMContentLoaded", function () {

//case de consentement
$(document).ready(function() {
    var checkbox = $('.checkbox_rgpd');
    var button = $('.btn');
  
    // Fonction de désactivation du bouton
    function disableButton() {
      button.prop('disabled', true);
      button.css('background-color', 'grey');
    }
  
    // Exécuter la fonction de désactivation si la case n'est pas cochée au chargement de la page
    if(!checkbox.prop('checked')) {
      disableButton();
    }
  
    // Exécuter la fonction de désactivation du bouton à chaque changement d'état de la case
    checkbox.change(function() {
      if(!$(this).prop('checked')) {
        disableButton();
      } else {
        button.prop('disabled', false);
        button.css('background-color', '#687786');
      }
    });
  });
  
  
  
  //fonctionnaliter des blockage de caractère a 630 et 
  //fonctionnaliter de comptage de carctère en bas a droite du texte 
  
  let textLength = 0;
  let currentLength = "";
  const textarea = document.getElementById("myTextarea");
  const charCount = document.getElementById('char-count');
  const maxChars = 630;
  
  textarea.addEventListener('input', () => {
    textLength = textarea.value.length;
    charCount.textContent = `${textLength}/${maxChars}`;
  });
  
  textarea.addEventListener("input", () => {
    const maxLength = 630;
    const text = textarea.value;
    const remainingChars =  maxLength - textLength ;
    
    if (currentLength > maxLength) {
      textarea.value = textarea.value.slice(0, maxLength);
    }
  
    if (remainingChars == 0) {
      charCount.style.color = 'red';
    } else {
      charCount.style.color = 'gray';
    }
  
  });
  
});