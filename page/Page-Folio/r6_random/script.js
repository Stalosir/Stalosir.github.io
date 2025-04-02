// Données des opérateurs directement dans le script
const operators = [
    {
        "nom": "Striker",
        "image": "image/operator/r6-operators-list-striker.avif",
        "type": "attaquant",
        "armes_principales": [
            { "nom": "M4", "image": "image/weapon/M4.avif" },
            { "nom": "M249", "image": "image/weapon/M249.avif" }
        ],
        "armes_secondaires": [
            { "nom": "5.7 USG", "image": "image/weapon/5.7_USG.avif" },
            { "nom": "ITA12S", "image": "image/weapon/ITA12S.avif" }
        ]
    },
    {
        "nom": "Sledge",
        "image": "image/operator/r6-operators-list-sledge.avif",
        "type": "attaquant",
        "armes_principales": [
            { "nom": "M590A1", "image": "image/weapon/M590A1.avif" },
            { "nom": "L85A2", "image": "image/weapon/L85A2.avif" }
        ],
        "armes_secondaires": [
            { "nom": "P226 MK 25", "image": "image/weapon/P226_MK_25.avif" }
        ]
    },
    {
        "nom": "Thatcher",
        "image": "image/operator/r6-operators-list-thatcher.avif",
        "type": "attaquant",
        "armes_principales": [
            { "nom": "AR33", "image": "image/weapon/AR33.avif" },
            { "nom": "M590A1", "image": "image/weapon/M590A1.avif" },
			{ "nom": "L85A2	", "image": "image/weapon/L85A2.avif" }
        ],
        "armes_secondaires": [
            { "nom": "P226 MK 25", "image": "image/weapon/P226_MK_25.avif" }
        ]
    },
    {
        "nom": "Ash",
        "image": "image/operator/r6-operators-list-ash.avif",
        "type": "attaquant",
        "armes_principales": [
            { "nom": "R4-C", "image": "image/weapon/R4-C.avif" },
            { "nom": "G36C", "image": "image/weapon/G36C.avif" }
        ],
        "armes_secondaires": [
            { "nom": "M45 MEUSOC", "image": "image/weapon/M45_MEUSOC.avif" },
            { "nom": "5.7 USG", "image": "image/weapon/5.7_USG.avif" }
        ]
    },
    {
        "nom": "Thermite",
        "image": "image/operator/r6-operators-list-thermite.avif",
        "type": "attaquant",
        "armes_principales": [
            { "nom": "M1014", "image": "image/weapon/M1014.avif" },
            { "nom": "556XI", "image": "image/weapon/556XI.avif" }
        ],
        "armes_secondaires": [
            { "nom": "M45 MEUSOC", "image": "image/weapon/M45_MEUSOC.avif" },
            { "nom": "5.7 USG", "image": "image/weapon/5.7_USG.avif" }
        ]
    },
	{
        "nom": "Twitch",
        "image": "image/operator/r6-operators-list-twitch.avif",
        "type": "attaquant",
        "armes_principales": [
            { "nom": "F2", "image": "image/weapon/F2.avif" },
            { "nom": "417", "image": "image/weapon/417.avif" },
			{ "nom": "SG-CQB", "image": "image/weapon/SG-CQB.avif" }
        ],
        "armes_secondaires": [
            { "nom": "P9", "image": "image/weapon/P9.avif" },
            { "nom": "LFP586", "image": "image/weapon/LFP586.avif" }
        ]
    },
	{
        "nom": "Montagne",
        "image": "image/operator/r6-operators-list-montagne.avif",
        "type": "attaquant",
        "armes_principales": [
            { "nom": "Bouclier Entier", "image": "image/weapon/Extendable-Shield.avif" },
        ],
        "armes_secondaires": [
            { "nom": "P9", "image": "image/weapon/P9.avif" },
            { "nom": "LFP586", "image": "image/weapon/LFP586.avif" }
        ]
    },
	{
        "nom": "Glaz",
        "image": "image/operator/r6-operators-list-glaz.avif",
        "type": "attaquant",
        "armes_principales": [
            { "nom": "OTs-03", "image": "image/weapon/OTs-03.avif" }
        ],
        "armes_secondaires": [
            { "nom": "PMM", "image": "image/weapon/PMM.avif" },
            { "nom": "GONNE-6", "image": "image/weapon/GONNE-6.avif" },
			{ "nom": "BEARING 9", "image": "image/weapon/BEARING_9.avif" }
        ]
    },
	{
        "nom": "Fuze",
        "image": "image/operator/r6-operators-list-fuze.avif",
        "type": "attaquant",
        "armes_principales": [
            { "nom": "BOUCLIER BALISTIQUE", "image": "image/weapon/Ballistic_Shield.webp" },
            { "nom": "6P41", "image": "image/weapon/6P41.avif" },
			{ "nom": "AK-12", "image": "image/weapon/AK-12.avif" }
        ],
        "armes_secondaires": [
            { "nom": "PMM", "image": "image/weapon/PMM.avif" },
            { "nom": "GSH-18", "image": "image/weapon/GSH-18.avif" }
        ]
    },
	{
        "nom": "Blitz",
        "image": "image/operator/r6-operators-list-blitz.avif",
        "type": "attaquant",
        "armes_principales": [
            { "nom": "Bouclier G52", "image": "image/weapon/G52-Tactical_Shield.webp" }
        ],
        "armes_secondaires": [
            { "nom": "P12", "image": "image/weapon/P12.avif" }
        ]
    },
	{
        "nom": "IQ",
        "image": "image/operator/r6-operators-list-iq.avif",
        "type": "attaquant",
        "armes_principales": [
            { "nom": "AUG A2", "image": "image/weapon/AUG_A2.avif" },
            { "nom": "552 COMMANDO", "image": "image/weapon/552_COMMANDO.avif" },
			{ "nom": "G8A1", "image": "image/weapon/G8A1.avif" }
        ],
        "armes_secondaires": [
            { "nom": "P12", "image": "image/weapon/P12.avif" }
        ]
    },
	{
        "nom": "Buck",
        "image": "image/operator/r6-operators-list-buck.avif",
        "type": "attaquant",
        "armes_principales": [
            { "nom": "C8-SFW", "image": "image/weapon/C8-SFW.avif" },
            { "nom": "CAMRS", "image": "image/weapon/CAMRS.avif" }
        ],
        "armes_secondaires": [
            { "nom": "MK1 9mm", "image": "image/weapon/MK1_9mm.avif" }
        ]
    },
	{
        "nom": "Blackbeard",
        "image": "image/operator/r6-operators-list-blackbeard.avif",
        "type": "attaquant",
        "armes_principales": [
            { "nom": "Bouclier lourd", "image": "image/weapon/blackbeard_1.png" }
        ],
        "armes_secondaires": [
            { "nom": "MK17 CQB", "image": "image/weapon/MK17_CQB.avif" },
            { "nom": "SR-25", "image": "image/weapon/SR-25.avif" }
        ]
    },
	{
        "nom": "Capitão",
        "image": "image/operator/r6-operators-list-capitao.avif",
        "type": "attaquant",
        "armes_principales": [
            { "nom": "PARA-308", "image": "image/weapon/PARA-308.avif" },
            { "nom": "M249", "image": "image/weapon/M249.avif" }
        ],
        "armes_secondaires": [
            { "nom": "PRB92", "image": "image/weapon/PRB92.avif" },
            { "nom": "GONNE-6", "image": "image/weapon/GONNE-6.avif" }
        ]
    },
	{
        "nom": "Hibana",
        "image": "image/operator/r6-operators-list-hibana.avif",
        "type": "attaquant",
        "armes_principales": [
            { "nom": "TYPE-89", "image": "image/weapon/Type-89.avif" },
            { "nom": "SUPERNOVA", "image": "image/weapon/SUPERNOVA.avif" },
        ],
        "armes_secondaires": [
            { "nom": "P229", "image": "image/weapon/P229.avif" },
            { "nom": "BEARING 9", "image": "image/weapon/BEARING_9.avif" }
        ]
    },
	{
        "nom": "Jackal",
        "image": "image/operator/r6-operators-list-jackal.avif",
        "type": "attaquant",
        "armes_principales": [
            { "nom": "C7E", "image": "image/weapon/C7E.avif" },
            { "nom": "PDW9", "image": "image/weapon/PDW9.avif" },
			{ "nom": "ITA12L", "image": "image/weapon/ITA12L.avif" }
        ],
        "armes_secondaires": [
            { "nom": "USP40", "image": "image/weapon/USP40.avif" },
			{ "nom": "ITA12S", "image": "image/weapon/ITA12S.avif" }
        ]
    },
	{
        "nom": "Ying",
        "image": "image/operator/r6-operators-list-ying.avif",
        "type": "attaquant",
        "armes_principales": [
            { "nom": "T-95 LSW", "image": "image/weapon/T-95_LSW.avif" },
            { "nom": "SIX12", "image": "image/weapon/SIX12.avif" }
        ],
        "armes_secondaires": [
            { "nom": "Q-929", "image": "image/weapon/Q-929.avif" }
        ]
    },
	{
        "nom": "Zofia",
        "image": "image/operator/r6-operators-list-zofia.avif",
        "type": "attaquant",
        "armes_principales": [
            { "nom": "LMG-E", "image": "image/weapon/LMG-E.avif" },
            { "nom": "M762", "image": "image/weapon/M762.avif" }
        ],
        "armes_secondaires": [
            { "nom": "RG15", "image": "image/weapon/RG15.avif" }
        ]
    },
	{
        "nom": "Dokkaebi",
        "image": "image/operator/r6-operators-list-dokkaebi.avif",
        "type": "attaquant",
        "armes_principales": [
            { "nom": "Mk 14 EBR", "image": "image/weapon/Mk_14_EBR.avif" },
            { "nom": "BOSG.12.2", "image": "image/weapon/BOSG.12.2.avif" }
        ],
        "armes_secondaires": [
            { "nom": "SMG-12", "image": "image/weapon/SMG-12.avif" },
			{ "nom": "C75 Auto", "image": "image/weapon/C75_Auto.avif" },
			{ "nom": "GONNE-6", "image": "image/weapon/GONNE-6.avif" }
        ]
    },
	{
        "nom": "Lion",
        "image": "image/operator/r6-operators-list-lion.avif",
        "type": "attaquant",
        "armes_principales": [
            { "nom": "V308", "image": "image/weapon/V308.avif" },
            { "nom": "417", "image": "image/weapon/417.avif" },
			{ "nom": "SG-CQB", "image": "image/weapon/SG-CQB.avif" }
        ],
        "armes_secondaires": [
            { "nom": "LFP586", "image": "image/weapon/LFP586.avif" },
			{ "nom": "P9", "image": "image/weapon/P9.avif" }
        ]
    },
	{
        "nom": "Finka",
        "image": "image/operator/r6-operators-list-finka.avif",
        "type": "attaquant",
        "armes_principales": [
            { "nom": "SASG-12", "image": "image/weapon/SASG-12.avif" },
            { "nom": "SPEAR .308", "image": "image/weapon/SPEAR_.308.avif" },
			{ "nom": "6P41", "image": "image/weapon/6P41.avif" }
        ],
        "armes_secondaires": [
            { "nom": "PMM", "image": "image/weapon/PMM.avif" },
			{ "nom": "GSH-18", "image": "image/weapon/GSH-18.avif" }
        ]
    },
	{
        "nom": "Maverick",
        "image": "image/operator/r6-operators-list-maverick.avif",
        "type": "attaquant",
        "armes_principales": [
            { "nom": "AR-15.50", "image": "image/weapon/AR-15.50.avif" },
            { "nom": "M4", "image": "image/weapon/M4.avif" }
        ],
        "armes_secondaires": [
            { "nom": "1911 TACOPS", "image": "image/weapon/1911_TACOPS.avif" }
        ]
    },
	{
        "nom": "Nomad",
        "image": "image/operator/r6-operators-list-nomad.avif",
        "type": "attaquant",
        "armes_principales": [
            { "nom": "AK-74M", "image": "image/weapon/AK-74M.avif" },
            { "nom": "ARX200", "image": "image/weapon/ARX200.avif" }
        ],
        "armes_secondaires": [
            { "nom": ".44 Mag Semi-Auto", "image": "image/weapon/44_Mag_Semi-Auto.avif" },
			{ "nom": "PRB92", "image": "image/weapon/PRB92.avif" }
        ]
    },
	{
        "nom": "Gridlock",
        "image": "image/operator/r6-operators-list-gridlock.avif",
        "type": "attaquant",
        "armes_principales": [
            { "nom": "F90", "image": "image/weapon/F90.avif" },
            { "nom": "M249 SAW", "image": "image/weapon/M249_SAW.avif" }
        ],
        "armes_secondaires": [
            { "nom": "SUPER SHORTY", "image": "image/weapon/SUPER_SHORTY.png" },
			{ "nom": "SDP 9mm", "image": "image/weapon/SDP_9mm.avif" }
        ]
    },
	{
        "nom": "Nøkk",
        "image": "image/operator/r6-operators-list-nokk.avif",
        "type": "attaquant",
        "armes_principales": [
            { "nom": "FMG-9", "image": "image/weapon/FMG-9.avif" },
            { "nom": "SIX12 SD", "image": "image/weapon/SIX12_SD.avif" }
        ],
        "armes_secondaires": [
            { "nom": "5.7 USG", "image": "image/weapon/5.7_USG.avif" },
			{ "nom": "D-50", "image": "image/weapon/D-50.avif" }
        ]
    },
	{
        "nom": "Amaru",
        "image": "image/operator/r6-operators-list-amaru.avif",
        "type": "attaquant",
        "armes_principales": [
            { "nom": "G8A1", "image": "image/weapon/G8A1.avif" },
            { "nom": "SUPERNOVA", "image": "image/weapon/SUPERNOVA.avif" }
        ],
        "armes_secondaires": [
            { "nom": "SMG-11", "image": "image/weapon/SMG-11.avif" },
			{ "nom": "ITA12S", "image": "image/weapon/ITA12S.avif" },
			{ "nom": "GONNE-6", "image": "image/weapon/GONNE-6.avif" }
        ]
    },
	{
        "nom": "Kali",
        "image": "image/operator/r6-operators-list-kali.avif",
        "type": "attaquant",
        "armes_principales": [
            { "nom": "CSRX 300", "image": "image/weapon/CSRX_300.avif" }
        ],
        "armes_secondaires": [
            { "nom": "SPSMG9", "image": "image/weapon/SPSMG9.avif" },
			{ "nom": "C75 Auto", "image": "image/weapon/C75_Auto.avif" },
			{ "nom": "P226 MK 25", "image": "image/weapon/P226_MK_25.avif" }
        ]
    },
	{
        "nom": "Iana",
        "image": "image/operator/r6-operators-list-iana.avif",
        "type": "attaquant",
        "armes_principales": [
            { "nom": "ARX200", "image": "image/weapon/ARX200.avif" },
            { "nom": "G36C", "image": "image/weapon/G36C.avif" }
        ],
        "armes_secondaires": [
            { "nom": "MK1 9mm", "image": "image/weapon/MK1_9mm.avif" },
			{ "nom": "GONNE-6", "image": "image/weapon/GONNE-6.avif" }
        ]
    },
	{
        "nom": "Ace",
        "image": "image/operator/r6-operators-list-ace.avif",
        "type": "attaquant",
        "armes_principales": [
            { "nom": "AK-12", "image": "image/weapon/AK-12.avif" },
            { "nom": "M1014", "image": "image/weapon/M1014.avif" }
        ],
        "armes_secondaires": [
            { "nom": "P9", "image": "image/weapon/P9.avif" }
        ]
    },
	{
        "nom": "Zero",
        "image": "image/operator/r6-operators-list-zero.avif",
        "type": "attaquant",
        "armes_principales": [
            { "nom": "SC3000K", "image": "image/weapon/SC3000K.png" },
            { "nom": "MP7", "image": "image/weapon/MP7.avif" }
        ],
        "armes_secondaires": [
            { "nom": "5.7 USG", "image": "image/weapon/5.7_USG.avif" },
			{ "nom": "GONNE-6", "image": "image/weapon/GONNE-6.avif" }
        ]
    },
	{
        "nom": "Flores",
        "image": "image/operator/r6-operators-list-flores.avif",
        "type": "attaquant",
        "armes_principales": [
            { "nom": "AR33", "image": "image/weapon/AR33.avif" },
            { "nom": "SR-25", "image": "image/weapon/SR-25.avif" }
        ],
        "armes_secondaires": [
            { "nom": "GSH-18", "image": "image/weapon/GSH-18.avif" }
        ]
    },
	{
        "nom": "OSA",
        "image": "image/operator/r6-operators-list-osa.avif",
        "type": "attaquant",
        "armes_principales": [
            { "nom": "556XI", "image": "image/weapon/556XI.avif" },
            { "nom": "PDW9", "image": "image/weapon/PDW9.avif" }
        ],
        "armes_secondaires": [
            { "nom": "PMM", "image": "image/weapon/PMM.avif" }
        ]
    },
	{
        "nom": "SENS",
        "image": "image/operator/r6-operators-list-sens.avif",
        "type": "attaquant",
        "armes_principales": [
            { "nom": "POF-9", "image": "image/weapon/POF-9.avif" },
            { "nom": "417", "image": "image/weapon/417.avif" }
        ],
        "armes_secondaires": [
            { "nom": "SDP 9mm", "image": "image/weapon/SDP_9mm.avif" }
        ]
    },
	{
        "nom": "Grim",
        "image": "image/operator/r6-operators-list-grim.avif",
        "type": "attaquant",
        "armes_principales": [
            { "nom": "552 COMMANDO", "image": "image/weapon/552_COMMANDO.avif" },
            { "nom": "SG-CQB", "image": "image/weapon/SG-CQB.avif" }
        ],
        "armes_secondaires": [
            { "nom": "P229", "image": "image/weapon/P229.avif" },
			{ "nom": "Bailiff 410", "image": "image/weapon/Bailiff_410.avif" }
        ]
    },
	{
        "nom": "Brava",
        "image": "image/operator/r6-operators-list-brava.avif",
        "type": "attaquant",
        "armes_principales": [
            { "nom": "PARA-308", "image": "image/weapon/PARA-308.avif" },
            { "nom": "CAMRS", "image": "image/weapon/CAMRS.avif" }
        ],
        "armes_secondaires": [
            { "nom": "SUPER SHORTY", "image": "image/weapon/SUPER_SHORTY.png" },
			{ "nom": "USP40", "image": "image/weapon/USP40.avif" }
        ]
    },
	{
        "nom": "Ram",
        "image": "image/operator/r6-operators-list-ram.avif",
        "type": "attaquant",
        "armes_principales": [
            { "nom": "R4-C", "image": "image/weapon/R4-C.avif" },
            { "nom": "LMG-E", "image": "image/weapon/LMG-E.avif" }
        ],
        "armes_secondaires": [
            { "nom": "MK1 9mm", "image": "image/weapon/MK1_9mm.avif" }
        ]
    },
	{
        "nom": "Deimos",
        "image": "image/operator/r6-operators-list-deimos.avif",
        "type": "attaquant",
        "armes_principales": [
            { "nom": "AK-74M", "image": "image/weapon/AK-74M.avif" },
            { "nom": "M590A1", "image": "image/weapon/M590A1.avif" }
        ],
        "armes_secondaires": [
            { "nom": ".44 Vendetta", "image": "image/weapon/44VENDETTA.avif" }
        ]
    },
    {
        "nom": "Skopós",
        "image": "image/operator/r6-operators-list-skopos.avif",
        "type": "defenseur",
        "armes_principales": [
            { "nom": "PCX-33", "image": "image/weapon/pcx-33.png" },
        ],
        "armes_secondaires": [
            { "nom": "P229", "image": "image/weapon/P229.avif" },
        ]
    },
	{
        "nom": "RAUORA",
        "image": "image/operator/r6-operators-list-rauora.avif",
        "type": "attaquant",
        "armes_principales": [
            { "nom": "417", "image": "image/weapon/417.avif" },
            { "nom": "M249", "image": "image/weapon/M249.avif" }
        ],
        "armes_secondaires": [
            { "nom": "Reaper MK2", "image": "image/weapon/Reaper_MK2.avif" },
			{ "nom": "GSH-18", "image": "image/weapon/GSH-18.avif" }
        ]
    },
    
    {
        "nom": "Sentry",
        "image": "image/operator/r6-operators-list-sentry.avif",
        "type": "defenseur",
        "armes_principales": [
            { "nom": "COMMANDO 9", "image": "image/weapon/COMMANDO_9.avif" },
            { "nom": "M870", "image": "image/weapon/M870.avif" }
        ],
        "armes_secondaires": [
            { "nom": "C75 Auto", "image": "image/weapon/C75_Auto.avif" },
            { "nom": "Super Shorty", "image": "image/weapon/SUPER_SHORTY.png" }
        ]
    },
    {
        "nom": "Tubarão",
        "image": "image/operator/r6-operators-list-tubarao.avif",
        "type": "defenseur",
        "armes_principales": [
            { "nom": "MPX", "image": "image/weapon/MPX.avif" },
            { "nom": "AR-15.50", "image": "image/weapon/AR-15.50.avif" }
        ],
        "armes_secondaires": [
            { "nom": "P226 MK 25", "image": "image/weapon/P226_MK_25.avif" }
        ]
    },
    {
        "nom": "Fenrir",
        "image": "image/operator/r6-operators-list-fenrir.avif",
        "type": "defenseur",
        "armes_principales": [
            { "nom": "MP7", "image": "image/weapon/MP7.avif" },
            { "nom": "SASG-12", "image": "image/weapon/SASG-12.avif" }
        ],
        "armes_secondaires": [
            { "nom": "5.7 USG", "image": "image/weapon/5.7_USG.avif" },
            { "nom": "Bailiff 410", "image": "image/weapon/Bailiff_410.avif" }
        ]
    },
    {
        "nom": "Solis",
        "image": "image/operator/r6-operators-list-solis.avif",
        "type": "defenseur",
        "armes_principales": [
            { "nom": "ITA12L", "image": "image/weapon/ITA12L.avif" },
            { "nom": "P90", "image": "image/weapon/P90.avif" }
        ],
        "armes_secondaires": [
            { "nom": "SMG-11", "image": "image/weapon/SMG-11.avif" },
        ]
    },
	{
        "nom": "Azami",
        "image": "image/operator/r6-operators-list-azami.avif",
        "type": "defenseur",
        "armes_principales": [
            { "nom": "9X19SVN", "image": "image/weapon/9X19SVN.avif" },
            { "nom": "ACS12", "image": "image/weapon/ACS12.avif" }
        ],
        "armes_secondaires": [
            { "nom": "D-50", "image": "image/weapon/D-50.avif" },
        ]
    },
	{
        "nom": "Thorn",
        "image": "image/operator/r6-operators-list-thorn.avif",
        "type": "defenseur",
        "armes_principales": [
            { "nom": "UZK50Gi", "image": "image/weapon/UZK50Gi.avif" },
            { "nom": "M870", "image": "image/weapon/M870.avif" }
        ],
        "armes_secondaires": [
            { "nom": "1911 TACOPS", "image": "image/weapon/1911_TACOPS.avif" },
            { "nom": "C75 Auto", "image": "image/weapon/C75_Auto.avif" }
        ]
    },
	{
        "nom": "Thunderbird",
        "image": "image/operator/r6-operators-list-thunderbird.avif",
        "type": "defenseur",
        "armes_principales": [
            { "nom": "SPAS-15", "image": "image/weapon/SPAS-15.avif" },
            { "nom": "Spear .308", "image": "image/weapon/Spear_.308.avif" }
        ],
        "armes_secondaires": [
            { "nom": "Bearing 9", "image": "image/weapon/BEARING_9.avif" },
            { "nom": "Q-929", "image": "image/weapon/Q-929.avif" },
			{ "nom": "ITA12S", "image": "image/weapon/ITA12S.avif" }
        ]
    },
	{
        "nom": "Aruni",
        "image": "image/operator/r6-operators-list-aruni.avif",
        "type": "defenseur",
        "armes_principales": [
            { "nom": "P10 RONI", "image": "image/weapon/P10_RONI.avif" },
            { "nom": "Mk 14 EBR", "image": "image/weapon/Mk_14_EBR.avif" }
        ],
        "armes_secondaires": [
            { "nom": "PRB92", "image": "image/weapon/PRB92.avif" }
        ]
    },
	{
        "nom": "Melusi",
        "image": "image/operator/r6-operators-list-melusi.avif",
        "type": "defenseur",
        "armes_principales": [
            { "nom": "MP5", "image": "image/weapon/MP5.avif" },
            { "nom": "Super 90", "image": "image/weapon/Super_90.avif" }
        ],
        "armes_secondaires": [
            { "nom": "ITA12S", "image": "image/weapon/ITA12S.avif" },
            { "nom": "RG15", "image": "image/weapon/RG15.avif" }
        ]
    },
	{
        "nom": "Oryx",
        "image": "image/operator/r6-operators-list-oryx.avif",
        "type": "defenseur",
        "armes_principales": [
            { "nom": "SPAS-12", "image": "image/weapon/SPAS-12.avif" },
            { "nom": "T-5 SMG", "image": "image/weapon/T-5_SMG.avif" }
        ],
        "armes_secondaires": [
            { "nom": "Bailiff 410", "image": "image/weapon/Bailiff_410.avif" },
            { "nom": "USP40", "image": "image/weapon/USP40.avif" }
        ]
    },
	{
        "nom": "Wamai",
        "image": "image/operator/r6-operators-list-wamai.avif",
        "type": "defenseur",
        "armes_principales": [
            { "nom": "AUG A2", "image": "image/weapon/AUG_A2.avif" },
            { "nom": "MP5K", "image": "image/weapon/MP5K.webp" }
        ],
        "armes_secondaires": [
            { "nom": "P12", "image": "image/weapon/P12.avif" },
            { "nom": "Keratos .357", "image": "image/weapon/Keratos_.357.avif" }
        ]
    },
	{
        "nom": "Goyo",
        "image": "image/operator/r6-operators-list-goyo.avif",
        "type": "defenseur",
        "armes_principales": [
            { "nom": "Vector .45 ACP", "image": "image/weapon/Vector_.45_ACP.avif" },
            { "nom": "TCSG12", "image": "image/weapon/TCSG12.avif" }
        ],
        "armes_secondaires": [
            { "nom": "P229", "image": "image/weapon/P229.avif" }
        ]
    },
	{
        "nom": "Warden",
        "image": "image/operator/r6-operators-list-warden.avif",
        "type": "defenseur",
        "armes_principales": [
            { "nom": "M590A1", "image": "image/weapon/M590A1.avif" },
            { "nom": "MPX", "image": "image/weapon/MPX.avif" }
        ],
        "armes_secondaires": [
            { "nom": "P-10C", "image": "image/weapon/P-10C.avif" },
            { "nom": "SMG-12", "image": "image/weapon/SMG-12.avif" }
        ]
    },
	{
        "nom": "Mozzie",
        "image": "image/operator/r6-operators-list-mozzie.avif",
        "type": "defenseur",
        "armes_principales": [
            { "nom": "Commando 9", "image": "image/weapon/COMMANDO_9.avif" },
            { "nom": "P10 RONI", "image": "image/weapon/P10_RONI.avif" }
        ],
        "armes_secondaires": [
            { "nom": "SDP 9mm", "image": "image/weapon/SDP_9mm.avif" }
        ]
    },
	{
        "nom": "Kaid",
        "image": "image/operator/r6-operators-list-kaid.avif",
        "type": "defenseur",
        "armes_principales": [
            { "nom": "AUG A3", "image": "image/weapon/AUG_A3.avif" },
            { "nom": "TCSG12", "image": "image/weapon/TCSG12.avif" }
        ],
        "armes_secondaires": [
            { "nom": ".44 MAG SEMI-AUTO", "image": "image/weapon/44_Mag_Semi-Auto.avif" },
			{ "nom": "LFP586", "image": "image/weapon/LFP586.avif" }
        ]
    },
	{
        "nom": "Clash",
        "image": "image/operator/r6-operators-list-clash.avif",
        "type": "defenseur",
        "armes_principales": [
            { "nom": "BOUCLIER AEE", "image": "image/weapon/CCE_Shield.avif" },
        ],
        "armes_secondaires": [
            { "nom": "P-10C", "image": "image/weapon/P-10C.avif" },
            { "nom": "SPSMG9", "image": "image/weapon/SPSMG9.avif" },
            { "nom": "Super Shorty", "image": "image/weapon/SUPER_SHORTY.avif" }
        ]
    },
	{
        "nom": "Maestro",
        "image": "image/operator/r6-operators-list-maestro.avif",
        "type": "defenseur",
        "armes_principales": [
            { "nom": "ALDA 5.56", "image": "image/weapon/ALDA_5.56.avif" },
            { "nom": "ACS12", "image": "image/weapon/ACS12.avif" }
        ],
        "armes_secondaires": [
            { "nom": "Keratos .357", "image": "image/weapon/Keratos_.357.avif" },
            { "nom": "Bailiff 410", "image": "image/weapon/Bailiff_410.avif" }
        ]
    },
	{
        "nom": "Alibi",
        "image": "image/operator/r6-operators-list-alibi.avif",
        "type": "defenseur",
        "armes_principales": [
            { "nom": "Mx4 Storm", "image": "image/weapon/Mx4_Storm.avif" },
            { "nom": "ACS12", "image": "image/weapon/ACS12.avif" }
        ],
        "armes_secondaires": [
            { "nom": "Keratos .357", "image": "image/weapon/Keratos_.357.avif" },
			{ "nom": "Bailiff 410", "image": "image/weapon/Bailiff_410.avif" }
        ]
    },
	{
        "nom": "Vigil",
        "image": "image/operator/r6-operators-list-vigil.avif",
        "type": "defenseur",
        "armes_principales": [
            { "nom": "K1A", "image": "image/weapon/K1A.avif" },
            { "nom": "BOSG.12.2", "image": "image/weapon/BOSG.12.2.avif" }
        ],
        "armes_secondaires": [
            { "nom": "C75 Auto", "image": "image/weapon/C75_Auto.avif" },
			{ "nom": "SMG-12", "image": "image/weapon/SMG-12.avif" }
        ]
    },
	{
        "nom": "Ela",
        "image": "image/operator/r6-operators-list-ela.avif",
        "type": "defenseur",
        "armes_principales": [
            { "nom": "Scorpion EVO 3 A1", "image": "image/weapon/Scorpion_EVO_3_A1.avif" },
            { "nom": "FO-12", "image": "image/weapon/FO-12.avif" }
        ],
        "armes_secondaires": [
            { "nom": "RG15", "image": "image/weapon/RG15.avif" },
        ]
    },
	{
        "nom": "Lesion",
        "image": "image/operator/r6-operators-list-lesion.avif",
        "type": "defenseur",
        "armes_principales": [
            { "nom": "SIX12 SD", "image": "image/weapon/SIX12_SD.avif" },
            { "nom": "T-5 SMG", "image": "image/weapon/T-5_SMG.avif" }
        ],
        "armes_secondaires": [
            { "nom": "Q-929", "image": "image/weapon/Q-929.avif" },
            { "nom": "Super Shorty", "image": "image/weapon/SUPER_SHORTY.png" }
        ]
    },
	{
        "nom": "Mira",
        "image": "image/operator/r6-operators-list-mira.avif",
        "type": "defenseur",
        "armes_principales": [
            { "nom": "Vector .45 ACP", "image": "image/weapon/Vector_.45_ACP.avif" },
            { "nom": "ITA12L", "image": "image/weapon/ITA12L.avif" }
        ],
        "armes_secondaires": [
            { "nom": "USP40", "image": "image/weapon/USP40.avif" },
			{ "nom": "ITA12S", "image": "image/weapon/ITA12S.avif" }
        ]
    },
	{
        "nom": "Echo",
        "image": "image/operator/r6-operators-list-echo.avif",
        "type": "defenseur",
        "armes_principales": [
            { "nom": "MP5SD", "image": "image/weapon/MP5SD.avif" },
            { "nom": "SuperNova", "image": "image/weapon/SuperNova.avif" }
        ],
        "armes_secondaires": [
            { "nom": "Bearing 9", "image": "image/weapon/BEARING_9.avif" },
	    { "nom": "P229", "image": "image/weapon/P229.avif" }
        ]
    },
	{
        "nom": "Caveira",
        "image": "image/operator/r6-operators-list-caveira.avif",
        "type": "defenseur",
        "armes_principales": [
            { "nom": "M12", "image": "image/weapon/M12.avif" },
            { "nom": "SPAS-15", "image": "image/weapon/SPAS-15.avif" }
        ],
        "armes_secondaires": [
            { "nom": "Luison", "image": "image/weapon/Luison.avif" }
        ]
    },
	{
        "nom": "Valkyrie",
        "image": "image/operator/r6-operators-list-valkyrie.avif",
        "type": "defenseur",
        "armes_principales": [
            { "nom": "MPX", "image": "image/weapon/MPX.avif" },
            { "nom": "SPAS-12", "image": "image/weapon/SPAS-12.avif" }
        ],
        "armes_secondaires": [
            { "nom": "D-50", "image": "image/weapon/D-50.avif" }
        ]
    },
	{
        "nom": "Frost",
        "image": "image/operator/r6-operators-list-frost.avif",
        "type": "defenseur",
        "armes_principales": [
            { "nom": "Super 90", "image": "image/weapon/Super_90.avif" },
            { "nom": "9mm C1", "image": "image/weapon/9mm_C1.avif" }
        ],
        "armes_secondaires": [
            { "nom": "Mk1 9mm", "image": "image/weapon/MK1_9mm.avif" },
			{ "nom": "ITA12S", "image": "image/weapon/ITA12S.avif" }
        ]
    },
	{
        "nom": "Mute",
        "image": "image/operator/r6-operators-list-mute.avif",
        "type": "defenseur",
        "armes_principales": [
            { "nom": "MP5K", "image": "image/weapon/MP5K.webp" },
            { "nom": "M590A1", "image": "image/weapon/M590A1.avif" }
        ],
        "armes_secondaires": [
            { "nom": "P226 Mk 25", "image": "image/weapon/P226_MK_25.avif" },
			{ "nom": "SMG-11", "image": "image/weapon/SMG-11.avif" }
        ]
    },
	{
        "nom": "Smoke",
        "image": "image/operator/r6-operators-list-smoke.avif",
        "type": "defenseur",
        "armes_principales": [
            { "nom": "M590A1", "image": "image/weapon/M590A1.avif" },
            { "nom": "FMG-9", "image": "image/weapon/FMG-9.avif" }
        ],
        "armes_secondaires": [
            { "nom": "P226 Mk 25", "image": "image/weapon/P226_MK_25.avif" },
            { "nom": "SMG-11", "image": "image/weapon/SMG-11.avif" }
        ]
    },
	{
        "nom": "Castle",
        "image": "image/operator/r6-operators-list-castle.avif",
        "type": "defenseur",
        "armes_principales": [
            { "nom": "UMP45", "image": "image/weapon/UMP45.avif" },
            { "nom": "M1014", "image": "image/weapon/M1014.avif" }
        ],
        "armes_secondaires": [
            { "nom": "5.7 USG", "image": "image/weapon/5.7_USG.avif" },
			{ "nom": "Super Shorty", "image": "image/weapon/SUPER_SHORTY.png" },
            { "nom": "M45 MEUSOC", "image": "image/weapon/M45_MEUSOC.avif" }
        ]
    },
	{
        "nom": "Pulse",
        "image": "image/operator/r6-operators-list-pulse.avif",
        "type": "defenseur",
        "armes_principales": [
            { "nom": "UMP45", "image": "image/weapon/UMP45.avif" },
            { "nom": "M1014", "image": "image/weapon/M1014.avif" }
        ],
        "armes_secondaires": [
            { "nom": "5.7 USG", "image": "image/weapon/5.7_USG.avif" },
            { "nom": "M45 MEUSOC", "image": "image/weapon/M45_MEUSOC.avif" }
        ]
    },
	{
        "nom": "Doc",
        "image": "image/operator/r6-operators-list-doc.avif",
        "type": "defenseur",
        "armes_principales": [
            { "nom": "MP5", "image": "image/weapon/MP5.avif" },
            { "nom": "P90", "image": "image/weapon/P90.avif" },
            { "nom": "SG-CQB", "image": "image/weapon/SG-CQB.avif" }
        ],
        "armes_secondaires": [
            { "nom": "P9", "image": "image/weapon/P9.avif" },
            { "nom": "LFP586", "image": "image/weapon/LFP586.avif" },
            { "nom": "Bailiff 410", "image": "image/weapon/Bailiff_410.avif" }
        ]
    },
	{
        "nom": "Rook",
        "image": "image/operator/r6-operators-list-rook.avif",
        "type": "defenseur",
        "armes_principales": [
            { "nom": "MP5", "image": "image/weapon/MP5.avif" },
            { "nom": "P90", "image": "image/weapon/P90.avif" },
            { "nom": "SG-CQB", "image": "image/weapon/SG-CQB.avif" }
        ],
        "armes_secondaires": [
            { "nom": "P9", "image": "image/weapon/P9.avif" },
            { "nom": "LFP586", "image": "image/weapon/LFP586.avif" }
        ]
    },
	{
        "nom": "Jäger",
        "image": "image/operator/r6-operators-list-jager.avif",
        "type": "defenseur",
        "armes_principales": [
            { "nom": "M870", "image": "image/weapon/M870.avif" },
            { "nom": "416-C Carbine", "image": "image/weapon/416-C_Carbine.avif" }
        ],
        "armes_secondaires": [
            { "nom": "P12", "image": "image/weapon/P12.avif" }
        ]
    },
	{
        "nom": "Bandit",
        "image": "image/operator/r6-operators-list-bandit.avif",
        "type": "defenseur",
        "armes_principales": [
            { "nom": "MP7", "image": "image/weapon/MP7.avif" },
            { "nom": "M870", "image": "image/weapon/M870.avif" }
        ],
        "armes_secondaires": [
            { "nom": "P12", "image": "image/weapon/P12.avif" }
        ]
    },
	{
        "nom": "Tachanka",
        "image": "image/operator/r6-operators-list-tachanka.avif",
        "type": "defenseur",
        "armes_principales": [
            { "nom": "DP27", "image": "image/weapon/Primary_gun_DP27.webp" },
            { "nom": "9x19VSN", "image": "image/weapon/9x19VSN.avif" }
        ],
        "armes_secondaires": [
            { "nom": "PMM", "image": "image/weapon/PMM.avif" },
            { "nom": "GSH-18", "image": "image/weapon/GSH-18.avif" },
            { "nom": "Bearing 9", "image": "image/weapon/BEARING_9.avif" }
        ]
    },
	{
        "nom": "Kapkan",
        "image": "image/operator/r6-operators-list-kapkan.avif",
        "type": "defenseur",
        "armes_principales": [
            { "nom": "9x19VSN", "image": "image/weapon/9x19VSN.avif" },
            { "nom": "SASG-12", "image": "image/weapon/SASG-12.avif" }
        ],
        "armes_secondaires": [
            { "nom": "PMM", "image": "image/weapon/PMM.avif" },
            { "nom": "GSH-18", "image": "image/weapon/GSH-18.avif" }
        ]
    }
]

let lastPickedOperators = []; // Stocke les 8 derniers opérateurs

function getRandomOperator(list) {
    let availableOperators = list.filter(op => !lastPickedOperators.includes(op.nom));

    // Si on a trop d'opérateurs exclus, on réinitialise la liste
    if (availableOperators.length < list.length / 2) {
        lastPickedOperators.splice(0, 2); // Supprime les 2 plus anciens pour libérer des choix
        availableOperators = list.filter(op => !lastPickedOperators.includes(op.nom));
    }

    // Tirage aléatoire
    const randomIndex = Math.floor(Math.random() * availableOperators.length);
    const pickedOperator = availableOperators[randomIndex];

    // Stocke dans l'historique des 8 derniers
    lastPickedOperators.push(pickedOperator.nom);
    if (lastPickedOperators.length > 8) {
        lastPickedOperators.shift(); // Supprime le plus ancien pour toujours garder 8
    }

    return pickedOperator;
}

function pickOperators() {
    // Filtrer les attaquants et défenseurs
    const attackers = operators.filter(op => op.type === "attaquant");
    const defenders = operators.filter(op => op.type === "defenseur");

    if (attackers.length === 0 || defenders.length === 0) {
        console.error("Il manque des opérateurs !");
        return;
    }

    // Tirer un attaquant et un défenseur
    const attacker = getRandomOperator(attackers);
    const defender = getRandomOperator(defenders);

    // Fonction pour choisir une arme (1 principale, 1 secondaire)
    function pickWeapons(operator) {
        let primaryWeapons = operator.armes_principales?.filter(w => w.nom) || [];
        let secondaryWeapons = operator.armes_secondaires?.filter(w => w.nom) || [];

        let chosenPrimary = primaryWeapons.length > 0 ? primaryWeapons[Math.floor(Math.random() * primaryWeapons.length)] : null;
        let chosenSecondary = secondaryWeapons.length > 0 ? secondaryWeapons[Math.floor(Math.random() * secondaryWeapons.length)] : null;

        return { chosenPrimary, chosenSecondary };
    }

    // Tirage des armes
    const attackerWeapons = pickWeapons(attacker);
    const defenderWeapons = pickWeapons(defender);

    // Mettre à jour l'affichage des opérateurs
    document.getElementById("attackerName").textContent = attacker.nom;
    document.getElementById("attackerImage").src = attacker.image;

    document.getElementById("defenderName").textContent = defender.nom;
    document.getElementById("defenderImage").src = defender.image;

    // Mettre à jour l'affichage des armes
    function updateWeaponDisplay(operatorType, weapons) {
        let primaryName = document.getElementById(operatorType + "PrimaryName");
        let primaryImage = document.getElementById(operatorType + "PrimaryImage");
        let secondaryName = document.getElementById(operatorType + "SecondaryName");
        let secondaryImage = document.getElementById(operatorType + "SecondaryImage");

        if (weapons.chosenPrimary) {
            primaryName.textContent = weapons.chosenPrimary.nom;
            primaryImage.src = weapons.chosenPrimary.image;
            primaryImage.classList.remove("hidden");
        } else {
            primaryName.textContent = "Aucune arme principale disponible";
            primaryImage.classList.add("hidden");
        }

        if (weapons.chosenSecondary) {
            secondaryName.textContent = weapons.chosenSecondary.nom;
            secondaryImage.src = weapons.chosenSecondary.image;
            secondaryImage.classList.remove("hidden");
        } else {
            secondaryName.textContent = "Aucune arme secondaire disponible";
            secondaryImage.classList.add("hidden");
        }
    }

    updateWeaponDisplay("attacker", attackerWeapons);
    updateWeaponDisplay("defender", defenderWeapons);

    // Afficher la section des opérateurs
    document.getElementById("operatorSection").classList.remove("hidden");
}

