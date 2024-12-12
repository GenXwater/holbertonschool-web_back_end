# README - Python Asynchronous Comprehension

Ce document rassemble tous les concepts fondamentaux liés aux compréhensions asynchrones en Python, ainsi que les exigences du projet, afin de fournir une vision d’ensemble. Il couvre les notions de programmation asynchrone, les générateurs asynchrones, les compréhensions asynchrones, l’annotation de type, la documentation, les ressources recommandées, les objectifs pédagogiques, ainsi que les exigences en termes de style et de configuration.

---

## Contexte du Projet : Async Comprehension

L’objectif principal de ce projet est de vous familiariser avec les fonctionnalités asynchrones introduites à partir de Python 3.5 (async/await) et enrichies avec les compréhensions asynchrones (PEP 530) dans Python 3.6. À travers ce projet, vous apprendrez à :

- Écrire des générateurs asynchrones.
- Utiliser les compréhensions asynchrones.
- Annoter vos générateurs avec des types.
- Respecter des standards de code, de documentation, et de style.

---

## Ressources Recommandées

- [PEP 530 – Asynchronous Comprehensions](https://peps.python.org/pep-0530/)  
  Décrit l’introduction des compréhensions asynchrones en Python, leur syntaxe et leur justification.

- [What’s New in Python: Asynchronous Comprehensions / Generators](https://docs.python.org/3/whatsnew/3.6.html#pep-530-asynchronous-comprehensions)  
  Présente les nouveautés de Python 3.6, en particulier l’apparition des compréhensions asynchrones et des générateurs asynchrones.

- [Type-hints for generators](https://docs.python.org/3/library/typing.html#typing.Generator)  
  Documente la manière d’annoter le code Python, dont les générateurs et générateurs asynchrones, pour clarifier les types produits.

---

## Objectifs Pédagogiques

À la fin de ce projet, vous devriez être capable d’expliquer sans aide externe :

1. **Comment écrire un générateur asynchrone :**  
   Vous comprendrez la syntaxe `async def`, l’utilisation du mot-clé `yield` dans un contexte asynchrone, l’usage de `async for` pour l’itération, et la gestion d’opérations asynchrones (via `await`).

2. **Comment utiliser les compréhensions asynchrones :**  
   Vous saurez transformer du code itératif asynchrone en une compréhension directe, plus concise et lisible, du type :  
   ```python
   result = [x async for x in async_generator()]
   ```

3. **Comment annoter les générateurs et coroutines :**  
   Vous apprendrez à utiliser les hints de type (`typing.AsyncGenerator`, `typing.List`, etc.) pour rendre votre code plus clair et maintenable, et faciliter la détection d’erreurs par des analyseurs statiques.

---

## Programmation Asynchrone en Python : Principes Fondamentaux

La programmation asynchrone permet d’écrire du code non bloquant, idéal pour les opérations lentes d’E/S (I/O), comme les requêtes réseau, l’accès aux fichiers, ou les appels à des API externes. Avec `async` et `await`, vous pouvez exécuter plusieurs tâches de manière concurrente sans bloquer le flux d’exécution.

### Async / Await

Python offre des mots-clés spécifiques (`async`, `await`) permettant d’écrire du code asynchrone. Cela favorise un style non bloquant.

```python
import asyncio

async def example():
    await asyncio.sleep(1)
    return "Fini !"

asyncio.run(example())
```

### Avantages du code asynchrone

- Gérer un grand nombre de connexions simultanées sur un serveur web.
- Lancer plusieurs appels à des APIs externes en parallèle.
- Gérer des communications temps réel via WebSockets.
- Effectuer des tâches longues (traitement de données, génération de rapports) sans geler l’application.

---

## Générateurs Asynchrones

Les générateurs asynchrones combinent les générateurs (fonctions utilisant `yield`) avec le paradigme asynchrone (`async`, `await`). Ils s’itèrent avec `async for` plutôt que `for`.

### Exemple

```python
import asyncio
import random
from typing import AsyncGenerator

async def async_generator() -> AsyncGenerator[float, None]:
    """
    Génère 10 nombres aléatoires entre 0 et 10, en attendant 1 seconde entre chaque.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)

async def main():
    async for val in async_generator():
        print(val)

asyncio.run(main())
```

---

## Compréhensions Asynchrones

Introduites par la PEP 530, les compréhensions asynchrones permettent d’utiliser la syntaxe de compréhension (`[...]`) avec `async for`. Cela rend le code plus expressif et concis.

### Exemple sans compréhension

```python
result = []
async for x in async_generator():
    result.append(x)
```

### Exemple avec compréhension asynchrone

```python
result = [x async for x in async_generator()]
```

Cette fonctionnalité est utile pour construire des listes, des ensembles ou des dictionnaires à partir de données obtenues de manière asynchrone, sans écrire une boucle complète.

---

## Annotations de Type (Type Hints)

Les annotations de type améliorent la lisibilité du code et aident à la maintenance. Elles permettent aux outils de vérification statique, comme `mypy`, de détecter plus facilement les erreurs.

### Exemples

Pour un générateur asynchrone renvoyant des `float` :

```python
from typing import AsyncGenerator

async def async_generator() -> AsyncGenerator[float, None]:
    ...
```

Pour une fonction renvoyant une liste de `float` :

```python
from typing import List

async def async_comprehension() -> List[float]:
    return [val async for val in async_generator()]
```

Les annotations n’affectent pas l’exécution du code, mais en clarifient l’intention.

---

## Exigences du Projet

### Éditeurs autorisés

- `vi`, `vim`, `emacs`.

### Environnement d’exécution

- Ubuntu 20.04 LTS.
- Python 3.9.

### Style de code

- Conformité à `pycodestyle` (version 2.5.x).

### Documentation

- Chaque fichier doit avoir un docstring décrivant son objectif.
- Chaque fonction et coroutine doit avoir un docstring décrivant son rôle et sa valeur de retour.
- La documentation doit être claire, complète et non limitée à un simple mot.

### Fichier README.md

- Un fichier `README.md` à la racine du projet est obligatoire, expliquant le contexte, les objectifs, et les instructions de base.

### Autres contraintes

- Chaque fichier doit se terminer par une nouvelle ligne.
- La première ligne de chaque fichier doit être `#!/usr/bin/env python3`.
- La longueur des fichiers sera vérifiée avec `wc`.
- Toutes les fonctions et coroutines doivent être annotées avec des types.
- Chaque module et fonction doit être documenté.

---

## Cas Concrets d’Utilisation dans le Web

- **Serveurs web asynchrones (FastAPI, aiohttp, Sanic)** : gérer efficacement un grand nombre de connexions simultanées.
- **Appels parallèles à des API externes** : réduire le temps total d’attente en lançant plusieurs requêtes en parallèle.
- **WebSockets et temps réel** : gérer des flux de données continus sans bloquer.
- **Tâches d’arrière-plan longue durée** : exécuter des opérations complexes sans bloquer les autres requêtes.

---

## Conclusion

Les générateurs asynchrones, les compréhensions asynchrones et les annotations de type sont des outils essentiels pour écrire un code asynchrone efficace, clair et maintenable. En comprenant le paradigme `async/await`, en adoptant de bonnes pratiques de style, de documentation, et en utilisant des annotations de type, vous serez mieux équipé pour créer des applications modernes, réactives et évolutives.

L’objectif de ce projet est de vous donner les clés pour maîtriser ces concepts, vous permettant ainsi de concevoir et maintenir des services Python plus performants et plus robustes.
