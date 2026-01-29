window.logroData = window.logroData || {};
window.logroData.diamantes = {
    id: "diamantes",
    name: "DIAMANTES!",
    description: "Obtén diamantes.",
    requirements: {
        java: "Minar un diamante con un pico de hierro o superior.",
        bedrock: "Adquirir un diamante."
    },
    editionSpecific: {
        java: {
            parent: "Consigue un UPGRADE",
            xp: 50
        },
        bedrock: {
            gamerscore: 20
        }
    },
    tip: "El mejor nivel de minería para encontrar diamantes es Y= -58. ¡No olvides llevar antorchas!"
};