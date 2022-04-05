// Fonction de haut niveau pour gérer les erreurs (évite ainsi d'utiliser des blocs try... catch)
// Seul problème : n'envoie pas l'erreur au format JSON

// req = requête
// res = réponse
// next = passe à la prochaine fonction que tu trouves (évite d'être bloqué)
export const catchErrors = fn => (req, res, next) => {
    return fn(req, res, next).catch(next)
}