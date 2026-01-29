// Este array contiene metadatos esenciales para la navegación y carga de logros.
// La propiedad 'file' indica el archivo JS individual donde se encuentran los detalles del logro.
window.LOGROS_MASTER_LIST = [
    // Logros básicos y clásicos (10 Logros mínimo)
    { id: "madera", title: "Obtener Madera", edition: ["java", "bedrock"], file: "madera.js", category: "Básico" },
    { id: "picar", title: "¡A Picar!", edition: ["java", "bedrock"], file: "picar.js", category: "Básico" },
    { id: "hierro", title: "Consigue un UPGRADE", edition: ["java", "bedrock"], file: "hierro.js", category: "Herramientas" },
    { id: "diamantes", title: "DIAMANTES!", edition: ["java", "bedrock"], file: "diamantes.js", category: "Riqueza" },
    { id: "matadragon", title: "Libera al End", edition: ["java", "bedrock"], file: "dragon.js", category: "Jefes" },
    { id: "portal", title: "Hemos de ir más Profundo", edition: ["java", "bedrock"], file: "portal.js", category: "Exploración" },
    { id: "ghast", title: "Vuelta al Remitente", edition: ["java", "bedrock"], file: "ghast.js", category: "Combate" },
    { id: "shulker", title: "Caja de Música", edition: ["java"], file: "shulker.js", category: "End" }, 
    { id: "beacon", title: "Faro, Faro, ¡Faro!", edition: ["java", "bedrock"], file: "beacon.js", category: "Poder" },
    { id: "zombie", title: "Cura un Aldeano Zombie", edition: ["java", "bedrock"], file: "zombie.js", category: "Utilidad" }
];

console.log("Biblioteca maestra de logros cargada.");