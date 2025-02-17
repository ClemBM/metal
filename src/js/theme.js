document.addEventListener('DOMContentLoaded', function () {
    const themeButton = document.getElementById('theme-button'); // Récupère le bouton de changement de thème
    const body = document.body; // Récupère l'élément body

    // Fonction pour obtenir un cookie par son nom
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    // Fonction pour définir un cookie
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Définit la date d'expiration du cookie
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${name}=${value}; ${expires}; path=/`; // Définit le cookie avec son nom, valeur et date d'expiration
    }

    // Charge le thème sauvegardé depuis le cookie
    let savedTheme = getCookie('theme');
    if (savedTheme) {
        if (savedTheme === 'black') {
            body.classList.remove("body"); // Réinitialise les styles pour éviter les conflits
        } else {
            body.classList.add("body"); // Définit la couleur de fond pour le thème clair
        }
    } else {
        // Si aucun thème n'est sauvegardé, définir le thème par défaut
        setCookie('theme', 'black', 30);
        savedTheme = 'black';
    }

    // Ajoute un écouteur d'événement pour le bouton de changement de thème
    themeButton.addEventListener('click', function () {
        if (savedTheme === 'black') {
            body.classList.add("body"); // Change la couleur de fond pour le thème clair
            setCookie('theme', 'color', 30); // Sauvegarde le thème comme clair
            savedTheme = 'color';
        } else {
            body.classList.remove("body"); // Change la couleur de fond pour le thème sombre
            setCookie('theme', 'black', 30); // Sauvegarde le thème comme sombre
            savedTheme = 'black';
        }
    });
});