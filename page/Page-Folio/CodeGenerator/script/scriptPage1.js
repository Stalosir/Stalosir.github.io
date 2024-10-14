document.addEventListener("DOMContentLoaded", function () {

    // Sélectionnez les deux cases à cocher par leur ID
    const checkboxId = document.getElementById("checkboxId");
    const checkboxClass = document.getElementById("checkboxClass");
    const hoverColor = document.getElementById("checkboxHover");
    const disabledColor = document.getElementById("disabledColor");
    
    // Ajoutez un gestionnaire d'événements au changement de la case "checkboxClass"
    checkboxClass.addEventListener("change", function () {
    if (this.checked) {
            checkboxId.checked = false;
        }
        });
    
        checkboxId.addEventListener("change", function () {
        if (this.checked) {
            checkboxClass.checked = false;
        }
        });
    
        hoverColor.addEventListener("change", function () {
        if (this.checked) {
            disabledColor.style.color = 'white';
            document.getElementById("hover-color").disabled = false;
        }else{
            disabledColor.style.color = 'rgba(189, 189, 189, 0.5)'
            document.getElementById("hover-color").disabled = true;
        }
    });
    
    
    
    
    // Sélectionnez tous les éléments avec la classe "lierLesText"
    const lierLesTextElements = document.querySelectorAll('.lierLesText');
    
    // Sélectionnez les champs d'entrée par leur ID
    const hautDroitInput = document.getElementById('hautDroit');
    const basGaucheInput = document.getElementById('basGauche');
    const basDroitInput = document.getElementById('basDroit');
    
    const HDro = document.getElementById('HDro');
    const HGau = document.getElementById('HGau');
    const BDro = document.getElementById('BDro');
    const BGau = document.getElementById('BGau');
    
    let CoordinationValeur = false;
    
    // Parcourez tous les éléments
    lierLesTextElements.forEach(element => {
        // Sélectionnez l'élément <p> avec la classe "TextLier" dans le conteneur
        const texteLier = element.querySelector('.TextLier');
    
        // Ajoutez un écouteur d'événements "click" au texte du paragraphe
        texteLier.addEventListener('click', () => {
            // Sélectionnez l'élément <i> dans le même conteneur
            const icone = element.querySelector('i');
    
            // Vérifiez si la classe actuelle de l'icône est "fa-link"
            if (icone.classList.contains('fa-link')) {
                // Si oui, remplacez-la par "fa-link-slash"
                icone.classList.replace('fa-link', 'fa-link-slash');
    
                // Changez le texte du paragraphe en utilisant innerHTML
                texteLier.innerHTML = '<i class="fa-solid fa-link-slash" style="color: #ffffff;"></i> Délier les valeurs';
    
                // Ajoutez une classe "largeur-personnalisee" au conteneur
                element.classList.add('largeur-personnalisee');
                
                // Désactivez les champs d'entrée
                hautDroitInput.disabled = true;
                basGaucheInput.disabled = true;
                basDroitInput.disabled = true;
    
                //impacte le css de la class
                HDro.style.background = 'rgba(189, 189, 189, 0.5)';
                BDro.style.background = 'rgba(189, 189, 189, 0.5)';
                BGau.style.background = 'rgba(189, 189, 189, 0.5)';
    
                CoordinationValeur = true;
    
            } else {
                // Sinon, remplacez-la par "fa-link"
                icone.classList.replace('fa-link-slash', 'fa-link');
    
                // Changez le texte du paragraphe en utilisant innerHTML
                texteLier.innerHTML = '<i class="fa-solid fa-link" style="color: #ffffff;"></i> Lier les valeurs';
    
                // Supprimez la classe "largeur-personnalisee" du conteneur
                element.classList.remove('largeur-personnalisee');
    
                // Réactivez les champs d'entrée
                hautDroitInput.disabled = false;
                basGaucheInput.disabled = false;
                basDroitInput.disabled = false;
    
                HDro.style.background = 'none';
                BDro.style.background = 'none';
                BGau.style.background = 'none';
    
                CoordinationValeur = false;
            }
    
            
        });
    })
    
        const inputText = document.getElementById('hautGauche');
        const inputText2 = document.getElementById('hautDroit');
        const inputText3 = document.getElementById('basGauche');
        const inputText4 = document.getElementById('basDroit');
        
        let valeurInput = "";
        
        inputText.addEventListener('input', function() {
    
            // À chaque modification de l'input, mettez à jour la valeur dans la variable
            valeurInput = inputText.value;
    
            console.log("Nouvelle valeur de l'input :", valeurInput);
    
            if (CoordinationValeur == true){
    
                inputText2.value = valeurInput;
                inputText3.value = valeurInput;
                inputText4.value = valeurInput;
    
            }
        });
        
        const champTexte1 = document.getElementById('hautGauche');
    
    champTexte1.addEventListener('input', function(event) {
        let valeurInput = event.target.value;
        const regexChiffres = /^[0-9]*$/; // Expression régulière pour les chiffres uniquement
    
        if (!regexChiffres.test(valeurInput)) {
            valeurInput = valeurInput.replace(/[^0-9]/g, '');
        }
    
        event.target.value = valeurInput; // Réaffectez la valeur à l'élément d'entrée
    });
    
    // Répétez le même code pour les autres éléments d'entrée (hautDroit, basGauche, basDroit) en les ciblant par leur ID respectif.
    
    const champTexte2 = document.getElementById('hautDroit');
    
    champTexte2.addEventListener('input', function(event) {
        let valeurInput = event.target.value;
        const regexChiffres = /^[0-9]*$/; // Expression régulière pour les chiffres uniquement
    
        if (!regexChiffres.test(valeurInput)) {
            valeurInput = valeurInput.replace(/[^0-9]/g, '');
        }
    
        event.target.value = valeurInput; // Réaffectez la valeur à l'élément d'entrée
    });
    
    const champTexte3 = document.getElementById('basGauche');
    
    champTexte3.addEventListener('input', function(event) {
        const valeurInput = event.target.value;
        const regexChiffres = /^[0-9]*$/; // Expression régulière pour les chiffres uniquement
    
        if (!regexChiffres.test(valeurInput)) {
            event.target.value = valeurInput.replace(/[^0-9]/g, '');
        }
    
        event.target.value = valeurInput;
    });
    
    const champTexte4 = document.getElementById('basGauche');
    
    champTexte4.addEventListener('input', function(event) {
        const valeurInput = event.target.value;
        const regexChiffres = /^[0-9]*$/; // Expression régulière pour les chiffres uniquement
    
        if (!regexChiffres.test(valeurInput)) {
            event.target.value = valeurInput.replace(/[^0-9]/g, '');
        }
    
        event.target.value = valeurInput;
    });
    
    
    
    
    const ModifText = document.getElementById('TextRange');
    const RangeValue = document.getElementById('myRange');
    
    RangeValue.addEventListener('input', function(envent){
    
        const valeurRange = RangeValue.value.toString();
        ModifText.textContent = RangeValue.value;
    
    });
    
    const RangeActiv = document.getElementById('questionBoder');
    const colorBorder = document.getElementById('ColorBordure');
    const gray1 = document.getElementById('TextRange');
    const gray2 = document.getElementById('gray2');
    
    RangeActiv.addEventListener("change", function () {
        // Si la case à cocher est cochée, activez l'input range, sinon désactivez-le
        if (this.checked) {
            colorBorder.disabled = false;
            RangeValue.disabled = false;
    
            gray1.style.color = 'white';
            gray2.style.color = 'white';
        } else {
            colorBorder.disabled = true;
            RangeValue.disabled = true;
            gray1.style.color = 'rgba(189, 189, 189, 0.5)';
            gray2.style.color = 'rgba(189, 189, 189, 0.5)';
        }
    });
    
    const checkbox1 = document.getElementById('checkboxHover');
    const checkbox2 = document.getElementById('questionBoder');
    const BorderHover = document.getElementById('HoverColorBordure');
    const TextBorderHover = document.getElementById('gray3');
    
    
    checkbox1.addEventListener('change', verifierCases);
    checkbox2.addEventListener('change', verifierCases);
    
    function verifierCases() {
        if (checkbox1.checked && checkbox2.checked) {
            BorderHover.style.color = 'white';
            BorderHover.disabled = false;
            BorderHover.title = '';
    
            TextBorderHover.style.color = 'white';
            TextBorderHover.disabled = false;
        } else {
            BorderHover.style.color = 'rgba(189, 189, 189, 0.5)';
            BorderHover.disabled = true;
            BorderHover.title = 'Activé le Hover et la bordure pour avoir accés a ce paramétre'
    
            TextBorderHover.style.color = 'rgba(189, 189, 189, 0.5)';
            TextBorderHover.disabled = true;
        }
    };
    
    
    //toute les lignes du générateur
    const Ligne1 = document.getElementById('Ligne1');
    const Ligne2 = document.getElementById('Ligne2');
    const Ligne3 = document.getElementById('Ligne3');
    const Ligne4 = document.getElementById('Ligne4');
    const Ligne5 = document.getElementById('Ligne5');
    const Ligne6 = document.getElementById('Ligne6');
    const Ligne7 = document.getElementById('Ligne7');
    const Ligne8 = document.getElementById('Ligne8');
    const Ligne9 = document.getElementById('Ligne9');
    const Ligne10 = document.getElementById('Ligne10');
    const Ligne11 = document.getElementById('Ligne11');
    const Ligne12 = document.getElementById('Ligne12');
    const Ligne13 = document.getElementById('Ligne13');
    const Ligne14 = document.getElementById('Ligne14');
    const Ligne15 = document.getElementById('Ligne15');
    const Ligne16 = document.getElementById('Ligne16');
    
    // Sélectionnez les éléments de case à cocher et autre input par leur ID
    const textboxcusto = document.getElementById('textboxcusto');
    const point = '.'
    const diez = '#'
    
    // Initialisez une variable pour stocker le choix
    let choix = '';
    let NoName = '<span class="blancYellow">Name</span>'
    let choix2 = '<span class="blancYellow">#</span>';
    let InputText = document.getElementById('hautGauche');
    let InputText2 = document.getElementById('hautDroit');
    let InputText3 = document.getElementById('basGauche');
    let InputText4 = document.getElementById('basDroit');
    
    
    
    checkboxId.addEventListener("change", function() {
        if (this.checked) {
            choix = '<span class="blancYellow">#' + NoName + '</span><span class="Yellow"> {</span>';
        } else {
            choix = '';
        }
        Ligne1.innerHTML = choix;
        choix2 = diez;
    });
    
    checkboxClass.addEventListener("change", function() {
        if (this.checked) {
            choix = '<span class="blancYellow">.' + NoName + '</span><span class="Yellow"> {</span>';
        } else {
            choix = '';
        }
        Ligne1.innerHTML = choix;
        choix2 = point;
    });
    
    textboxcusto.addEventListener("input", function() {
        NoName = '<span class="blancYellow">' + this.value + '</span>';
    
        if (NoName === '') {
            NoName = '<span class="blancYellow">Name</span>';
        }
    
        Ligne1.innerHTML = '<span class="blancYellow">' + choix2 + NoName + '{</span>';
    });
    
    const colorPicker = document.getElementById('standard-color');
    
    colorPicker.addEventListener('input', function () {
        const selectedColor = colorPicker.value;
    
        Ligne2.innerHTML = `<span>&emsp;</span><span class="Bleu">background-color</span>: <span class="orange">${selectedColor}</span>;`;
    });
    
    
    const Ligne3Element = document.getElementById('Ligne3');
    
    function updateLigne3() {
    
        if (CoordinationValeur === true) {
            Ligne3Element.innerHTML = '<span>&emsp;</span><span class="Bleu">border-radius</span><span class="blanc">:</span><span class="vertClaire"> ' + InputText.value + 'px</span>;';
        } else {
            Ligne3Element.innerHTML = '<span>&emsp;</span><span class="Bleu">border-radius</span>:<span class="vertClaire"> ' + InputText.value + 'px ' + InputText2.value + 'px ' + InputText3.value + 'px ' + InputText4.value + 'px</span>;';
        }
    }
    
    // Ajoutez des écouteurs d'événements "input" à chaque InputText
    InputText.addEventListener('input', updateLigne3);
    InputText2.addEventListener('input', updateLigne3);
    InputText3.addEventListener('input', updateLigne3);
    InputText4.addEventListener('input', updateLigne3);
    let CoordinationValeurBis = true;
    
    function handleCoordinationChange() {
        CoordinationValeurBis = !CoordinationValeur; 
        updateLigne3(); 
    }
    
    const coordinationButton = document.getElementById('lierLesText'); 
    coordinationButton.addEventListener('click', handleCoordinationChange);
    
    //ligne 4
    
    const BoderColorPicker = document.getElementById('ColorBordure');
    
    
    function updateLigne4() {
        const selectedColor = BoderColorPicker.value;
        const rangeSelcte = RangeValue.value;
    
        if (RangeActiv.checked) {
            Ligne4.innerHTML = `<span>&emsp;</span><span class="Bleu">border</span>: <span class="vertClaire">${rangeSelcte}px</span> <span class="orange">solid ${selectedColor}</span>;`;
        } else {
            Ligne4.textContent = ''; // Vide le contenu de Ligne4
        }
    };
    
    RangeActiv.addEventListener('change', updateLigne4)
    RangeValue.addEventListener('input', updateLigne4);
    BoderColorPicker.addEventListener('input', updateLigne4);
    
    
    //Ligne 6
    
    // Sélectionnez la case à cocher "hoverColor"
    
    // Sélectionnez la ligne 6
    
    textboxcusto.addEventListener("input", function() {
        NoName = this.value;
    
        if (NoName === '') {
            NoName = 'Name';
        }
    
        if (hoverColor.checked) {
            Ligne6.innerHTML = `<span class="blancYellow">${choix2}${NoName}:hover</span> <span class="Yellow">{</span>`;
            Ligne7.hidden = false;
            Ligne16.innerHTML = '<span class="blancYellow">}</span>'
        } else {
            Ligne6.textContent = '';
            Ligne7.hidden = true;
            Ligne16.textContent = '';
        }
    });
    
    hoverColor.addEventListener("change", function() {
    
        if (hoverColor.checked) {
            Ligne6.innerHTML = `<span class="blancYellow">${choix2}${NoName}:hover</span> <span class="Yellow">{</span>`;
            Ligne7.hidden = false;
            Ligne16.innerHTML = '<span class="blancYellow">}</span>'
        } else {
            Ligne6.textContent = '';
            Ligne7.hidden = true;
            Ligne16.textContent = '';
        }
    });
    
    checkboxClass.addEventListener("input", function() {
    
        if (hoverColor.checked) {
            Ligne6.innerHTML = `<span class="blancYellow">.${NoName}:hover</span> <span class="Yellow">{</span>`;
            Ligne7.hidden = false;
            Ligne16.innerHTML = '<span class="blancYellow">}</span>'
        } else {
            Ligne6.textContent = '';
            Ligne7.hidden = true;
            Ligne16.textContent = '';
        }
    });
    checkboxId.addEventListener("input", function() {
    
        if (hoverColor.checked) {
            Ligne6.innerHTML = `<span class="blancYellow">#${NoName}:hover</span> <span class="Yellow">{</span>`;
            Ligne7.hidden = false;
            Ligne16.innerHTML = '<span class="Yellow">}</span>'
        } else {
            Ligne6.textContent = '';
            Ligne7.hidden = true;
            Ligne16.textContent = '';
        }
    });
    
    
    //ligne 7
    
    const HovercolorPicker = document.getElementById('hover-color');
    
    HovercolorPicker.addEventListener('input', function () {
        const selectedColor = HovercolorPicker.value;
    
        Ligne7.innerHTML = `<span>&emsp;</span><span class="Bleu">background-color</span>: <span class="orange">${selectedColor}</span>;`;
    });
    
    
    //Ligne 8
    
    const BoderColorPickerHover = document.getElementById('HoverColorBordure');
    
    
    function updateLigne8() {
        const selectedColor = BoderColorPickerHover.value;
        const rangeSelcte = RangeValue.value;
    
        if (checkbox1.checked && checkbox2.checked) {
            Ligne8.innerHTML = `<span>&emsp;</span><span class="Bleu">border</span>: <span class="vertClaire">${rangeSelcte}px</span> <span class="orange">solid ${selectedColor}</span>;`;
            Ligne8.hidden = false;
        } else {
            Ligne8.textContent = ''; // Vide le contenu de Ligne8
            Ligne8.hidden = true;
        }
    };
    
    RangeActiv.addEventListener('change', updateLigne8)
    RangeValue.addEventListener('input', updateLigne8, updateVisuelle);
    BoderColorPickerHover.addEventListener('input', updateLigne8);
    
    
    
    // Sélectionnez l'élément de bouton par son ID
    const copierBouton = document.getElementById('CopyButton');
    
    window.addEventListener('change', updateCopy, updateVisuelle)
    let contenuAvecDisposition = 
        `${Ligne1.textContent}
        ${Ligne2.textContent}
        ${Ligne3.textContent}
        ${Ligne5.textContent}`
    
    function updateCopy() {
    
        //Le code Only :Hover
        if(checkbox1.checked && !checkbox2.checked){
    
            contenuAvecDisposition = 
            
            `${Ligne1.textContent}
            ${Ligne2.textContent}
            ${Ligne3.textContent}
            ${Ligne5.textContent}
            ${Ligne6.textContent}
            ${Ligne7.textContent}
            ${Ligne16.textContent}`
        }
    
        //le code Only Bordure
        if(checkbox2.checked && !checkbox1.checked){
    
            contenuAvecDisposition = 
            
            `${Ligne1.textContent}
            ${Ligne2.textContent}
            ${Ligne3.textContent}
            ${Ligne4.textContent}
            ${Ligne5.textContent}`
        }
    
        //LA TOTAL COPYER
        if(checkbox1.checked && checkbox2.checked){
            
            contenuAvecDisposition = 
            
            `${Ligne1.textContent}
            ${Ligne2.textContent}
            ${Ligne3.textContent}
            ${Ligne4.textContent}
            ${Ligne5.textContent}
            ${Ligne6.textContent}
            ${Ligne7.textContent}
            ${Ligne8.textContent}
            ${Ligne16.textContent}`
        }
        
    }
    
    const Confirmation = document.getElementById('Confirmation')
    
    copierBouton.addEventListener('click', () => {
    
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = contenuAvecDisposition;
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextArea);
        Confirmation.style.opacity = 1;
    
        setTimeout(function() {
            Confirmation.style.opacity = 0;
        }, 1500);
    
    });
    
    const FormeVisuels = document.getElementById('FormeVisuels');
    
    document.addEventListener('change', updateVisuelle);
    
    function updateVisuelle() {
        FormeVisuels.style.backgroundColor = colorPicker.value;
    
        if (hoverColor.checked) {
            FormeVisuels.addEventListener('mouseenter', () => {
                FormeVisuels.style.backgroundColor = HovercolorPicker.value; // Changer la couleur de fond en jaune
            });
    
            FormeVisuels.addEventListener('mouseleave', () => {
                FormeVisuels.style.backgroundColor = colorPicker.value; // Réinitialiser la couleur de fond
            });
        }
    
        const borderRadiusValue1 = InputText.value + 'px';
    
        if (CoordinationValeur === true) {
            FormeVisuels.style.borderRadius = borderRadiusValue1;
        } else {
            const borderRadiusValue2 = InputText2.value + 'px';
            const borderRadiusValue3 = InputText3.value + 'px';
            const borderRadiusValue4 = InputText4.value + 'px';
            FormeVisuels.style.borderRadius = `${borderRadiusValue1} ${borderRadiusValue2} ${borderRadiusValue3} ${borderRadiusValue4}`;
        }
    
        if(checkbox2.checked){
            FormeVisuels.style.borderStyle = 'solid';
            FormeVisuels.style.borderColor = BoderColorPicker.value;
            FormeVisuels.style.borderWidth = `${RangeValue.value}px`;
    
            if (hoverColor.checked) {
            FormeVisuels.addEventListener('mouseenter', () => {
                FormeVisuels.style.borderColor = BorderHover.value;
            });
    
            FormeVisuels.addEventListener('mouseleave', () => {
                FormeVisuels.style.borderColor = BoderColorPicker.value;
            });
        }
        }else{
            FormeVisuels.style.borderStyle = 'none';
            FormeVisuels.style.borderColor = 'none';
            FormeVisuels.style.borderWidth = '0';
        }
    }
    
    });