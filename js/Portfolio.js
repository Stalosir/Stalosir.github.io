document.addEventListener('DOMContentLoaded', function() {
    // Variable contenant les données JSON
    const data = {
        realisationsGraphiques: [
            {
                title: "BULLY'NERGI",
                subtitle: "Marque fictive",
                image: "../Images/icone_card/logoCardBully.png",
                alt: "Logo BULLY'NERGI"
            },
            {
                title: "Créativ'Art Pub",
                subtitle: "Création Magasine",
                image: "../Images/icone_card/logoCreativeArtPub.png",
                alt: "Logo Magasine CreativeArtPub"
            },
            {
                title: "Print Bethesda",
                subtitle: "Création Brochure",
                image: "../Images/icone_card/logoCardBethe.png",
                alt: "Logo Béthesda"
            }
        ],
        projetsDeveloppement: [
            {
                title: "Générateur de code",
                subtitle: "Projet personnel",
                image: "../Images/icone_card/TesteBalise.png",
                alt: "Logo balise générator"
            },
            {
                title:"L'instant Compétences",
                subtitle: `<span class="corection">Stage fin d'années</span>`,
                image: "../Images/icone_card/logo_linst_sf.png",
                alt: "Logo L'instant compétences"
            },
            {
                title: "Extension EasyList",
                subtitle: "Projet personnel",
                image: "../Images/icone_card/logoCardEasyList.png",
                alt: "Logo extention EasyList"
            }
        ]
    };

    const template = document.getElementById('card-template').innerHTML;
    const realisationsGraphiquesContainer = document.getElementById('container-firt');
    const projetsDeveloppementContainer = document.getElementById('container-scd');

    // Générer les cartes de réalisations graphiques
    data.realisationsGraphiques.forEach(item => {
        let cardHtml = template.replace('{{title}}', item.title)
                               .replace('{{subtitle}}', item.subtitle)
                               .replace('{{image}}', item.image)
                               .replace('{{alt}}', item.image);
        realisationsGraphiquesContainer.innerHTML += cardHtml;
    });

    // Générer les cartes de projets de développement
    data.projetsDeveloppement.forEach(item => {
        let cardHtml = template.replace('{{title}}', item.title)
                               .replace('{{subtitle}}', item.subtitle)
                               .replace('{{image}}', item.image)
                               .replace('{{atl}}', item.alt);
        projetsDeveloppementContainer.innerHTML += cardHtml;
    });

    // Ajouter des écouteurs d'événements aux cartes
    addCardEventListeners();

    function addCardEventListeners() {
        const cards = document.querySelectorAll('.card');
        cards.forEach((card, index) => {
            card.addEventListener('click', () => {
                switch (index) {
                    case 0:
                        window.location.assign('Page-Folio/Bullynergie.html');
                        break;
                    case 1:
                        window.location.assign('Page-Folio/CreativeArt.html');
                        break;
                    case 2:
                        window.location.assign('Page-Folio/Print-Bethesda.html');
                        break;
                    case 3:
                        window.location.assign('Page-Folio/CodeGenerator/Index.html');
                        break;
                    case 4:
                        alert("Ce projet a connu des modifications qui ne dépendent pas de moi depuis la livraison du site que j'ai effectuée.");
                        window.open("https://linstantcompetences.fr/");
                        break;
                    case 5:
                        window.location.assign('Page-Folio/EasyList.html');
                        break;
                    default:
                        alert("Cette page n'est pas encore terminée. Merci de votre compréhension.");
                        break;
                }
            });
        });
    }
});