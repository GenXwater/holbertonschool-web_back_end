import express from 'express';
import routes from './routes';

/**
 * Configuration du serveur Express
 * Création d'une instance express
 */
const app = express();

// Définition du port d'écoute
const port = 1245;

/**
 * Utilisation des routes définies dans routes/index.js
 * Toutes les routes seront préfixées par '/'
 */
app.use('/', routes);

// Démarrage du serveur sur le port défini
app.listen(port);

// Export de l'application pour les tests
export default app;
