// Importer le module fs pour lire un fichier de type csv, json
const fs = require('fs');

const countStudents = (filePath) => {
  try {
    // lire fichier de manière synchrone, readFileSync prenant l'argm du chemin, et son type d'enc
    const data = fs.readFileSync(filePath, 'utf8');

    // Diviser le contenu en ligne :
    const lines = data.trim().split('\n'); // trim nettoyes les espace surperflus et split diviser avec ce qu'on choisi

    // vérification en-tête et données :
    if (lines.length <= 1) {
      console.log('Cannot load the database');
      return;
    }

    /**
     * slice(1):  Débute la fonction à partir de la ligne (1) pour éviter l'entête
     * Utilisation de la fonction "map" pour itérer à chaque ligne, du coup à partir de [1]
     */
    const students = lines.slice(1).map((line) => {
      // Utilisation de la destructuration pour assigner l'entête aux données
      // .split divise les lignes en colonnes, via le séparateur ",", se trouvant dans le csv
      const [firstname, lastname, age, field] = line.split(',');
      return {
        firstname, lastname, age, field,
      };
    });
    /**
     * Concretement, la fonction console.log(students) retourne :
     * { firstname: 'Johann', lastname: 'Kerbrou', age: '30', field: 'CS' },
     * { firstname: 'Guillaume', lastname: 'Salou', age: '30', field: 'SWE' },
     * { firstname: 'Arielle', lastname: 'Salou', age: '20', field: 'CS' },
     * etc...
     */

    // Affiche le nbr total de students :
    console.log(`Number of students: ${students.length}`);

    /**
     * utilisation de reduce dans un fct fléchée pour regrouper ts les students/field
     * Parcourir l'array et accumuler un résultat en appliquant une function à chq elmt.
     */
    const fields = students.reduce((acc, student) => {
      // Initialisation de acc pr un nouveau fiel :
      if (!acc[student.field]) { // si le tableau n'existe pas encore pour le field
        acc[student.field] = []; // alors, création d'un tableau, acc étant maintenat un field.
      }
      acc[student.field].push(student.firstname); // push chaque prénom, de l'acc correspondant
      // en gros : acc = { CS: ['Johann', 'etc...'], SWE: ['Guillaume', 'etc...'] };
      return acc;
    }, {}); // {} pour définir l'objet acc vide à la base

    for (const field in fields) {
      /**
       * Dans une boucle for...in :
       * field est chaque clé de l'objet fields (comme "CS" ou "SWE")
       * fields[field] est la valeur associée à cette clé, exemple :
       * fields[field][0] - Résultat : "Johann"
       */

      // Vérif si "field" est une clé de "fields", obligatoire pour eslint
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  } catch (error) {
    // En cas d'erreur (fichier non disponible, etc.)
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
