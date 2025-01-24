import readDatabase from '../utils';

/**
 * Classe pour gérer toutes les routes liées aux étudiants
 * Utilise la fonction readDatabase pour accéder aux données
 */
class StudentsController {
  /**
   * Récupère et affiche tous les étudiants groupés par field
   * @param {Request} request - Requête Express
   * @param {Response} response - Réponse Express
   */
  static async getAllStudents(request, response) {
    try {
      // Récupération des données via utils.js
      const fields = await readDatabase(process.argv[2]);

      // Construction de la réponse
      let output = 'This is the list of our students\n';

      // Tri alphabétique des fields et construction du message
      for (const field of Object.keys(fields).sort()) {
        output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      }

      response.status(200).send(output.trim());
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  /**
   * Récupère les étudiants filtrés par major (CS ou SWE)
   * @param {Request} request - Requête Express avec paramètre major
   * @param {Response} response - Réponse Express
   */
  static async getAllStudentsByMajor(request, response) {
    // Extraction du paramètre major de l'URL
    const { major } = request.params;

    // Validation du paramètre major
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const fields = await readDatabase(process.argv[2]);
      const students = fields[major] || [];
      response.status(200).send(`List: ${students.join(', ')}`);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
