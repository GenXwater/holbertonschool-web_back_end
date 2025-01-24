// Importer fs/promises pour utiliser les promesses natives de Node.js
import fs from 'fs/promises';

/**
 * Fonction qui lit et traite les données de la base CSV
 * @param {string} filePath - Chemin vers le fichier database.csv
 * @returns {Promise<Object>} - Promesse qui résout vers un objet avec les étudiants par field
 */
const readDatabase = async (filePath) => {
  try {
    // Lecture asynchrone du fichier avec encodage utf8
    const data = await fs.readFile(filePath, 'utf8');

    // Découpage du contenu en lignes et nettoyage des espaces
    const lines = data.trim().split('\n');

    // Vérification qu'il y a au moins l'en-tête + une ligne
    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    // Transformation des lignes en objets, en ignorant l'en-tête (slice(1))
    const students = lines.slice(1).map((line) => {
      // On ne prend que firstname et field qui nous intéressent
      const [firstname, , , field] = line.split(',');
      return { firstname, field };
    });

    // Regroupement des étudiants par field avec reduce
    const fields = students.reduce((acc, student) => {
      // Si le field n'existe pas encore, on crée un tableau vide
      if (!acc[student.field]) {
        acc[student.field] = [];
      }
      // On ajoute le prénom au tableau du field correspondant
      acc[student.field].push(student.firstname);
      return acc;
    }, {});

    return fields;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

export default readDatabase;
