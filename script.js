document.addEventListener("DOMContentLoaded", function() {
    const visitsElement = document.getElementById('visits');
    const lastVisitElement = document.getElementById('lastVisit');
    const lastUpdateElement = document.getElementById('lastUpdate');
    
    // Fonction pour formater la date et l'heure
    function formatDate(date) {
        return date.toLocaleDateString() + ' à ' + date.toLocaleTimeString();
    }

    // Récupérer la date de la dernière mise à jour
    const lastUpdate = new Date(document.lastModified);

    // Afficher la date et l'heure de la dernière mise à jour
    lastUpdateElement.innerText = `Dernière mise à jour du site : ${formatDate(lastUpdate)}`;
    
    // Vérifier si le visiteur a déjà visité le site
    const visitCount = localStorage.getItem('visitCount');
    const lastVisit = localStorage.getItem('lastVisit');
    
    if (visitCount) {
        // Augmenter le nombre de visites
        localStorage.setItem('visitCount', parseInt(visitCount) + 1);
        visitsElement.innerText = `Nombre de visites : ${parseInt(visitCount) + 1}`;
    } else {
        // Initialiser le nombre de visites
        localStorage.setItem('visitCount', 1);
        visitsElement.innerText = 'Nombre de visites : 1';
    }
    
    if (lastVisit) {
        lastVisitElement.innerText = `Dernière visite : ${formatDate(new Date(lastVisit))}`;
    } else {
        lastVisitElement.innerText = 'Ceci est votre première visite.';
    }
    
    // Mettre à jour l'heure de la dernière visite
    localStorage.setItem('lastVisit', new Date().toString());
});
