/**
 * Classe pour gérer les routes de base de l'application
 * Utilisation du pattern singleton avec méthodes statiques
 */
class AppController {
  /**
   * Méthode pour gérer la route racine '/'
   * @param {Request} request - L'objet requête d'Express
   * @param {Response} response - L'objet réponse d'Express
   * Retourne un message simple avec statut 200
   */
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
