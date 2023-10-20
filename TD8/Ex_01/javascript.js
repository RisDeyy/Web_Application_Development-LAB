document.querySelector('#button').addEventListener('click', function() {
    var prenom = document.querySelector('#prenom').value;
    var nom = document.querySelector('#nom').value;

    try {
        if (prenom !== '' && nom !== '') {
            alert("Bonjour " + prenom + " " + nom + "!");
        } else {
            throw "Erreur de nom vide";
        }
    } catch (error) {
        if (error === "Erreur de nom vide") {
            alert("Merci d'entrer un nom valide!");
        } else {
            alert("Une erreur inattendue est apparue.");
        }
    }
});
  
  