document.addEventListener("DOMContentLoaded", function () {

//code pour l'acordéons

const html_card = document.getElementById("html_card");
const css_card = document.getElementById("css_card");
const js_card = document.getElementById("js_card");
const php_card = document.getElementById("php_card");
const node_card = document.getElementById("node_card");
const reac_card = document.getElementById("reac_card");
const next_card = document.getElementById("next_card");

const range_1_content = document.getElementById("range_1_content");
const range_1_point = document.getElementById("range_1_point");
const result_stats_1 = document.getElementById("result_stats_1");

const range_2_content = document.getElementById("range_2_content");
const range_2_point = document.getElementById("range_2_point");
const result_stats_2 = document.getElementById("result_stats_2");

const debutant_range = 25;
const intermediaire_range = 50;
const advenced_range = 75;

const debutant_point = 23;
const intermediaire_point = 48;
const advenced_point = 73;

const debutant = "Débutant";
const intermediaire = "Intermédiaire" ;
const avancer = "Avancer";

const bar = document.querySelectorAll(".bar");

range_1_content.style.width = "0";
range_1_point.style.marginLeft = "0";

range_2_content.style.width = "0";
range_2_point.style.marginLeft = "0";


html_card.addEventListener('mouseover', function() {
    addHoverEffect("#ef7c45", advenced_range, advenced_point, avancer, advenced_range, advenced_point, avancer )
}); 
html_card.addEventListener('click', function() {
    addHoverEffect("#ef7c45", advenced_range, advenced_point, avancer, advenced_range, advenced_point, avancer )
}); 

css_card.addEventListener('mouseover', function() {
    addHoverEffect("#45b1ef", advenced_range, advenced_point, avancer, advenced_range, advenced_point, avancer )
}); 
css_card.addEventListener('click', function() {
    addHoverEffect("#45b1ef", advenced_range, advenced_point, avancer, advenced_range, advenced_point, avancer )
}); 

js_card.addEventListener('mouseover', function() {
    addHoverEffect("#e6cb37", intermediaire_range, intermediaire_point, intermediaire, advenced_range, advenced_point, avancer )
}); 
js_card.addEventListener('click', function() {
    addHoverEffect("#e6cb37", intermediaire_range, intermediaire_point, intermediaire, advenced_range, advenced_point, avancer )
}); 

php_card.addEventListener('mouseover', function() {
    addHoverEffect("#8645ef", intermediaire_point, intermediaire_point, intermediaire, debutant_range, debutant_point, debutant )
}); 
php_card.addEventListener('click', function() {
    addHoverEffect("#8645ef", intermediaire_point, intermediaire_point, intermediaire, debutant_range, debutant_point, debutant )
}); 

node_card.addEventListener('mouseover', function() {
    addHoverEffect("#71c450", debutant_range, debutant_point, debutant, debutant_range, debutant_point, debutant )
}); 
node_card.addEventListener('click', function() {
    addHoverEffect("#71c450", debutant_range, debutant_point, debutant, debutant_range, debutant_point, debutant )
}); 

reac_card.addEventListener('mouseover', function() {
    addHoverEffect("#66dcfb", debutant_range, debutant_point, debutant, intermediaire_range, intermediaire_point, intermediaire )
}); 
reac_card.addEventListener('click', function() {
    addHoverEffect("#66dcfb", debutant_range, debutant_point, debutant, intermediaire_range, intermediaire_point, intermediaire )
}); 

next_card.addEventListener('mouseover', function() {
    addHoverEffect("#080808", debutant_range, debutant_point, debutant, debutant_range, debutant_point, debutant )
}); 
next_card.addEventListener('click', function() {
    addHoverEffect("#080808", debutant_range, debutant_point, debutant, debutant_range, debutant_point, debutant )
}); 


// Fonction pour modifier les styles lors du survol
async function addHoverEffect(bar_color, range1, point1, level1, range2, point2, level2) {

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function adjustWidth1(currentWidth, targetWidth) {
        if (currentWidth > targetWidth) {
            while (currentWidth > targetWidth) {
                currentWidth--;
                range_1_content.style.width = currentWidth + "%";
                await delay(5);
            }
        } else if (currentWidth < targetWidth) {
            while (currentWidth < targetWidth) {
                currentWidth++;
                range_1_content.style.width = currentWidth + "%";
                await delay(5);
            }
        }
    }

    async function adjustPoint1(currentPoint, targetPoint) {
        if (currentPoint > targetPoint) {
            while (currentPoint > targetPoint) {
                currentPoint--;
                range_1_point.style.marginLeft = currentPoint + "%";
                await delay(5);
            }
        } else if (currentPoint < targetPoint) {
            while (currentPoint < targetPoint) {
                currentPoint++;
                range_1_point.style.marginLeft = currentPoint + "%";
                await delay(5);
            }
        }
    }



    async function adjustWidth2(currentWidth, targetWidth) {
        if (currentWidth > targetWidth) {
            while (currentWidth > targetWidth) {
                currentWidth--;
                range_2_content.style.width = currentWidth + "%";
                await delay(5);
            }
        } else if (currentWidth < targetWidth) {
            while (currentWidth < targetWidth) {
                currentWidth++;
                range_2_content.style.width = currentWidth + "%";
                await delay(5);
            }
        }
    }

    async function adjustPoint2(currentPoint, targetPoint) {
        if (currentPoint > targetPoint) {
            while (currentPoint > targetPoint) {
                currentPoint--;
                range_2_point.style.marginLeft = currentPoint + "%";
                await delay(5);
            }
        } else if (currentPoint < targetPoint) {
            while (currentPoint < targetPoint) {
                currentPoint++;
                range_2_point.style.marginLeft = currentPoint + "%";
                await delay(5);
            }
        }
    }

        const bar = document.querySelectorAll(".bar");
        const shadowOpacity = 0.5;

        bar.forEach((element) => {
        const shadowOffset = 5; 
        const rgbaColor = hexToRgba(bar_color, shadowOpacity);
        element.style.boxShadow = `${shadowOffset}px ${shadowOffset}px 10px ${rgbaColor}`;
        });

        // Fonction pour convertir une couleur hexadécimale en rgba
        function hexToRgba(hex, opacity) {
        const bigint = parseInt(hex.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
        }

        let currentWidth1 = parseFloat(range_1_content.style.width);
        let currentPoint1 = parseFloat(range_1_point.style.marginLeft);
        const targetWidth1 = parseFloat(range1);
        const targetPoint1 = parseFloat(point1);

        let currentWidth2 = parseFloat(range_2_content.style.width);
        let currentPoint2 = parseFloat(range_2_point.style.marginLeft);
        const targetWidth2 = parseFloat(range2);
        const targetPoint2 = parseFloat(point2);

        result_stats_1.textContent = level1
        result_stats_2.textContent = level2

        await Promise.all([
            adjustWidth1(currentWidth1, targetWidth1),
            adjustPoint1(currentPoint1, targetPoint1),
            adjustWidth2(currentWidth2, targetWidth2),
            adjustPoint2(currentPoint2, targetPoint2)
        ]);
    
}

});