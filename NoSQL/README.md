# README - MongoDB Tasks

Ce document décrit les commandes et scripts nécessaires pour accomplir diverses tâches avec MongoDB, à partir de l'insertion de documents à la manipulation de collections et à l'analyse des logs.

## **Tâche 1 : Lister toutes les bases de données**

### Commande MongoDB :
```javascript
show dbs
```

### Explication :
- **`show dbs`** : Affiche la liste de toutes les bases de données disponibles sur le serveur MongoDB avec leur taille.
- **Utilité :** Permet de vérifier les bases de données existantes.

---

## **Tâche 2 : Créer ou utiliser une base de données**

### Commande MongoDB :
```javascript
use my_db
```

### Explication :
- **`use my_db`** : Sélectionne ou crée la base de données `my_db`. Si elle n'existe pas encore, elle sera créée lorsque des données y seront insérées.
- **Utilité :** Simplifie la gestion des bases de données en les initialisant automatiquement.

---

## **Tâche 3 : Insérer un document dans une collection**

### Commande MongoDB :
```javascript
db.school.insertOne({ name: "Holberton school" });
```

### Explication :
- **`insertOne()`** : Insère un seul document dans la collection `school`. Si cette collection n'existe pas, elle sera créée automatiquement.
- **Utilité :** Ajouter des données à la base.

---

## **Tâche 4 : Lister tous les documents d'une collection**

### Commande MongoDB :
```javascript
db.school.find().pretty();
```

### Explication :
- **`find()`** : Récupère tous les documents dans la collection `school`.
- **`.pretty()`** : Formate l'affichage pour une meilleure lisibilité.
- **Utilité :** Permet de visualiser le contenu d'une collection.

---

## **Tâche 5 : Lister les documents avec un filtre**

### Commande MongoDB :
```javascript
db.school.find({ name: "Holberton school" }).pretty();
```

### Explication :
- **`find({})`** : Recherche les documents correspondant à un critère (ici, `name: "Holberton school"`).
- **Utilité :** Extraire des données spécifiques selon des critères précis.

---

## **Tâche 6 : Compter les documents dans une collection**

### Commande MongoDB :
```javascript
db.school.countDocuments();
```

### Explication :
- **`countDocuments()`** : Compte le nombre total de documents présents dans la collection `school`.
- **Utilité :** Fournir des statistiques sur la taille de la collection.

---

## **Tâche 7 : Mettre à jour des documents**

### Commande MongoDB :
```javascript
db.school.updateMany(
    { name: "Holberton school" },
    { $set: { address: "972 Mission street" } }
);
```

### Explication :
- **`updateMany()`** : Met à jour tous les documents correspondant au filtre `name: "Holberton school"`.
- **`$set`** : Ajoute ou met à jour le champ `address` avec la valeur fournie.
- **Utilité :** Modifier des données existantes ou ajouter de nouveaux champs.

---

## **Tâche 8 : Supprimer des documents**

### Commande MongoDB :
```javascript
db.school.deleteMany({ name: "Holberton school" });
```

### Explication :
- **`deleteMany()`** : Supprime tous les documents correspondant au filtre donné.
- **Utilité :** Nettoyer une collection en supprimant les données obsolètes.

---

## **Tâche 9 : Insérer un document en Python**

### Script Python :
```python
def insert_school(mongo_collection, **kwargs):
    """
    Insère un nouveau document dans une collection MongoDB.

    Args:
        mongo_collection: La collection pymongo.
        kwargs: Champs du document à insérer.

    Returns:
        ID du document inséré.
    """
    return mongo_collection.insert_one(kwargs).inserted_id
```

### Exemple :
```python
insert_school(school_collection, name="UCSF", address="505 Parnassus Ave")
```

---

## **Tâche 10 : Modifier les topics d'une école**

### Commande MongoDB :
```javascript
db.school.updateMany(
    { name: "Holberton school" },
    { $set: { topics: ["Sys admin", "AI", "Algorithm"] } }
);
```

### Explication :
- **`$set`** : Ajoute ou met à jour le champ `topics` avec une liste de valeurs.
- **Utilité :** Associer des thèmes à une école.

---

## **Tâche 11 : Trouver des écoles par sujet**

### Commande MongoDB :
```javascript
db.school.find({ topics: "Python" }).pretty();
```

### Explication :
- **`find({ "topics": topic })`** : Filtre les documents contenant un sujet donné dans leur champ `topics`.
- **Utilité :** Identifier les entités reliées à un thème.

---

## **Tâche 12 : Statistiques des logs Nginx**

### Script Python :
```python
def log_stats(mongo_collection):
    """
    Affiche des statistiques sur les logs Nginx stockés dans MongoDB.

    Args:
        mongo_collection: La collection pymongo.

    Prints:
        - Nombre total de logs.
        - Nombre de logs par méthode HTTP.
        - Nombre de requêtes GET vers `/status`.
    """
    total_logs = mongo_collection.count_documents({})
    print(f"{total_logs} logs")

    print("Methods:")
    for method in ["GET", "POST", "PUT", "PATCH", "DELETE"]:
        count = mongo_collection.count_documents({ "method": method })
        print(f"\tmethod {method}: {count}")

    status_check = mongo_collection.count_documents({ "method": "GET", "path": "/status" })
    print(f"{status_check} status check")
```

### Exemple :
- **Total des logs :**
```python
db.nginx.countDocuments({});
```
- **Par méthode HTTP :**
```python
db.nginx.countDocuments({ method: "GET" });
```
- **Requêtes `/status` :**
```python
db.nginx.countDocuments({ method: "GET", path: "/status" });
```

---

## Tableau des Commandes MongoDB les plus utilisées

| **Commande MongoDB**                   | **Description**                                                                 |
|----------------------------------------|---------------------------------------------------------------------------------|
| `show dbs`                             | Affiche toutes les bases de données disponibles.                              |
| `use <database_name>`                  | Crée ou utilise une base de données.                                          |
| `db.<collection>.insertOne({...})`     | Insère un document dans une collection.                                       |
| `db.<collection>.find()`               | Récupère tous les documents d'une collection.                                 |
| `db.<collection>.find({<filter>})`     | Filtre les documents en fonction des critères donnés.                          |
| `db.<collection>.countDocuments()`     | Compte le nombre total de documents d'une collection.                          |
| `db.<collection>.updateMany({...})`    | Met à jour tous les documents correspondant à un filtre.                     |
| `db.<collection>.deleteMany({...})`    | Supprime tous les documents correspondant à un filtre.                         |
| `db.<collection>.aggregate([...])`     | Effectue des opérations d'agrégation avancées sur une collection.              |
| `db.<collection>.createIndex({...})`   | Crée un index pour optimiser les performances des requêtes.                    |
| `db.<collection>.dropIndex(<index>)`   | Supprime un index existant dans une collection.                                |
| `db.<collection>.renameCollection()`   | Renomme une collection existante.                                              |
| `db.getCollectionInfos()`              | Liste les informations sur les collections d'une base de données.              |
| `db.runCommand({...})`                 | Exécute une commande MongoDB personnalisée.                                    |
| `db.<collection>.bulkWrite([...])`     | Effectue des opérations en masse (insertion, mise à jour, suppression).        |

---

## Conclusion
Ce guide fournit les commandes MongoDB et scripts Python essentiels pour manipuler des données dans MongoDB. Il couvre des cas pratiques allant de l'insertion et de la mise à jour des documents jusqu'à l'analyse des logs.
