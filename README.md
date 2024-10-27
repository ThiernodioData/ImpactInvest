
# ImpactInvest

## Description
Notre plateforme d'investissement basée sur la blockchain vise à démocratiser l'accès aux projets d'investissement en permettant à chaque individu, peu importe son niveau de revenu, de participer directement à des projets à fort potentiel. En utilisant la transparence et la sécurité offertes par la blockchain, nous garantissons des transactions vérifiables et une gestion automatisée des investissements via des smart contracts. Les investisseurs auront la possibilité de soutenir des projets dans divers secteurs tout en bénéficiant de la simplicité et de la confiance qu'apporte la technologie décentralisée.

## Prérequis
Avant de commencer, assurez-vous d'avoir installé :
- [Node.js](https://nodejs.org/) (v14.0.0 ou plus récent)
- [npm](https://www.npmjs.com/) (généralement inclus avec Node.js)
- L'extension navigateur [MetaMask](https://metamask.io/)

## Installation

1. Clonez le dépôt :
```bash
git clone https://github.com/ThiernodioData/ImpactInvest.git
cd ImpactInvest
```

2. Installez les dépendances :
```bash
# Installation des dépendances du projet
npm install

# Installation des dépendances spécifiques à la blockchain
npm install --save-dev hardhat
npm install @openzeppelin/contracts
npm install ethers
```

## Configuration des Smart Contracts

1. Compilez les smart contracts :
```bash
npx hardhat compile
```

2. Démarrez le réseau local :
```bash
npx hardhat node
```

3. Dans un nouveau terminal, déployez les contrats :
```bash
npx hardhat run scripts/deploy.js --network localhost
```

## Configuration du Frontend

1. Démarrez le serveur de développement React :
```bash
npm start
```

L'application devrait maintenant être accessible à l'adresse `http://localhost:3000`

## Structure du Projet
```
projet/
├── contracts/              # Smart contracts
│   └── UserManagement.sol
├── scripts/               # Scripts de déploiement
├── src/
│   ├── components/        # Composants React
│   ├── services/          # Services blockchain
│   └── App.js
├── hardhat.config.js      # Configuration Hardhat
└── package.json
```

## Configuration

1. Assurez-vous que MetaMask est connecté au bon réseau :
   - Pour le développement local : Connectez-vous à `localhost:8545`
   - ID du réseau : 31337
   - ID de chaîne : 1337

2. Importez un compte de test en utilisant les clés privées fournies par le nœud Hardhat

## Problèmes Courants et Solutions

1. Si vous rencontrez l'erreur "Module not found" :
   - Vérifiez que vous avez exécuté `npx hardhat compile`
   - Vérifiez que les chemins d'importation dans vos services sont corrects
   - Vérifiez que tous les artifacts des contrats sont générés

2. Problèmes de connexion MetaMask :
   - Assurez-vous d'être connecté au bon réseau
   - Réinitialisez votre compte dans MetaMask si vous avez des problèmes de nonce

3. Dépendances manquantes :
   - Exécutez `npm install` pour installer toutes les dépendances
   - Installez spécifiquement les packages manquants mentionnés dans les messages d'erreur

## Comment Contribuer

1. Forkez le dépôt
2. Créez votre branche de fonctionnalité (`git checkout -b feature/super-fonctionnalite`)
3. Committez vos modifications (`git commit -m 'Ajout d'une super fonctionnalité'`)
4. Poussez vers la branche (`git push origin feature/super-fonctionnalite`)
5. Ouvrez une Pull Request

## Licence
[Licence MIT](LICENSE)

## Contact
Ibrahima Tine - ibrahimatine29@gmail.com

Thierno Idrissa Diallo - 

Amadou Tidiane Diallo - amadoutidianediallo662@gmail.com


Lien du projet : [https://github.com/ThiernodioData/ImpactInvest.git](https://github.com/ThiernodioData/ImpactInvest.git)