// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

/**
 * @title ImpactInvest
 * @dev Contrat intelligent pour gérer des campagnes d'investissement.
 * Chaque campagne permet aux investisseurs de recevoir des fonds avec un retour sur investissement (ROI).
 */
contract ImpactInvest {

    struct Campaign {
        address owner; // Propriétaire du projet
        string title; // Titre du projet
        string description; // Description du projet
        uint256 target; // Objectif de financement
        uint256 deadline; // Date limite (timestamp Unix)
        uint256 amountCollected; // Montant total collecté
        string image; // Image pour le projet
        address[] investors; // Liste des adresses des investisseurs
        uint256[] investments; // Montant investi par chaque investisseur
        bool fundsDistributed; // Indicateur si les fonds ont été distribués
        uint256 generatedRevenue; // Montant des revenus générés par le projet
        bool projectSuccessful; // Statut du projet (succès ou non)
    }

    mapping(uint256 => Campaign) public campaigns; // Mapping des ID aux campagnes
    uint256 public numberOfCampaigns = 0; // Nombre total de campagnes

    /**
     * @dev Crée une nouvelle campagne d'investissement.
     * @param _owner Adresse du propriétaire du projet.
     * @param _title Titre du projet.
     * @param _description Description du projet.
     * @param _target Objectif de financement.
     * @param _deadline Date limite (timestamp Unix).
     * @param _image Image associée au projet.
     * @return L'ID de la campagne nouvellement créée.
     */
    function createCampaign(
        address _owner,
        string memory _title,
        string memory _description,
        uint256 _target,
        uint256 _deadline,
        string memory _image
    )
        public
        returns (uint256)
    {
        require(_deadline > block.timestamp, "La date limite doit etre dans le futur.");
        require(_target > 0, "L'objectif de financement doit etre superieur a 0.");

        Campaign storage campaign = campaigns[numberOfCampaigns];
        campaign.owner = _owner;
        campaign.title = _title;
        campaign.description = _description;
        campaign.target = _target;
        campaign.deadline = _deadline;
        campaign.amountCollected = 0;
        campaign.image = _image;
        campaign.fundsDistributed = false;
        campaign.projectSuccessful = false;

        numberOfCampaigns++;

        return numberOfCampaigns - 1;
    }

    /**
     * @dev Permet aux utilisateurs d'investir dans un projet.
     * @param _id ID de la campagne d'investissement.
     */
    function investInCampaign(uint256 _id) public payable {
        require(_id < numberOfCampaigns, "La campagne n'existe pas.");
        require(msg.value > 0, "Le montant de l'investissement doit etre superieur a zero.");

        Campaign storage campaign = campaigns[_id];
        require(block.timestamp < campaign.deadline, "La campagne est terminee.");

        campaign.investors.push(msg.sender);
        campaign.investments.push(msg.value);
        campaign.amountCollected += msg.value;
    }

    /**
     * @dev Enregistre les revenus générés par le projet une fois terminé.
     * Ce montant sera utilisé pour calculer et redistribuer les fonds avec le ROI aux investisseurs.
     * @param _id ID de la campagne d'investissement.
     * @param _revenue Montant des revenus générés par le projet.
     */
    function recordGeneratedRevenue(uint256 _id, uint256 _revenue) public {
        require(_id < numberOfCampaigns, "La campagne n'existe pas.");
        Campaign storage campaign = campaigns[_id];
        require(msg.sender == campaign.owner, "Seul le proprietaire peut enregistrer les revenus.");
        require(_revenue > 0, "Le revenu genere doit etre superieur a 0.");
        require(!campaign.projectSuccessful, "Les fonds ont deja ete redistribues.");

        campaign.generatedRevenue = _revenue;
        campaign.projectSuccessful = true;
    }

    /**
     * @dev Redistribue les fonds investis avec un ROI aux investisseurs lorsque le projet génère des revenus.
     * Chaque investisseur reçoit son montant initial + un pourcentage de profit en fonction des revenus.
     * @param _id ID de la campagne d'investissement.
     * @param roiPercentage Pourcentage de retour sur investissement (ROI).
     */
    function distributeFundsWithROI(uint256 _id, uint256 roiPercentage) public {
        require(_id < numberOfCampaigns, "La campagne n'existe pas.");
        Campaign storage campaign = campaigns[_id];
        require(campaign.projectSuccessful, "Le projet n'a pas encore genere de revenus.");
        require(!campaign.fundsDistributed, "Les fonds ont deja ete redistribues.");
        require(roiPercentage > 0, "Le pourcentage de retour sur investissement doit etre superieur a 0.");

        uint256 totalInvested = campaign.amountCollected;
        uint256 totalRevenueWithROI = totalInvested + (totalInvested * roiPercentage / 100);

        for (uint256 i = 0; i < campaign.investors.length; i++) {
            uint256 investment = campaign.investments[i];
            uint256 roiShare = (investment * totalRevenueWithROI) / totalInvested;

            (bool sent,) = payable(campaign.investors[i]).call{value: roiShare}("");
            require(sent, "Echec du transfert des fonds.");
        }

        campaign.fundsDistributed = true;
    }

    /**
     * @dev Récupère la liste des investisseurs et des montants investis pour une campagne spécifique.
     * @param _id ID de la campagne d'investissement.
     * @return (address[], uint256[]) Listes des adresses des investisseurs et des montants investis.
     */
    function getInvestors(uint256 _id) view public returns (address[] memory, uint256[] memory) {
        require(_id < numberOfCampaigns, "La campagne n'existe pas.");
        return (campaigns[_id].investors, campaigns[_id].investments);
    }

    /**
     * @dev Récupère toutes les campagnes stockées dans le contrat.
     * @return Campaign[] Un tableau contenant toutes les campagnes existantes.
     */
    function getCampaigns() public view returns (Campaign[] memory) {
        Campaign[] memory allCampaigns = new Campaign[](numberOfCampaigns);

        for (uint256 i = 0; i < numberOfCampaigns; i++) {
            Campaign storage item = campaigns[i];
            allCampaigns[i] = item;
        }

        return allCampaigns;
    }
}
