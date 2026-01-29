window.logroData = window.logroData || {};
window.logroData.hierro = {
    id: "hierro",
    name: "Consigue un UPGRADE",
    description: "Funde un lingote de hierro.",
    requirements: {
        java: "Obtener un lingote de hierro fundiendo mena de hierro o un objeto de hierro.",
        bedrock: "Funde cualquier pieza de hierro."
    },
    editionSpecific: {
        java: {
            parent: "¡A Picar!",
            xp: 35
        },
        bedrock: {
            gamerscore: 15
        }
    },
    tip: "Necesitarás un horno y algún combustible (carbón o madera). El hierro se encuentra en las capas Y alta y media."
};