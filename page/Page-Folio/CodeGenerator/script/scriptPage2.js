document.addEventListener("DOMContentLoaded", function () {

    // crée les constante pourt tout les élément a utiliser/modifier

        //les effet généraux
    const checkbox_Id = document.getElementById("checkboxId_page3");
    const checkbox_Class = document.getElementById("checkboxClass_page3");
    const hover_Color = document.getElementById("checkboxHover_page3");
    const disabled_Color = document.getElementById("disabledColor_page3");
    const standard_color = document.getElementById("standard-color_page3");
    const Hover_color_value = document.getElementById("hover-color_page3");

        //les effet de texte normal
    const checkbox_bold = document.getElementById("chexboxBold");
    const checkbox_Oblique = document.getElementById("chexboxOblique");
    const checkbox_Underline = document.getElementById("chexboxUnderline");
    const checkbox_Overline = document.getElementById("chexboxOverline");
    const checkbox_line_through = document.getElementById("chexboxline-through");

        //les effet de texte en hover
    const checkbox_hover_bold = document.getElementById("chexboxHoverBold");
    const checkbox_hover_Oblique = document.getElementById("chexboxHoverOblique");
    const checkbox_hover_Underline = document.getElementById("chexboxHoverUnderline");
    const checkbox_hover_Overline = document.getElementById("chexboxHoverOverline");
    const checkbox_hover_line_through = document.getElementById("chexboxHoverline-through");

        //les checkbox d'activation des range dans l'effet de texte et effet de texte hover
    const activation_letter_Range = document.getElementById("activation_letter-Range");
    const activation_word_Range = document.getElementById("activation_word-Range");
    const hover_activation_letter_Range = document.getElementById("hover_activation_letter-Range");
    const hover_activation_word_Range = document.getElementById("hover_activation_word-Range");

        //les range en question
    const letter_Range = document.getElementById("letter-Range");
    const word_Range = document.getElementById("word-Range");
    const hover_letter_Range = document.getElementById("hover_letter-Range");
    const hover_word_Range = document.getElementById("hover_word-Range");

        //les valeur en pixel a coté des range
    const Text_letter_Range = document.getElementById("Text_letter-Range");
    const Text_word_Range = document.getElementById("Text_word-Range");
    const Text_hover_letter_Range = document.getElementById("Text_hover_letter-Range");
    const Text_hover_word_Range = document.getElementById("Text_hover_word-Range");


    // Ajoutez un gestionnaire d'événements au changement de la case "checkboxClass"
    checkbox_Class.addEventListener("change", function () {
        if (this.checked) {
            checkbox_Id.checked = false;
        }
    });
  
      checkbox_Id.addEventListener("change", function () {
        if (this.checked) {
            checkbox_Class.checked = false;
        }
    });
    
    
    //active les menu si la checkbox hover te coché ou non
    hover_Color.addEventListener("change", function () {
        if (this.checked) {
            //active la couleur hover dans colorisation
            disabled_Color.style.color = 'white';
            document.getElementById("hover-color_page3").disabled = false;

            //active le menu 4
            document.getElementById("menu4").style.background = "#0060c6";
            document.getElementById("sous-menu4").style.background = "rgba(0, 0, 0, 0.7)";
            document.getElementById("sous-menu4").style.color = "#f9f9fa";
            document.getElementById("TextMenu4").style.color = "#f9f9fa";

            checkbox_hover_bold.disabled = false;
            checkbox_hover_Oblique.disabled = false;
            checkbox_hover_Underline.disabled = false;
            checkbox_hover_Overline.disabled = false;
            checkbox_hover_line_through.disabled = false; 

            hover_activation_letter_Range.disabled = false;
            hover_activation_word_Range.disabled = false;

        }else{
            //désactive la couleur hover dans colorisation
            disabled_Color.style.color = 'rgba(189, 189, 189, 0.5)'
            document.getElementById("hover-color_page3").disabled = true;

            //désactive le menu 4
            document.getElementById("menu4").style.background = "rgba(87, 116, 146, 0.7)";
            document.getElementById("sous-menu4").style.background = "rgba(54, 54, 54, 0.7)";
            document.getElementById("sous-menu4").style.color = "#a1a1a1";
            document.getElementById("TextMenu4").style.color = "#a1a1a1";

            checkbox_hover_bold.disabled = true;
            checkbox_hover_Oblique.disabled = true;
            checkbox_hover_Underline.disabled = true;
            checkbox_hover_Overline.disabled = true;
            checkbox_hover_line_through.disabled = true;

            hover_activation_letter_Range.disabled = true;
            hover_activation_word_Range.disabled = true;

        }
    });

    //activation des renge en fonction de la checkbox

        //première range
    activation_letter_Range.addEventListener("change", function () {
        if (this.checked) {
            letter_Range.disabled = false;
        }else{
            letter_Range.disabled = true;
        }
    });
        //deuxième range
    activation_word_Range.addEventListener("change", function () {
        if (this.checked) {
            word_Range.disabled = false;
        }else{
            word_Range.disabled = true;
        }
    });
        //troisième range
    hover_activation_letter_Range.addEventListener("change", function () {
        if (this.checked) {
            hover_letter_Range.disabled = false;
        }else{
            hover_letter_Range.disabled = true;
        }
    });
        //quatrième range
    hover_activation_word_Range.addEventListener("change", function () {
        if (this.checked) {
            hover_word_Range.disabled = false;
        }else{
            hover_word_Range.disabled = true;
        }
    });


    //mettre a jour la valeur en pixel a coté de la range

    letter_Range.addEventListener('input', function(){

        Text_letter_Range.textContent = letter_Range.value.toString() + 'px';
    
    });

    word_Range.addEventListener('input', function(){

        Text_word_Range.textContent = word_Range.value.toString() + 'px';
    
    });

    hover_letter_Range.addEventListener('input', function(){

        Text_hover_letter_Range.textContent = hover_letter_Range.value.toString() + 'px';
    
    });

    hover_word_Range.addEventListener('input', function(){

        Text_hover_word_Range.textContent = hover_word_Range.value.toString() + 'px';
    
    });
    

    //génération du code 

    //toute les lignes du générateur
    const P2_Ligne1 = document.getElementById('P2-Ligne1');
    const P2_Ligne2 = document.getElementById('P2-Ligne2');
    const P2_Ligne3 = document.getElementById('P2-Ligne3');
    const P2_Ligne4 = document.getElementById('P2-Ligne4');
    const P2_Ligne5 = document.getElementById('P2-Ligne5');
    const P2_Ligne6 = document.getElementById('P2-Ligne6');
    const P2_Ligne7 = document.getElementById('P2-Ligne7');
    const P2_Ligne8 = document.getElementById('P2-Ligne8');
    const P2_Ligne9 = document.getElementById('P2-Ligne9');
    const P2_Ligne10 = document.getElementById('P2-Ligne10');
    const P2_Ligne11 = document.getElementById('P2-Ligne11');
    const P2_Ligne12 = document.getElementById('P2-Ligne12');
    const P2_Ligne13 = document.getElementById('P2-Ligne13');
    const P2_Ligne14 = document.getElementById('P2-Ligne14');
    const P2_Ligne15 = document.getElementById('P2-Ligne15');
    const P2_Ligne16 = document.getElementById('P2-Ligne16');
    
    // Sélectionnez les éléments de case à cocher et autre input par leur ID
    const textbox_custo = document.getElementById('textbox_custo');
    const point = '.'
    const diez = '#'
    
    // Initialisez une variable pour stocker le choix
    let choix = '';
    let NoName = '<span class="blancYellow">Name</span>'
    let choix2 = '<span class="blancYellow">#</span>';

    //le texte pour voire visuyellement le modification
    const Rendu = document.getElementById('rendu');



    //ligne 1

    checkbox_Id.addEventListener("change", function() {
        if (this.checked) {
            choix = '<span class="blancYellow">#' + NoName + '</span><span class="blancYellow"> {</span>';
        } else {
            choix = '';
        }
        P2_Ligne1.innerHTML = choix;
        choix2 = diez;
    });
    
    checkbox_Class.addEventListener("change", function() {
        if (this.checked) {
            choix = '<span class="blancYellow">.' + NoName + '</span><span class="blancYellow"> {</span>';
        } else {
            choix = '';
        }
        P2_Ligne1.innerHTML = choix;
        choix2 = point;
    });
    
    textbox_custo.addEventListener("input", function() {
        NoName = '<span class="blancYellow">' + this.value + '</span>';
    
        if (NoName === '') {
            NoName = '<span class="blancYellow">Name</span>';
        }
    
        P2_Ligne1.innerHTML = '<span class="blancYellow">' + choix2 + NoName + '{</span>';
    });

    //ligne 2
    
    standard_color.addEventListener("input", function () {

        P2_Ligne2.innerHTML = `<span>&emsp;</span><span class="Bleu">color</span>: <span class="orange">${standard_color.value}</span>;`;
        Rendu.style.color = standard_color.value;

    });

    //ligne 3
    
    checkbox_bold.addEventListener("change", function () {
        if (this.checked) {
            P2_Ligne3.innerHTML = `<span>&emsp;</span><span class="Bleu">font-weight</span>: <span class="orange">Bold</span>;`;
            Rendu.style.fontWeight = 'bold'
        } else {
            P2_Ligne3.innerHTML = ""
            Rendu.style.fontWeight = 'normal'
        }
    
    });

    //ligne 4
    
    checkbox_Oblique.addEventListener("change", function () {
        if (this.checked) {
            P2_Ligne4.innerHTML = `<span>&emsp;</span><span class="Bleu">font-style</span>: <span class="orange">oblique</span>;`;
            Rendu.style.fontStyle = 'oblique'
        } else {
            P2_Ligne4.innerHTML = ''
            Rendu.style.fontStyle = 'normal'
        }
    
    });



    // Ligne 5

    let Overline = '', Underline = '', line_through = '';
    let styles = '';

    // Fonction de mise à jour du style basé sur les cases à cocher
    function updateLigne5() {
        Overline = checkbox_Overline.checked ? 'overline' : '';
        Underline = checkbox_Underline.checked ? 'underline' : '';
        line_through = checkbox_line_through.checked ? 'line-through' : '';

        styles = [Underline, Overline, line_through].filter(Boolean).join(' ');

        // Mise à jour de P2_Ligne5 avec les balises HTML
        let displayStyles = [Underline, Overline, line_through].filter(Boolean).map(style => `<span class="orange">${style}</span>`).join(' ');

        P2_Ligne5.innerHTML = displayStyles ? `<span>&emsp;</span><span class="Bleu">text-decoration</span>: ${displayStyles};` : '';

        // Mise à jour du style de Rendu avec les valeurs textuelles
        Rendu.style.textDecoration = styles;
    }

    // Ajout des écouteurs d'événements pour les cases à cocher
    checkbox_Overline.addEventListener("change", updateLigne5);
    checkbox_Underline.addEventListener("change", updateLigne5);
    checkbox_line_through.addEventListener("change", updateLigne5);



    //Ligne 6

    function updateLigne6() {
        if (activation_letter_Range.checked) {
            P2_Ligne6.innerHTML = `<span>&emsp;</span><span class="Bleu">letter-spacing</span>: <span class="vertClaire"> ${Text_letter_Range.textContent}</span>;`;
            Rendu.style.letterSpacing = letter_Range.value + 'px';
        } else {
            P2_Ligne6.innerHTML = ""
            Rendu.style.letterSpacing = ""
        }
    };

    activation_letter_Range.addEventListener("change", updateLigne6);
    letter_Range.addEventListener("input", updateLigne6);



    //Ligne 7

    function updateLigne7() {
        if (activation_word_Range.checked) {
            P2_Ligne7.innerHTML = `<span>&emsp;</span><span class="Bleu">word-spacing</span>: <span class="vertClaire"> ${Text_word_Range.textContent}</span>;`;
            Rendu.style.wordSpacing = word_Range.value + 'px';
        } else {
            P2_Ligne7.innerHTML = ""
            Rendu.style.wordSpacing = ""
        }
    };

    activation_word_Range.addEventListener("change", updateLigne7);
    word_Range.addEventListener("input", updateLigne7);


    //la ligne 8 n'a pas de code


    //Ligne 9 a 16

    hover_Color.addEventListener("change", function() {
        if (hover_Color.checked) {
            P2_Ligne9.innerHTML = `<span class="blancYellow">${choix2}${NoName}:hover</span> <span class="blancYellow">{</span>`;
            P2_Ligne10.innerHTML = `<span>&emsp;</span><span class="Bleu">color</span>: <span class="orange">${Hover_color_value.value}</span>;`
            P2_Ligne16.innerHTML = `<span class="blancYellow">}</span>`

        //ligne 9

            function updateLigne9() {
                P2_Ligne9.innerHTML = `<span class="blancYellow">${choix2}${NoName}:hover</span> <span class="blancYellow">{</span>`;
            };

            textbox_custo.addEventListener("input", updateLigne9);
            checkbox_Class.addEventListener("change", updateLigne9);
            checkbox_Id.addEventListener("change", updateLigne9);

        //ligne 10
            function updateLigne10() {
                P2_Ligne10.innerHTML = `<span>&emsp;</span><span class="Bleu">color</span>: <span class="orange">${Hover_color_value.value}</span>;`
            };

            Rendu.addEventListener('mouseenter', () => {
                Rendu.style.color = Hover_color_value.value; // Appliquer le style hover
            });
            
            Rendu.addEventListener('mouseleave', () => {
                Rendu.style.color = standard_color.value; // Supprimer le style hover
            });

            Hover_color_value.addEventListener("input", updateLigne10);


        //ligne 11
    
        checkbox_hover_bold.addEventListener("change", function () {
            if (this.checked) {
                P2_Ligne11.innerHTML = `<span>&emsp;</span><span class="Bleu">font-weight</span>: <span class="orange">Bold</span>;`;
                Rendu.addEventListener('mouseenter', () => {
                    Rendu.style.fontWeight = 'bold' 
                });
                
                Rendu.addEventListener('mouseleave', () => {
                    Rendu.style.fontWeight = 'normal'
                });
            } else {
                P2_Ligne11.innerHTML = ""
            }
        });

        //ligne 12
    
        checkbox_hover_Oblique.addEventListener("change", function () {
            if (this.checked) {
                P2_Ligne12.innerHTML = `<span>&emsp;</span><span class="Bleu">font-style</span>: <span class="orange">oblique</span>;`;
                Rendu.addEventListener('mouseenter', () => {
                    Rendu.style.fontStyle = 'oblique' 
                });
                
                Rendu.addEventListener('mouseleave', () => {
                    Rendu.style.fontStyle = 'normal'
                });
            } else {
                P2_Ligne12.innerHTML = ''
            }
        
        });


        // Ligne 13

        // Définition des variables pour les styles de décoration
        let hoverStyles = '';

        // Fonction pour mettre à jour les styles de décoration
        function updateLigne13() {
            let Overline = checkbox_hover_Overline.checked ? 'overline' : '';
            let Underline = checkbox_hover_Underline.checked ? 'underline' : '';
            let line_through = checkbox_hover_line_through.checked ? 'line-through' : '';

            hoverStyles = [Underline, Overline, line_through].filter(Boolean).join(' ');

            // Mise à jour visuelle dans P2_Ligne13 avec balises HTML
            let displayStyles = [Underline, Overline, line_through].filter(Boolean).map(style => `<span class="orange">${style}</span>`).join(' ');

            P2_Ligne13.innerHTML = displayStyles ? `<span>&emsp;</span><span class="Bleu">text-decoration</span>: ${displayStyles};` : '';
        }

        // Événements de changement pour les cases à cocher
        checkbox_hover_Overline.addEventListener("change", updateLigne13);
        checkbox_hover_Underline.addEventListener("change", updateLigne13);
        checkbox_hover_line_through.addEventListener("change", updateLigne13);

        // Événements de survol pour l'élément Rendu
        Rendu.addEventListener('mouseenter', () => {
            Rendu.style.textDecoration = hoverStyles;
        });

        Rendu.addEventListener('mouseleave', () => {
            Rendu.style.textDecoration = styles;
        });



        //Ligne 14

        function updateLigne14() {
            if (hover_activation_letter_Range.checked) {
                P2_Ligne14.innerHTML = `<span>&emsp;</span><span class="Bleu">letter-spacing</span>: <span class="vertClaire"> ${Text_hover_letter_Range.textContent}</span>;`;
                Rendu.addEventListener('mouseenter', () => {
                    Rendu.style.letterSpacing = hover_letter_Range.value + 'px';
                });
                
                Rendu.addEventListener('mouseleave', () => {
                    Rendu.style.letterSpacing = letter_Range.value + 'px';
                });
            } else {
                P2_Ligne14.innerHTML = ""
            }
        };

        hover_activation_letter_Range.addEventListener("change", updateLigne14);
        hover_letter_Range.addEventListener("input", updateLigne14);



        //Ligne 15

        function updateLigne15() {
            if (hover_activation_word_Range.checked) {
                P2_Ligne15.innerHTML = `<span>&emsp;</span><span class="Bleu">word-spacing</span>: <span class="vertClaire"> ${Text_hover_word_Range.textContent}</span>;`;
                Rendu.addEventListener('mouseenter', () => {
                    Rendu.style.wordSpacing = hover_word_Range.value + 'px';
                });
                
                Rendu.addEventListener('mouseleave', () => {
                    Rendu.style.wordSpacing = word_Range.value + 'px';
                });
                
            } else {
                P2_Ligne15.innerHTML = ""
            }
        };

        hover_activation_word_Range.addEventListener("change", updateLigne15);
        hover_word_Range.addEventListener("input", updateLigne15);

            
        } else {
            P2_Ligne9.textContent = '';
            P2_Ligne10.textContent = '';
            P2_Ligne11.textContent = '';
            P2_Ligne12.textContent = '';
            P2_Ligne13.textContent = '';
            P2_Ligne14.textContent = '';
            P2_Ligne15.textContent = '';
            P2_Ligne16.textContent = '';
        }
    });

    const copierBouton = document.getElementById('Copy_Button');

    copierBouton.addEventListener('click', function() {
        // Fonction pour nettoyer le texte des caractères invisibles
        function cleanText(text) {
            // Remplacez les espaces insécables (Unicode 0x00A0) par des espaces réguliers
            return text.replace(/\u00A0/g, ' ').trim();
        }
    
        // Fonction pour retirer une tabulation si présente au début de la ligne
        function removeLeadingTab(line) {
            return line.startsWith('\t') ? line.substring(2) : line;
        }
    
        // Récupérez et nettoyez le contenu textuel de toutes les lignes
        const lignes = [
            cleanText(P2_Ligne1.textContent),
            cleanText(P2_Ligne2.textContent),
            cleanText(P2_Ligne3.textContent),
            cleanText(P2_Ligne4.textContent),
            cleanText(P2_Ligne5.textContent),
            cleanText(P2_Ligne6.textContent),
            cleanText(P2_Ligne7.textContent),
            cleanText(P2_Ligne8.textContent),
            cleanText(P2_Ligne9.textContent),
            cleanText(P2_Ligne10.textContent),
            cleanText(P2_Ligne11.textContent),
            cleanText(P2_Ligne12.textContent),
            cleanText(P2_Ligne13.textContent),
            cleanText(P2_Ligne14.textContent),
            cleanText(P2_Ligne15.textContent),
            cleanText(P2_Ligne16.textContent)
        ];
    
        // Retirez une tabulation des lignes spécifiques (P2_Ligne8, P2_Ligne9, P2_Ligne16)
        const formattedLines = lignes.map((line, index) => {
            if ([7, 8, 15].includes(index)) { // Lignes 8, 9 et 16
                return removeLeadingTab(line);
            } else {
                return line;
            }
        }).filter(line => line !== ''); // Filtrer les lignes vides
    
        // Concaténez le contenu textuel des lignes
        const resultat = formattedLines.join('\n');
    
        // Copiez le résultat dans le presse-papiers
        navigator.clipboard.writeText(resultat).then(() => {
            console.log("Texte Copier !");
        }).catch(err => {
            console.error('Erreur lors de la copie : ', err);
        });
    });
    
    const Confirmation = document.getElementById('Confirmation2')
    
    copierBouton.addEventListener('click', () => {
        
        Confirmation.style.opacity = 1;
        
        setTimeout(function() {
            Confirmation.style.opacity = 0;
        }, 1500);
    });
    
    const textbox_rendu = document.getElementById('textbox_rendu')

    textbox_rendu.addEventListener('input', () => {

        Rendu.innerHTML = textbox_rendu.value;

    });
    
    
    


    

})


