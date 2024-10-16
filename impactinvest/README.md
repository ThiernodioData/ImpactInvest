# README - Intégration Backend ImpactInvest

## Introduction

Ce document décrit l'intégration du backend nouvellement conçu avec notre frontend existant pour le projet ImpactInvest. Il détaille la structure du projet mise à jour, les étapes d'intégration, et les considérations importantes.

## 1. Structure du Projet

Nous avons réorganisé la structure du projet pour accommoder l'intégration du backend. La nouvelle structure est la suivante :

```
impactinvest/
│
├── public/
│   ├── index.html
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── main.js
│   │   ├── projects.js
│   │   ├── investments.js
│   │   ├── auth.js
│   │   └── blockchain.js
│   └── assets/
│       └── images/
│
├── src/
│   ├── config/
│   │   ├── database.js
│   │   └── blockchain.js
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── middleware/
│   └── app.js
│
├── contracts/
│   └── ImpactInvest.sol
│
└── package.json
```

## 2. Intégration du Backend

### a. Installation des Dépendances

Exécutez la commande suivante pour installer les dépendances nécessaires :

```bash
npm init -y
npm install express mongoose dotenv jsonwebtoken bcryptjs web3 @truffle/contract
```

### b. Configuration du Serveur

Créez le fichier principal du serveur `src/app.js`. Ce fichier configurera Express, connectera à la base de données, et définira les routes API.

### c. Modification des Fichiers Frontend

Mettez à jour vos fichiers JavaScript frontend pour utiliser la nouvelle API. Par exemple, dans `public/js/projects.js`, vous devrez remplacer les appels de données statiques par des appels API.

## 3. Gestion de l'Authentification

Un nouveau fichier `public/js/auth.js` a été créé pour gérer l'authentification côté client. Ce fichier contient des fonctions pour l'inscription, la connexion, et la gestion des tokens JWT.

## 4. Intégration de la Blockchain

Le fichier `public/js/blockchain.js` a été ajouté pour gérer les interactions avec la blockchain. Il contient des fonctions pour se connecter à Web3, charger le contrat intelligent, et effectuer des transactions.

## 5. Mise à Jour des Fichiers HTML

Assurez-vous d'inclure les nouveaux fichiers JavaScript dans vos pages HTML. Voici un exemple pour `public/index.html` :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ImpactInvest</title>
    <link rel="stylesheet" href="/css/styles.css">
</head>
<body>
    <!-- Votre contenu HTML existant -->

    <script src="https://cdn.jsdelivr.net/npm/web3@1.5.2/dist/web3.min.js"></script>
    <script src="/js/auth.js"></script>
    <script src="/js/projects.js"></script>
    <script src="/js/investments.js"></script>
    <script src="/js/blockchain.js"></script>
    <script src="/js/main.js"></script>
</body>
</html>
```

## Points Importants à Considérer

