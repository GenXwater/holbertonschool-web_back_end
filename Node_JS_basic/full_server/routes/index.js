import express from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * Création du routeur Express pour gérer toutes nos routes
 * Express.Router() permet de modulariser la gestion des routes
 */
const router = express.Router();

// Route racine gérée par AppController
router.get('/', AppController.getHomepage);

// Routes pour les étudiants gérées par StudentsController
router.get('/students', StudentsController.getAllStudents);

// Route avec paramètre :major pour filtrer par spécialité
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router;
